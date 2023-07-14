import request from '@/config/request'

export function login(data) {
    return request({
        url: "/login",
        method: "post",
        data,
    });
}