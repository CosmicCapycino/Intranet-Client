export default class {
    constructor(axios) {
        this.axiosInstance = axios
    }

    async login(form) {
        return await this.axiosInstance.post('/user/login', form).then((res) => {
            return res.data;
        })
    }
}