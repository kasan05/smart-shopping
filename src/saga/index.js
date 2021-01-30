import { put, takeLatest, all } from 'redux-saga/effects';

function* actionWatcher() {
    yield takeLatest('LOAD_PRODUCTS', loadProduct)
}

function* loadProduct() {

    const data = [
        {
            "id":1,
            "price":"$5.0",
            "name":"onion",
            "amount":"1kg",
            "img_url":"images/onion.jpg"
        },
        {
            "id":2,
            "price":"$2.0",
            "name":"carrot",
            "amount":"500g",
            "img_url":"images/carrot.jpg"
        },
        {
            "id":3,
            "price":"$.3.0",
            "name":"drumstick",
            "amount":"200g",
            "img_url":"images/drumstick.jpg"
        },
        {
            "id":3,
            "price":"$5.0",
            "name":"potato",
            "amount":"2kg",
            "img_url":"images/potato.jpg"
        },
        {
            "id":3,
            "price":"$5.0",
            "name":"beetroot",
            "amount":"0.5kg",
            "img_url":"images/beetroot.jpg"
        },

    ];

    const product ={
        "category":"Vegetables",
        "data":data
    }

    yield put({ type: "PRODUCTS_LOADED", data: product, });
}


export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}