import Alpine from `alpinejs`

var supabase = createSupabase();

var infos = supabase.auth.user();
console.log(JSON.stringify(infos));

var showToast = (self, message) => {
    self.msg = message; 
    var toast = new bootstrap.Toast(document.querySelector(".toast"));
    toast.show();
}

var handleResponse = (self, response) => {
    if (response.error) { 
        console.log(response.error.message); 
        showToast(self, response.error.message);
    } else { 
        console.log(response); window.location="/"; 
    }
}
var handleError = (self, err) => {
    console.log(err);
    showToast(self, err.response.text);
}

Alpine.data('user', () => ({
    identity: infos ? infos.identities[0].identity_data : { email: "", sub: "" },
    logged: infos != null,
    results: [],
    progression: {},
    submitted: {},
    loaded: false,
    msg: "",
    form: {
        email: '',
        password: '',
    },
    submission: {
        network: '',
        address: '',
    },
    quizz: {
        entries: [],
        answers: {}
    },
    signin() {
        var self = this;
        supabase.auth
        .signIn({ email: self.form.email, password: self.form.password })
        .then((response) => { handleResponse(this, response); })
        .catch((err) => { handleError(this, err); });
    },
    signup() {
        var self = this;
        supabase.auth
        .signUp({ email: self.form.email, password: self.form.password })
        .then((response) => { handleResponse(this, response); })
        .catch((err) => { handleError(this, err); });
    },
    signout() {
        supabase.auth.signOut()
        .then((response) => { handleResponse(this, response); })
        .catch((err) => { handleError(this, err); });
    },
    reset() {
        var self = this;
        supabase.auth.api
        .resetPasswordForEmail({ email: self.form.email })
        .then((response) => { handleResponse(this, response); })
        .catch((err) => { handleError(this, err); });
    },
    publish(id_lesson, data_type, content) {
        var self = this;
        supabase.from('results').insert({ number: id_lesson, type: data_type, content: content, created_by: self.identity.sub }).single()
        .then((response) => {
            if (response.error) { 
                console.log(response.error.message); 
                showToast(self, response.error.message);
            } else { 
                console.log(response);
            }
        })
        .catch((err) => { handleError(this, err); });
    },
    async retrieve() {
        var self = this;
        var response = await supabase.from('results').select('*').order('id').filter('created_by', 'eq', self.identity.sub);        
        if (response.error) { 
            console.log(response.error.message); 
            showToast(self, response.error.message);
        } else { 
            console.log(response);
            self.results.splice(0, self.results.length);
            response.data.forEach(x => { self.results.push(JSON.stringify(x)); if (x.type == "progress") self.progression[x.number] = 1; else if (x.type == "submit") self.submitted[x.number] = x.content });
            self.loaded = true;
        }        
    },
    isDone(x) {
        return (x in this.progression);
    }
}))

Alpine.start()
