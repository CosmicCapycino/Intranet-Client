import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        authenticated: false,
        profile: {
            forename: "",
            surname: "",
            username: ""
        }
    }),
    getters: {

    },
    actions: {
        setProfile(profile) {
            this.profile.forename = profile.forename;
            this.profile.surname = profile.surname;
            this.profile.username = profile.username;
        },
        setAuthenticated(status) {
            this.authenticated = status;
        }
    }
})