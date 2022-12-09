require('dotenv').config({ path: '.env.local' })
const fs = require('fs')

const url = process.env.APP_SUPABASE_URL; 
const key = process.env.APP_SUPABASE_KEY;

const content = `
var supabase = supabase.createClient("${url}", "${key}");

var infos = supabase.auth.user();
console.log(JSON.stringify(infos));

function user() {
    return {
    logged: infos != null,
    form: {
        email: '',
        password: '',
    },
    signin() {
        var self = this;
        supabase.auth
        .signIn({ email: self.form.email, password: self.form.password })
        .then((response) => { if (response.error) { console.log(response.error.message); } else { console.log(response); window.location="/"; } })
        .catch((err) => { console.log(err.response.text); })
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
    }
}
`;
const filePath = `static/js/auth.js`;
fs.writeFile(filePath, content, (err) => {
    if (err) {
        throw err
    } else {
        console.log(`${filePath} created!`)
    }
});
