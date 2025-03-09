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

export function setItems(items){
    return {
        type: constant.SET_ITEMS,
        items
    }
}