import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Services
import apiService from "@/services/apiService"

// Plugins
import auth from './plugins/auth'
import { createPinia } from 'pinia'
const cookies = require('vue-cookies')
const pinia = createPinia()

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App);

fetch(process.env.BASE_URL + 'config.json').then((response) => response.json()).then((config) => {
  // Everything below here setups up the container regardless of if auth is enabled
  // TODO: Add auth to axios
  app.use(pinia)
  app.use(router);
  app.use(cookies, { expires: '7d'})
  app.use(auth)
  app.use(apiService, true, config.apiServer)
  app.use(vuetify);
  app.mount('#app');
});