<script>
    import ViewProduct from "../../components/products/product/viewProduct.svelte";
    import { page } from '$app/stores';
    import { get } from 'svelte/store';
    import { base } from '$app/paths';
    import RecommendProducts from "../../components/products/product/recommendProducts.svelte";
    import NotFoundProduct from "../../components/products/product/NotFoundProduct.svelte";
    const product_reference =  new URLSearchParams(get(page).url.search).get("reference");
    const apiEndpoint = "http://localhost:9898/api/v1/content/public/product"
    const imagesPath = "https://api.monchimoveis.pt/static/images/"
    const bgImageUrl = `${base}/images/background_main_images.jpg`;

    async function fetchProduct(){
        if(!product_reference.includes("-")){
            throw new Error("NotFound")
        }
        let referenceSplited = product_reference.split("-");
        let id = referenceSplited[referenceSplited.length-1];
        if(isNaN(id)){
            throw new Error("NotFound")
        }
        const response = await fetch(`${apiEndpoint}/${id}?reference=${product_reference}`)
        if (response.status == 401){
            throw new Error("NotFound");
        }
        else if(response.status == 200){
            return response.json();
        }
    }

    let product = fetchProduct();
    
</script>
<style>
    #products {
        display : table;
        width: 100%;
        padding: 0;
        background-position-x: center;
        background-position-y: bottom;
        background-repeat: no-repeat;
        background-color: #e5e5e5;
        background-size: cover;
    }

    #products .mainDiv {
        padding-top: 50px;
        height: 100%;   
        background-color: rgba(0,0,0,0.4);
    }

</style>

<div id="products" class="flex justify-center items-center h-screen bg-background text-foreground mainDiv" style="background: {`url(${bgImageUrl})`} repeat center top; background-size: contain;">
    <div class="mainDiv  flex flex-col items-center justify-center">
        {#await product}
        <div class="flex items-center justify-center w-full h-40">
            <div class="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        {:then data}
            <ViewProduct product={data.content} imagesPath={imagesPath}></ViewProduct>
            <RecommendProducts categoryReference={`${data.content.category.name}-${data.content.category.id}`}></RecommendProducts>
        {:catch error}
        <NotFoundProduct productReference= {product_reference}/>
        {/await}    
        
    </div>
</div>