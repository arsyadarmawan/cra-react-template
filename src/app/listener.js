import store from './store';

let currentAuth;
function listen(){
    store.subscribe(()=>{
        console.log('State berubah:', store.getState());
    });
}

function listener() {
    let previousAuth = currentAuth;
    currentAuth = store.getState().auth;
    if(currentAuth !== previousAuth){
        localStorage.setItem('auth', JSON.stringify(currentAuth));
    }
}
export {
    listen
}