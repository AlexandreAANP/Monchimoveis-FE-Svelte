<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import ListCategories from './listCategories.svelte';

    import ListCategoriesMobile from './listCategoriesMobile.svelte';
    import ListProducts from './listProducts.svelte';
    import { replaceState } from '$app/navigation';
    import { page } from '$app/stores';
    import { get } from 'svelte/store';

    const bgImageUrl = `${base}/images/background_main_images.jpg`;
    let width = 0;
    let actualCategory = new URLSearchParams(get(page).url.search).get("category");

    function changeCategory(category){
        actualCategory = category
        const search = new URLSearchParams(window.location.search);
        if (category) {
        search.set('category', category);
        } else {
        search.delete('category');
        }

        const query = search.toString();
        const newUrl = `${window.location.origin}${window.location.pathname}${query ? `?${query}` : ''}`;
        replaceState(newUrl);
    }

    const updateWidth = () => {
        width = window.innerWidth;
    };
    

    // Listen for resize events
    onMount(() => {
        
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    });
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


<div id="products" class="flex justify-center items-center h-screen bg-background text-foreground mainDiv" style="background: {`url(${bgImageUrl})`} repeat center top; background-size: contain;">
    <div class="mainDiv  flex flex-col items-center justify-center">
        <div class="mainDiv2 flex flex-col items-center justify-center">
            {#if width < 1023}
            <ListCategoriesMobile changeCategory ={changeCategory} actualCategory={actualCategory}/>
            {/if}
            <div class="flex flex-row items-top justify-center gap-5">
                {#if width > 1023 }
                <ListCategories changeCategory ={changeCategory} actualCategory={actualCategory}/>
                {/if}

                <ListProducts actualCategory={actualCategory} />

            </div>
            

        </div>

    </div>
</div>
