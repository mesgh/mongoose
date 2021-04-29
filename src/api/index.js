import axios from 'axios';

const httpRequest = axios.create({
    baseURL: '/api',
    headers: {
        common: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    }
});
export const mongo = {
    create() {
        return httpRequest.delete(`/mongo/create`);
    },
    read() {
        return httpRequest.get(`/mongo/read`);
    },
    update() {
        return httpRequest.post(`/mongo/update/`);
    },
    del() {
        return httpRequest.post(`/mongo/del/`);
    },
};