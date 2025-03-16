import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import authReducer from '../features/auth/reducer';
import productReducer from '../features/products/reducer';
import cartReducer from '../features/cart/reducer';
import thunk from 'redux-thunk';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    products: productReducer
});

const store = createStore(rootReducers, composerEnhancer(applyMiddleware(thunk)));
export default store;