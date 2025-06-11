const localStorageKey = "interested"
export function loadProductMessage(productReference){
    let productMessage = window.localStorage.getItem(`${localStorageKey}.${productReference}`);
    if(!productMessage) return;

    productMessage = JSON.parse(productMessage)

    if(new Date(productMessage.date_exp) < new Date()){
        window.localStorage.removeItem(`${localStorageKey}.${productReference}`)
        return null
    }
    return productMessage;
}

export function blockProduct(productReference, bodyMessage){
    window.localStorage.setItem(`${localStorageKey}.${productReference}`, JSON.stringify({
        date_exp: new Date(Date.now() + 24*60*60 * 1000), // 24 hours after
        name: bodyMessage.name,
        email: bodyMessage.email,
        phone: bodyMessage.phone,
        message: bodyMessage.message
    }))
}