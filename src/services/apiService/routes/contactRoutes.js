export default class {
    constructor(axios) {
        this.axiosInstance = axios
    }

    async fetchAll() {
        return await this.axiosInstance.get('/contacts/fetch/all').then((res) => {
            return res.data;
        })
    }
}