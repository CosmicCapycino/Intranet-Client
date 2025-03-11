import { reactive } from "vue";

const profile = reactive();
const cookies = reactive();

function setProfile(profileData) {
    this.profile = JSON.parse(profileData);
}

function setToken(token) {
    this.cookies.set("token", token, '7d')
}

function install(app) {
    app.config.globalProperties.$auth = this;
    if(app.config.globalProperties.$auth === this) {
        console.log("Auth service installed!")
        this.cookies = app.config.globalProperties.$cookies;
        console.log(this.cookies);
    } else {
        console.error("Something went wrong installing the auth service!")
    }
}

const auth = {
    profile,
    install,
    setProfile,
    setToken
}

export default auth;