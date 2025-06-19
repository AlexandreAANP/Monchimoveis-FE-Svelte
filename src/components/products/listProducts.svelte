<script>
    import { onMount } from "svelte";
    import FavProductIcon from "./icons/FavProductIcon.svelte";
    import UnFavProduct from "./icons/UnFavProductIcon.svelte";
    import { page } from '$app/stores';
    import { get } from 'svelte/store';
    import { replaceState } from "$app/navigation";
    import { FavHandler } from "../../utils/fav-handler.utils.svelte";
    import ShowMessage from "./ShowMessage.svelte";
     import config from '$lib/config.json';
    const images_domain = config.imagesUrl;
    const favHandler = new FavHandler();

    let {actualCategory} = $props()
    let search = $state($page.url.searchParams.get('search'));
    let offset = $state($page.url.searchParams.get('offset'));
    let order_by = $state($page.url.searchParams.get('order_by'));
    let shouldRendered =$state(true);
    let limit=12;
    let order = $state("0");
    let productsList = []
    let lastUpdate = $state(new Date());
    let hasMoreProducts = $state(true);
    let endpoint = `${config.apiUrl}products`;


    async function fetchProducts(searchParams) {
      searchParams.set("limit", limit);
      let apiEndpoint = new URL(`${endpoint}?${searchParams.toString()}`);
      
      const response = await fetch(apiEndpoint);
      hasMoreProducts = true;
      if (response.ok) {
        const code = await response.json();
        productsList = code.content.products;
        offset = productsList.length
        hasMoreProducts = code.content.products.length == limit;
        return code;
      } else {
        throw new Error(users);
      }
	}
  
  let getProducts = $state(fetchProducts());

  onMount(()=>{
      $effect(() => {
        let category = actualCategory;
        const search = new URLSearchParams(window.location.search);
        getProducts = fetchProducts(search);
    });
  })
  

  async function searchProdutcs(){
    const current = get(page);
    let searchParams = new URLSearchParams(window.location.search);

    searchParams.set("search", search)
    let callEndpoint = new URL(endpoint);
    if(search){
      callEndpoint.searchParams.set("search", search);
    }else{
      searchParams.delete("search")
    }
    if (actualCategory){
      callEndpoint.searchParams.set("category",actualCategory)
    }

    replaceState(`${window.location.origin}${window.location.pathname}?${searchParams.toString()}`);


    const response = await fetch(callEndpoint.toString());
    const code = await response.json();
    productsList = code.content.products
    offset = productsList.length;
    hasMoreProducts = true;
    if(code.content.products.length == 0){
      hasMoreProducts = false;
    }
    return code;
  }

  function getOrderProduct(){
    let orderValue= ""
    switch(order){
      case "0":
        orderValue="id";
        break;
      case "1":
        orderValue="price&order=asc";
        break;
      case "2":
        orderValue="price&order=desc";
        break;
      case "3":
        orderValue="title&order=asc";
        break;
      case "4":
        orderValue="title&order=desc";
        break;
    }
    return orderValue;
  }

  async function reorderProdutcs(){

    let searchParams = new URLSearchParams(window.location.search);
    if(search){
      searchParams.set("search",search)
    }
    searchParams.set("limit",limit)

    searchParams.delete("order_by")
    searchParams.delete("order")
    let orderedEndpoint = `${endpoint}?${searchParams.toString()}&order_by=${getOrderProduct()} `

    const response = await fetch(orderedEndpoint);
    const code = await response.json();
    if(code.content.products.length == 0){
      hasMoreProducts = false;
    }
    searchParams.delete("limit")
    replaceState(`${window.location.origin}${window.location.pathname}?${searchParams.toString()}&order_by=${getOrderProduct()}`);
    return code;
  }

  async function getMoreProducts(){
    let callEndpoint = new URL(endpoint);
    if(search){
      callEndpoint.searchParams.set("search", search);
    }
    if(order_by){
      callEndpoint.searchParams.set("order_by", order_by)
    }else{
      callEndpoint.searchParams.set("order_by", getOrderProduct())
    }
    callEndpoint.searchParams.set("offset", offset)

    const response = await fetch(callEndpoint.toString());
    const code = await response.json();
    
    if (code.content.products.length == 0){
      offset = 0;
      return false;
    }
    productsList.push(...code.content.products);
    getProducts = {content: {products: productsList}}
    offset = productsList.length;
    return true;
  }

