import * as constant from "./constants";

const initialState = localStorage.getItem('cart') ?
    JSON.parse(localStorage.getItem('cart')) : [];

export default function reducer(state = initialState, action){
    switch(action.type){
        case constant.ADD_ITEM:
            if (state.find(i => i.id === action.item.id)){
                return state.map(i => {
                    if (i.id === action.item.id){
                        return {...i, qty: i.qty + 1};
                    }
                    return i;
                });
            } else {
                return [...state, {...action.item, qty: 1}];
            }
        case constant.REMOVE_ITEM:
            return state
                .map(item => ({...item, qty: item._id === action.item._id ?
                        item.qty - 1 : item.qty}))
                .filter(item => item.qty > 0);
        case constant.CLEAR_ITEMS:
            return [];

        case constant.SET_ITEMS:
            return action.items
        default:
            return state;
    } }