function addProductToCart(product) {
    const cartProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        total: (product.price * product.quantity),
        imgsrc: product.imgsrc,
        quantity: product.quantity
    }

    this.saveLocalStorage(cartProduct);
}

function saveLocalStorage(product) {
    let currentUserCart = [];
    const localStorage = window.localStorage;

    if (localStorage.getItem('currentUserCart') !== null) {
        currentUserCart = JSON.parse(localStorage.getItem('currentUserCart'));
    }

    const checkProd = currentUserCart.find(p => p.id === product.name);
    if (!checkProd) {
        currentUserCart.push(product);
        localStorage.setItem('currentUserCart', JSON.stringify(currentUserCart));
    } else {
        increaseProductQuantity(product.id);
    }


}