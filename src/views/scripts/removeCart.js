function removeProductFromCart(id) {
    let currentUserCart = [];
    const localStorage = window.localStorage;

    currentUserCart = JSON.parse(localStorage.getItem('currentUserCart'));
    if (currentUserCart.length == 1)
        cleanProductsCart();
    else {
        const updatedUserCart = currentUserCart.splice(currentUserCart.findIndex(p => p.id == id), 1);

        currentUserCart = updatedUserCart;
        localStorage.setItem('currentUserCart', JSON.stringify(currentUserCart));
    }
}

function cleanProductsCart() {
    if (confirm("Está seguro de eliminar todos los productos del carrito?") == true) {
        window.localStorage.removeItem('currentUserCart');
    }

}