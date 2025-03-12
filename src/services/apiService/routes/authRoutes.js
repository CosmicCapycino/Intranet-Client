export default class {
    constructor(axios) {
        this.axiosInstance = axios
    }

    async validate(form) {
        console.log("validating token");
    }
}