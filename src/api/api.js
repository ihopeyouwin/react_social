import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "e7e2f0ca-1756-49ac-a075-b19375687c40"}
});
export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
            return response.data
        });
    },
    startFollow(id){
        return instance.delete(`follow/${id}`)
    }

};


