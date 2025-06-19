<script>
    import FavProductIcon from "../icons/FavProductIcon.svelte";
    import UnFavProduct from "../icons/UnFavProductIcon.svelte";
    import FavMessage from "../ShowMessage.svelte"
    import { FavHandler } from "../../../utils/fav-handler.utils.svelte";
    import config from "$lib/config.json";
    const favHandler = new FavHandler();
    const {categoryReference} = $props();
    const images_domain = config.imagesUrl;
    const apiEndpoint = `${config.apiUrl}products?limit=4&category=`;
    
    let categoryName = categoryReference.split("-");
    categoryName = categoryName.slice(0,categoryName.length-1)
    categoryName = categoryName.join("-")
    async function getProducts(){
        const response = await fetch(`${apiEndpoint}${categoryReference}`)
        if (response.ok) return response.json()
        return null
    }

    const products = getProducts();

</script>

<style>
   @media( max-width: 768px){
    .buttonText {
      font-size: 10pt;
  }
  }
</style>
{#await products}
   <div></div> 
{:then data} 
{#if data}
<div class="bg-white/90 mt-5 pb-5 rounded w-full ">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <h3 class="text-gray-800 text-xl font-semibold">
            Produtos relacionados na categoria: <a href="{config.directory}/products?category={categoryReference}" class="text-[#a7c44c] text-lg hover:underline"><span class="font-bold">{categoryName}</span></a>
          </h3>
      </div>
  
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        <!-- Product Card -->
         {#each data.content.products as product }
            
         
        <div class="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all">
            <div class="w-full">
              <img src="{images_domain}{product.main_image.location}{product.main_image.name}" alt="{product.title}"
                class="w-md-full object-cover object-top aspect-[230/307]" />
            </div>
            

            <div class="p-4 flex-1 flex flex-col">
              <div class="flex-1">
                <h5 class="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">{product.title}</h5>
                <div class="mt-2 flex items-center flex-wrap gap-2">
                  {#if product.price != 0}
                    <h6 class="text-sm sm:text-base font-bold text-gray-800">{product.price} €</h6>
                  {/if}
                  <div class="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist" >
                    <div  class="bg-gray-100 rounded-full cursor-pointer">
                      <button class="cursor-pointer" style="height: 22px;" onclick={() => favHandler.favHandler(`${product.title}-${product.id}`)} aria-label={favHandler.isProductFav(`${product.title}-${product.id}`) ? "Adicionar aos favoritos": "Remover dos favoritos"}>
                        {#if favHandler.lastUpdate && favHandler.isProductFav(`${product.title}-${product.id}`)}
                        <FavProductIcon></FavProductIcon>
                      {:else}
                        <UnFavProduct></UnFavProduct>
                    
                      {/if}
                    </button>
                    </div>
                  </div>
                </div>
              </div>
              <a class="cursor-pointer" href="{config.directory}/product?reference={product.title}-{product.id}" target="_blank">
                <button class="buttonText cursor-pointer px-2 h-9 font-semibold w-full mt-4 bg-green-600 hover:bg-green-700 text-white tracking-wide ml-auto outline-none border-none rounded">Mais Informação</button>
              </a>
            </div>
          </div>
          {/each}

      </div>
      <div class="flex flex-col justify-center items-center">
      <a href="{config.directory}/products?category={categoryReference}"  class="mt-4 px-5 py-2 cursor-pointer bg-green-600 hover:bg-green-700 text-white font-medium rounded">
        Ver mais
      </a>
    </div>
    </div>
    
  </div>
{/if}
{/await}
<FavMessage message = {favHandler.favMessage}/>
