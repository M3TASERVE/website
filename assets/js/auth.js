import Alpine from `alpinejs`

(async () => {

var supabase = createSupabase();

const { data: { session } } = await supabase.auth.getSession();

var user = null;
if (session != null) {
    const { data, error } = await supabase.auth.getUser();
    if (!error) {
        console.log(data.user);
        user = data.user;
    }
}

var showToast = (self, message) => {
    self.msg = message; 
    var toast = new bootstrap.Toast(document.querySelector(".toast"));
    toast.show();
}

var redirectToHome = () => { setTimeout(() => { window.location="/"; }, 1000); }

Alpine.data('user', () => ({
    identity: user ? { email: user.email, sub: user.id } : { email: "", sub: "" },
    logged: user != null,
    results: [],
    progression: {},
    submitted: {},
    loaded: false,
    msg: "",
    form: {
        email: { value: "", errorMessage: "" },
        password: { value: "", errorMessage: "" },        
        passwordConfirm: { value: "", errorMessage: "" },
        validation: { successMessage: "", errorMessage: "" }
    },
    submission: {
        network: '',
        address: '',
    },
    quizz: {
        entries: [],
        answers: {}
    },
    submit: function (submitType) {
        let flag = true;
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (submitType != 'password' && (this.form.email.value.length == 0 || !this.form.email.value.match(validRegex))) { this.form.email.errorMessage = "Please enter a valid email."; flag = false; } else { this.form.email.errorMessage = ""; }
        if (submitType == 'signup' && this.form.password.value != this.form.passwordConfirm.value) { this.form.passwordConfirm.errorMessage = "Passwords are different."; flag = false; } else { this.form.passwordConfirm.errorMessage = ""; }
        if (submitType != 'reset' && this.form.password.value.length < 10) { this.form.password.errorMessage = "Password length must be at least 10 characters."; flag = false; } else { this.form.password.errorMessage = ""; }
        if (flag) { if (submitType == 'signin') this.signin(); else if (submitType == 'signup') this.signup(); else if (submitType == 'reset') this.reset(); else if (submitType == 'password') this.password(); }
    },
    isDone(x) {
        return (x in this.progression);
    },
    async signin() {
        var self = this;    
        self.form.validation.errorMessage = "";
        self.form.validation.successMessage = "";
        const { data, error } = await supabase.auth.signInWithPassword({ email: self.form.email.value, password: self.form.password.value }, { redirectTo: window.location.origin });
        if (error != null) {
            console.log(error);
            self.form.validation.errorMessage = "We were unable to verify your credentials";
        } else {
            console.log(data);
            self.form.validation.successMessage = "Login success !";
            redirectToHome();
        }
    },
    async signup() {
        var self = this;
        const { data, error } = await supabase.auth.signUp({ email: self.form.email.value, password: self.form.password.value })
        if (error != null) {
            console.log(error);
            showToast(self, error);
        } else {
            console.log(data);
            self.form.validation.successMessage = "Email sent !";
            redirectToHome();
        }
    },
    async signout() {
        const { data, error } = await supabase.auth.signOut()
        if (error != null) {
            console.log(error);
            showToast(self, error);
        } else {
            console.log(data);
            redirectToHome();
        }
    },
    async reset() {        
        var self = this;
        const { data, error } = await supabase.auth.resetPasswordForEmail(self.form.email.value, { redirectTo: window.location.origin+"/password" })
        if (error != null) {
            console.log(error);
            showToast(self, error);
        } else {
            console.log(data);
            self.form.validation.successMessage = "Email sent !";
            redirectToHome();
        }
    },
    async password() {
        var self = this;
        const { data, error } = await supabase.auth.updateUser({ password: self.form.password.value });
        if (error != null) {
            console.log(error);
            showToast(self, error);
        } else {
            console.log(data);
            self.form.validation.successMessage = "Password changed !";
            redirectToHome();
        }
    },
    async publish(id_lesson, data_type, content) {
        var self = this;
        var response = await supabase.from('results').insert({ number: id_lesson, type: data_type, content: content, created_by: self.identity.sub }).single()
        if (response.error) { 
            console.log(response.error.message); 
            showToast(self, response.error.message);
        } else { 
            console.log(response);
        }
    },
    async retrieve() {
        var self = this;
        if (self.logged) {
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
        }
    }
}))

Alpine.start();

})();
