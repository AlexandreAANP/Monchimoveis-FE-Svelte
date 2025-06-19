<script>
    import { base } from '$app/paths';
    import Favs from '../../components/favs/favs.svelte';
    import { getFavProducts, removeFavProductReference } from '../../utils/favs-products.utils.svelte';
    const bgImageUrl = `${base}/images/background_main_images.jpg`;
    const apiEndpointGetProduct = "http://localhost:9898/api/v1/content/public/product"

    async function fetchFavProducts (){
        return Promise.all( getFavProducts().map(async (productReference)=>{
            if(!productReference.includes("-")){
                removeFavProductReference(productReference);
                return null;
            }
            let referenceSplited = productReference.split("-");
            let id = referenceSplited[referenceSplited.length-1];
            if(isNaN(id)){
                removeFavProductReference(productReference);
                return null;
            }
            const response = await fetch(`${apiEndpointGetProduct}/${id}?reference=${productReference}`)
            if (response.status == 401){
                removeFavProductReference(productReference);
                return null;
            }
            else if(response.status == 200){
                return (await response.json()).content;
            }
        }))
    }

    let favs = fetchFavProducts();
</script>

<style>
    #favs {
        display : table;
        width: 100%;
        padding: 0;
        background-position-x: center;
        background-position-y: bottom;
        background-repeat: no-repeat;
        background-color: #e5e5e5;
        background-size: cover;
    }

    #favs .mainDiv {
        padding-top: 50px;
        height: 100%;   
        background-color: rgba(0,0,0,0.4);
    }

</style>

<div id="favs" class="flex justify-center items-center h-screen bg-background text-foreground mainDiv" style="background: {`url(${bgImageUrl})`} repeat center top; background-size: contain;">
    <div class="mainDiv  flex flex-col items-center justify-center">
        <div class="flex flex-col h-screen">
            <div class="w-full pt-24 px-0 sm:px-6 lg:px-8 h-full">
              <div class="bg-white/90 rounded-lg shadow-md p-1 sm:p-6 h-[80vh] overflow-hidden">
                <!-- Título -->
                <div class="w-full text-center mb-4">
                  <h3 class="text-2xl font-semibold">Favoritos</h3>
                </div>
        {#await favs}
        <div class="flex items-center justify-center w-full h-40">
            <div class="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        {:then data}
        
           <Favs products= {data}/>
        {/await}    
        
        {#if !favs}
        Sem produtos em favoritos
        {/if}
            </div>
                </div>
        </div>
    </div>
</div>