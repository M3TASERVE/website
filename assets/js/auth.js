import Alpine from `alpinejs`

var supabase = createSupabase();

var infos = supabase.auth.user();
console.log(JSON.stringify(infos));

Alpine.data('user', () => ({
    identity: infos ? infos.identities[0].identity_data : { email: "", sub: "" },
    logged: infos != null,
    msg: "Hello, world!",
    showToast(message) {
        this.msg = message; 
        var toast = new bootstrap.Toast(document.querySelector(".toast"));
        toast.show();
    },
    form: {
        email: '',
        password: '',
    },
    signin() {
        var self = this;
        supabase.auth
        .signIn({ email: self.form.email, password: self.form.password })
        .then((response) => { if (response.error) { console.log(response.error.message); this.showToast(response.error.message); } else { console.log(response); window.location="/"; } })
        .catch((err) => { console.log(err); this.showToast(err.response.text); });
    },
    signup() {
        var self = this;
        supabase.auth
        .signUp({ email: self.form.email, password: self.form.password })
        .then((response) => { response.error ? console.log(response.error.message) : console.log(response); })
        .catch((err) => { console.log(err.response.text); })
    },
    signout() {
        supabase.auth.signOut()
        .then((response) => { if (response.error) { console.log(response.error.message); } else { console.log(response); window.location="/"; } })
        .catch((err) => { console.log(err.response.text); })
    },
    reset() {
        var self = this;
        supabase.auth
        .resetPasswordForEmail({ email: self.form.email })
        .then((response) => { response.error ? console.log(response.error.message) : console.log(response); })
        .catch((err) => { console.log(err.response.text); })
    }
}))

Alpine.start()
