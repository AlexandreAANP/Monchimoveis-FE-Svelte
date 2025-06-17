<script>
    import UnFavProduct from "../products/icons/UnFavProductIcon.svelte"
    import FavProductIcon from "../products/icons/FavProductIcon.svelte";
    import ContactIcon from "../products/icons/ContactIcon.svelte";
    import { FavHandler } from "../../utils/fav-handler.utils.svelte";
    import InterestedProduct from "../products/product/interestedProduct.svelte";
    const favHandler = new FavHandler()
    const imagePath = "https://api.monchimoveis.pt/static/images/"
    const {product} = $props();
    let hideInterestedProductComponent = $state(true);
    let hideProductRemoved = $state(false);
</script>

<style>

    

    .interested_button {
        cursor: pointer;
        color: #fff;
        background-color: #5cb85c;
        border: #4cae4c solid 1px;
        border-color: #4cae4c;
    }
    .interested_button:hover {
        color: #fff;
        background-color: #449d44;
        border-color: #398439;
    }
    .fav_button{
        cursor: pointer;
        color: #364153;
        background-color: transparent;
        border: #4cae4c solid 1px;
        border-color: #4cae4c;
    }

    @media( max-width: 768px){
        .interested_button{
            width: 90px;
        }
        .mobileText {
            font-size: 9pt;
        }
        
    }

</style>
{#if !hideProductRemoved}
<tr class="bg-white hover:bg-gray-50 cursor-pointer">
    <td  class="px-1 md:px-4 py-2 font-semibold">
        <a class="mobileText hover:underline" href={`/product?reference=${product.title}-${product.id}`}> {product.title}</a>
    </td>
    <td class="px-1 md:px-4 py-2 max-w-[200px] overflow-hidden text-ellipsis hidden lg:block" 
        >
    {product.description.slice(0, 75)} {#if product.description.length > 75}...{/if}
    </td>
    <td class="px-1 md:px-4 py-2 hidden lg:block">{#if product.price != 0} {product.price} €{/if}</td>
    <td class="px-1 md:px-4 py-2 text-center align-middle">
      <img src={`${imagePath}${product.main_image.location}${product.main_image.name}` } alt="{product.title}" class="mx-auto h-[150px] object-contain" />
    </td>
    
    <td class="align-middle px-1 md:px-4 py-2">
        <div class="flex flex-col md:flex-row gap-4 items-center justify-center">
            <button 
                onclick={()=> hideInterestedProductComponent = false}
                class="mobileText interested_button bg-gray-800 text-white px-2 md:px-6 py-2 rounded hover:bg-gray-900 transition flex items-center justify-center gap-2">
                <ContactIcon classStyle="hidden sm:block"/> Tenho interesse
            </button>
            <button 
                onclick={() =>{ favHandler.favHandler(`${product.title}-${product.id}`); hideProductRemoved = true;}}
                class="mobileText fav_button text-gray-700 px-2 sm:px-6 py-2 rounded border border-green-600 transition flex items-center justify-center gap-2" 
                >
                {#if favHandler.lastUpdate && favHandler.isProductFav(`${product.title}-${product.id}`)}
                <FavProductIcon classStyle="hidden sm:block"/> Remover dos favoritos
              {:else}
                <UnFavProduct classStyle="hidden sm:block" />  Guardar nos favoritos
              {/if} 
            </button>
        </div>
    </td>
  </tr>


    {#if !hideInterestedProductComponent}
    <InterestedProduct 
    productTitle = {product.title}
    productReference ={`${product.title}-${product.id}`}
    hide= {hideInterestedProductComponent}
    hideFunction = {()=> hideInterestedProductComponent = true}/>
    {/if}
{/if}

