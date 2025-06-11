<script>
    import FavMessage from "../ShowMessage.svelte";
    import FavProductIcon from "../FavProductIcon.svelte";
    import UnFavProduct from "../UnFavProduct.svelte";
    import { fly } from 'svelte/transition';
    import { FavHandler } from '../../../utils/fav-handler.utils.svelte.js';
    import ContactIcon from "../ContactIcon.svelte";
    import InterestedProduct from "./interestedProduct.svelte";
    const { imagesPath, product } = $props();
    const favHandler = new FavHandler();
    let hideInterestedProductComponent = $state(true);
    
    let images = $state([]);
    product.images_associate.forEach(img => {
        if(`${imagesPath}${product.main_image.location}${product.main_image.name}` === `${imagesPath}${img.location}${img.name}`){
            let imageMain = {
                isMain: true,
                imagePath: `${imagesPath}${img.location}${img.name}`
            }
            images = [imageMain, ...images]
        }else{
            images.push({
                isMain: false,
                imagePath: `${imagesPath}${img.location}${img.name}`
            })
        }
        
    });

    let mainImage = $state(images.find((img) => img.isMain));

    async function switchImage(imageToSwitch){
        let imgToSwitch = images.find((img) => img.imagePath == imageToSwitch.imagePath);
        if(!imgToSwitch){
            console.log("Not found any image")
            return;
        }

        images.forEach((img)=> {
            if(imgToSwitch.imagePath == img.imagePath ){
                img.isMain = true;
            }else{
                img.isMain = false;
            }
        })
        
        mainImage = imgToSwitch;
    }
    
</script>

<style>
    .main_image {
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #eee;
        height: 400px;
        width: 100%;
        overflow: hidden;
    }

    .images_associate {
        margin: 5px;
        padding: 10px;
        border: 2px solid #eee;
        cursor: pointer;
        transition: all 0.5s;
    }
    .images_associate_active {
        border: 2px solid #a7c44c;
    }

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
    .fav_button:hover {
        box-shadow: 0 3px 6px #398439;
    }


    .hide-mobile {
        display: block;
    }
    .show-mobile{
        display: none;
    }

    
    @media( max-width: 768px){
        .left-side{
            border: none;
            padding-right: 0px;
        }

        .hide-mobile{
            display: none;
        }
        .show-mobile{
            display: block;
        }
  }
</style>
<div class="bg-white/90 p-5 pt-10 mt-24 shadow-md rounded-lg max-w-6xl mx-auto w-full">
    <div class="flex flex-col md:flex-row gap-6">
      
        <h2 class="show-mobile text-center text-2xl font-semibold text-gray-800">{product.title}</h2>
      <!-- Left side: Images -->
      <div class="left-side md:w-1/2 border-r border-gray-300 pr-6">
        <div class="flex flex-col items-center">
            <div class="mb-4">
                <img 
                    alt ={product.title}
                    src={mainImage.imagePath}     
                    id="main_product_image" width="350"
                    class="main_image rounded shadow" />
            </div>

            <div class="flex space-x-4">
            {#each images as image}
            
            <button onclick={(e)=> switchImage(image)}><img 
                alt={product.title}
                src={image.imagePath}     
                 width="70"
                 class={`images_associate cursor-pointer ${image.isMain ? "images_associate_active":""} rounded`} /></button>
            {/each}

          </div>
        </div>
      </div>
  
      <!-- Right side: Product Details -->
      <div class="md:w-1/2 pl-0 md:pl-6 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start">
            <h2 class="hide-mobile text-2xl font-semibold text-gray-800">{product.title}</h2>
          </div>
      
          <div class="mt-4 text-gray-700 text-base leading-relaxed">
            <p class="whitespace-pre-line">
              {product.description}
            </p>
          </div>
      
          <div class="mt-10 text-xl font-semibold text-gray-800">
            {#if product.price != 0}
              <h3>{product.price} €</h3>
            {/if}
          </div>

          <div class="mt-10 flex flex-col sm:flex-row gap-4">
            <button 
                onclick={()=> hideInterestedProductComponent = false}
                class=" interested_button bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition flex items-center justify-center gap-2">
                <ContactIcon/> Tenho interesse
            </button>
            <button 
                onclick={() => favHandler.favHandler(`${product.title}-${product.id}`)}
                class="fav_button text-gray-700 px-6 py-2 rounded transition flex items-center justify-center gap-2" 
                >
                {#if favHandler.lastUpdate && favHandler.isProductFav(`${product.title}-${product.id}`)}
                <FavProductIcon /> Remover dos favoritos
              {:else}
                <UnFavProduct width={24} height={24} />  Guardar nos favoritos
              {/if} 
            </button>
          </div>
        </div>
      
        <!-- This will now stick to the bottom -->
        <div class="mt-6 text-right pr-5 pt-5">
          <a href="/products?category={product.category.name}-{product.category.id}" class="text-[#a7c44c] text-lg hover:underline">
            {product.category.name}
          </a>
        </div>
      </div>
    </div>
    <FavMessage message = {favHandler.favMessage}></FavMessage>
  </div>
  {#if !hideInterestedProductComponent}
  <InterestedProduct 
        productTitle = {product.title}
        productReference ={`${product.title}-${product.id}`}
        hide= {hideInterestedProductComponent}
        hideFunction = {()=> hideInterestedProductComponent = true}/>
    {/if}
  
  