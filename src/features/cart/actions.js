import  * as constant from './constants';

export function addItem(item){
    return {
        type: constant.ADD_ITEM,
        item: {
            ...item,
            product: item.product || item
        }
    }
}

export function removeItem(item){
    return {
        type: constant.REMOVE_ITEM,
        item }
}

export function clearItems(){
    return {
        type: constant.CLEAR_ITEMS,
    }
}

export function sumPrice(items) {
    return items.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
}

export function setItems(items){
    return {
        type: constant.SET_ITEMS,
        items
    }
}