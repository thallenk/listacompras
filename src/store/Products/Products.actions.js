export function toggleProduct(id) {
    return{
        type: 'TOGGLE-PRODUCT',
        payload: id
    }
}