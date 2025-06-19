export function getFavProducts(){
    return getFavProductsKeys().map((key) => key.slice(5, key.length));
}
export function removeFavProductReference(productReference){
    window.localStorage.removeItem(`favs.${productReference}`);
}
function getFavProductsKeys(){
    let res = []
    for(let i =0; i < window.localStorage.length ; i++){
        if(window.localStorage.key(i).includes("favs.")){
            res.push(window.localStorage.key(i));
        }
    }
    return res
}