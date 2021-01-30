const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCTS_LOADED':{
            return { ...state, product: action.data }}
        default:
            return state;
    }
};
export default reducer;