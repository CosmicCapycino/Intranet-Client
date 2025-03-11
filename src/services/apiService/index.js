import axios from "axios";
import userRoutes from "./routes/userRoutes";
import { reactive } from "vue";

const axiosInstance = axios.create();
const user = new userRoutes(axiosInstance);
const auth = reactive();

function configureService(apiConfig) {
    axiosInstance.defaults.baseURL = (apiConfig.ssl ? 'https' : 'http') + "://" + apiConfig.host + (apiConfig.port !== null ? `:${apiConfig.port}` : null);
}

function install(app, useAuth = false, config) {
    app.config.globalProperties.$apiService = this;
    if(app.config.globalProperties.$apiService === this) {
        console.log("API service installed!")
    }
    if(useAuth) {
        console.log("Enabling auth...");
        this.auth = app.config.globalProperties.$auth;
        console.log(this.auth.cookies.get("token"));
    }

    configureService(config)
}

const apiService = {
    install,
    user
}

export default apiService;