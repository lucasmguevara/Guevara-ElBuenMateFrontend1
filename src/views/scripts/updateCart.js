function increaseProductQuantity(id) {
    let currentUserCart = [];
    const localStorage = window.localStorage;

    currentUserCart = JSON.parse(localStorage.getItem('currentUserCart'));

    const updatedUserCart = currentUserCart.map(p => {
        if (p.id == id) {
            return {...p, total: (+p.price * (p.quantity + 1)), quantity: (+p.quantity + 1) }
        }
        alert(p.id)
        return p;
    })

    currentUserCart = updatedUserCart;
    localStorage.setItem('currentUserCart', JSON.stringify(currentUserCart));
}

function decreaseProductQuantity(id) {
    let currentUserCart = [];
    const localStorage = window.localStorage;

    currentUserCart = JSON.parse(localStorage.getItem('currentUserCart'));
    const prod = currentUserCart.find(p => p.id == id);

    var updatedUserCart;
    if (prod.quantity > 1) {
        updatedUserCart = currentUserCart.map(p => {
            return {...p, total: (+p.price * (+p.quantity - 1)), quantity: (+p.quantity - 1) }
        });

        currentUserCart = updatedUserCart;
        localStorage.setItem('currentUserCart', JSON.stringify(currentUserCart));
    } else {
        updatedUserCart = currentUserCart.splice(currentUserCart.findIndex(p => p.id == id), 1);
    }

    currentUserCart = updatedUserCart;
    localStorage.setItem('currentUserCart', JSON.stringify(currentUserCart));
}