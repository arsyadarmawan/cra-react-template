import store from './store';

// let currentAuth;
function listen(){
    store.subscribe(()=>{
        console.log('State berubah:', store.getState());
    });
}

export {
    listen
}