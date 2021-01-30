import createSagaMiddleware from 'redux-saga'
import {createStore,applyMiddleware} from 'redux'
import reducer from '../reducers/loadProducts';


const configureStore = ()=>{
    const sagaMiddleWare =  createSagaMiddleware();
    const store = createStore(reducer,applyMiddleware(sagaMiddleWare));
    return store;
}

export default configureStore;

