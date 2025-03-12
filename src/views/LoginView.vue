<template>
    <v-card id="login-card" elevation="6" >
        <v-tabs v-model="currentTab" class="d-none">
            <v-tab value="login">Login</v-tab>
            <v-tab value="reset">Reset</v-tab>
            <v-tab value="register">Register</v-tab>
        </v-tabs>
        <v-tabs-window v-model="currentTab">
            <v-tabs-window-item value="login">
                <img src="@/assets/logo.png" id="logo">
                <div id="input-form">
                    <h1>Hello!</h1>            
                    <v-text-field label="Username" v-model="this.loginForm.username"></v-text-field>
                    <v-text-field label="Password" type="password" v-model="this.loginForm.password"></v-text-field>            
                </div>
                <a @click="currentTab = registerForm.tab">No Account? Register Here!</a>
                <p @click="currentTab = resetForm.tab">Reset Password</p>
                <v-btn class="button" @click="login">Login</v-btn>
            </v-tabs-window-item>
            <v-tabs-window-item value="reset">
                <img src="@/assets/logo.png" id="logo">
                <div id="input-form">
                    <h1>Reset Password</h1>            
                    <v-text-field label="Username"></v-text-field>
                    <v-text-field label="Password"></v-text-field>
                    <p @click="currentTab = loginForm.tab">Remembered it?</p>      
                </div>
                <v-btn class="button">Login</v-btn>                
            </v-tabs-window-item>
            <v-tabs-window-item value="register">
                <img src="@/assets/logo.png" id="logo">
                <div id="input-form">
                    <h1>Register</h1>            
                    <v-text-field label="Username"></v-text-field>
                    <v-text-field label="Password"></v-text-field>    
                    <p @click="currentTab = loginForm.tab">Got an account?</p>         
                </div>
                <v-btn class="button">Login</v-btn>                
            </v-tabs-window-item>
        </v-tabs-window>
    </v-card>
</template>

<script>
import { useUserStore } from "@/stores/userStore"

export default {
    name: "LoginView",
    data() {
        return {
            currentTab: 0,
            loginForm: {
                username: null,
                password: null,
                tab: 0
            },
            resetForm: {
                username: null,
                newPassword: null,
                tab: 1
            },
            registerForm: {
                username: null,
                newPassword: null,
                tab: 2
            }
        }
    },
    methods: {
        async login() {
            const store = useUserStore();
            let form = new FormData();
            form.append('username', this.loginForm.username);
            form.append('password', this.loginForm.password);

            let data = await this.$apiService.user.login(form);

            this.$cookies.set("token", data.token);
            
            store.setToken(data.token);
            store.setProfile(data.profile);
            store.setAuthenticated(true);

            this.$router.push({name: 'home'})
        }
    }
}
</script>

<style scoped>
#login-card {
    max-width: 25%;
    position: absolute;
    top: 50%; right: 50%;
    transform: translate(50%,-50%);
    height: auto;
    padding: 10px;
    border-radius: 25px;
}

#logo {
    margin-top: -50px;
    max-width: 75%;
}

#input-form {
    margin-top: -50px;
    padding: 0 25px;
}

.button {
    margin-top: 5px;
    border-radius: 25px;
    width: 50%;
    background-color: #62BFED;
    color: #FFFFFF;
    font-size: 1.4rem;
}

.button:hover {
    background-color: #4B94B8;
}
</style>