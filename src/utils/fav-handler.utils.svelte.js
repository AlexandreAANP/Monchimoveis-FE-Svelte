import config from "$lib/config"
export class FavHandler{
    constructor() {
        this.lastUpdate = $state(new Date());
        this.favMessage =  $state("");
    }

    showFavMessage(message) {
        this.favMessage = message;
        setTimeout(() => this.favMessage = "", 3000);
    }

    isProductFav(productReference){
        return window.localStorage.getItem(`favs.${productReference}`) != null;
    }

    async favHandler(productReference){
        if (this.isProductFav(productReference)) {
            this.unfavProduct(productReference);
            this.showFavMessage(`Produto removido dos <a href='${config.directory}/favs'><b>Favoritos</b></a>`);
        } else {
            this.favProduct(productReference);
            this.showFavMessage(`Produto adicionado aos <a href='${config.directory}/favs'><b>Favoritos</b></a>`);
        }
        this.lastUpdate = new Date();
    }

    async favProduct(productReference){
        window.localStorage.setItem(`favs.${productReference}`, true)
    }

    async unfavProduct(productReference){
        window.localStorage.removeItem(`favs.${productReference}`);
    }

}
