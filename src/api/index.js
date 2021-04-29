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
    create(data) {
        return httpRequest.post(`/mongo/create`, data);
    },
    read() {
        return httpRequest.get(`/mongo/read`);
    },
    update(data) {
        return httpRequest.post(`/mongo/update/`, data);
    },
    del(data) {
        return httpRequest.post(`/mongo/del/`, data);
    },
};