import axios from 'axios';
import config from '../config';
import store from "../app/store";
import {setItems} from "../features/cart/actions";
// import setItems from "react-hook-form/dist/utils/set";

export async function saveCart(token, cart){
    return await axios.put(`${config.api_host}/cart`, cart, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
}

export async function getCart(){
    let { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};
    if(!token) return;

    try {
        let { data } = await axios.get(`${config.api_host}/cart`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        if (!data.error) {
            store.dispatch(setItems(data));
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            store.dispatch(setItems([]));
        } else {
            console.error("An error occurred while fetching the cart:", error);
        }
    }
}