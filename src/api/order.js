import axios from "axios";
import config from "../config";


export async function  getOrders(params) {
    let { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};
    let { limit, page } = params;
    let skip = (page * limit) - limit;

    return await axios
        .get(`${config.api_host}/api/orders`, {
            params: {
                skip,
                limit
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
}

// create order with axios
export async function createOrder(data) {
    let { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};

    return await axios.post(`${config.api_host}/api/orders`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}