import store from './store';

// let currentAuth;
function listen(){
    store.subscribe(()=>{
        console.log('change state:', store.getState());
    });
}

export {
    listen
}