<script>
    import { base } from '$app/paths';
    import ListCategories from './listCategories.svelte';
    import ListProducts from './listProducts.svelte';
    const bgImageUrl = `${base}/images/background_main_images.jpg`;

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
        padding-top: 100px;
        height: 100%;   
        background-color: rgba(0,0,0,0.4);
    }

    #products .mainDiv2 {
        background-color: rgba(255, 255, 255, 0.75);
    }
</style>


<div id="products" class="flex justify-center items-center h-screen bg-background text-foreground mainDiv" style="background: {`url(${bgImageUrl})`} repeat center top;">
    <div class="mainDiv  flex flex-col items-center justify-center">
        <div class="mainDiv2 flex flex-col items-center justify-center">
            <div class="flex flex-row items-top justify-center gap-5">
                <ListCategories/>

                <ListProducts />
            </div>
            

        </div>

    </div>
</div>
