import config from "../config";
import axios from "axios";

export async function getAddress(params){
    let { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) :{};

    return await axios
        .get(`${config.api_host}/api/delivery-addresses`, {
            params: {
                limit: params.limit,
                skip: params.page * params.limit - params.limit
            },
            headers: {
                Authorization: `Bearer ${token}`
            }

        });
}

export async function createAddress(payload){

    let { token } = localStorage.getItem('auth')
        ? JSON.parse(localStorage.getItem('auth')) : {};


    return await axios.post(config.api_host + '/api/delivery-addresses', payload, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
}