</script>


<style>

  .title {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 400;
    color: #333;
  }
  .options {
    padding-bottom:  15px;
  }
  @media( max-width: 768px){
    .buttonText {
      font-size: 10pt;
  }
  }
  
</style>

      




<div class="font-sans p-4 mx-auto">
  <div class="flex flex-col">
    <h4 class="title text-center">PRODUTOS</h4>
    <div class="options flex flex-col sm:flex-row justify-between">
      <div class="my-2">
        <input id="search" class="lock w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6", placeholder="Procurar..." type="text" onkeydown={async (e) => {
          if (e.key === "Enter") {
            search = e.srcElement.value
            getProducts = searchProdutcs();
          }
        }}>
      </div>
        <div class="my-2 rounded-md bg-white">
          <select class="w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6" bind:value={order} onchange={(e)=>{getProducts=reorderProdutcs()}}>
            <option value="0" >Novidades</option>
            <option value="1">Preço Ascendente</option>
            <option value="2">Preço Descendente</option>
            <option value="3">Nome Ascendente</option>
            <option value="4">Nome Descendente</option>
        </select>
        </div>
    </div>
  </div>
    

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4">
      {#await getProducts}
      <div class="col-span-2 sm:col-span-3 lg:col-span-4 p-4">
        
          <div class="flex items-center justify-center w-full h-40">
            <div class="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
      </div>
      {:then data}
    
        {#if data.content.products.length == 0}
          <div class="col-span-2 sm:col-span-3 lg:col-span-4 p-4">
            
            <div class="flex flex-col items-center justify-center py-12 px-4 text-center text-gray-500">
              <p class="text-lg font-semibold">Não foi encontrado nenhum produto</p>
            </div>
        </div>
        {:else}
          {#each data.content.products as product}
          <div class="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all">
            <div class="w-full">
              <img src="{images_domain}{product.main_image.location}{product.main_image.name}" alt="{product.title}"
                class="w-full object-cover object-top aspect-[230/307]" />
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
                        <UnFavProduct width=9000 height=90000></UnFavProduct>
                    
                      {/if}
                    </button>
                    
                      
                    </div>
                  </div>
                </div>
              </div>
              <a class="cursor-pointer" href="{config.directory}/product?reference={product.title}-{product.id}" >
                <button class="buttonText cursor-pointer px-2 h-9 font-semibold w-full mt-4 bg-green-600 hover:bg-green-700 text-white tracking-wide ml-auto outline-none border-none rounded">Mais Informação</button>
              </a>
            </div>
          </div>
          {/each}
        {/if}
       
       
      
      {:catch error}

        {#if error.message == "NotFound"}
          <div class="col-span-2 sm:col-span-3 lg:col-span-4 p-4">
          
            <div class="flex flex-col items-center justify-center py-12 px-4 text-center text-gray-500">
              <p class="text-lg font-semibold">Não foi encontrado nenhum produto</p>
            </div>
        </div>
        {:else}
        <p style="color: red">Failed to load products. Please try again later.</p>
        {/if}
        
      {/await} 
      
       {#await hasMoreProducts }
       <div class="col-span-2 sm:col-span-3 lg:col-span-4 p-4">
        <div class="flex items-center justify-center w-full h-40">
          <div class="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
       </div> 
        
        {:then hasMoreProductsData } 
        {#if hasMoreProductsData}
        <div class="col-span-2 sm:col-span-3 lg:col-span-4 p-4 flex flex-col justify-center items-center">
          <button onclick={() => {              
              hasMoreProducts = getMoreProducts();
             }}
            class="cursor-pointer px-2 h-9 font-semibold  mt-4 bg-green-600 hover:bg-green-700 text-white tracking-wide outline-none border-none rounded">Ver mais Resultados</button>
        </div>
        {/if}
        {/await}
    </div>
  </div>
  <ShowMessage message = {favHandler.favMessage}/>