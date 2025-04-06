
<script lang="ts">
    import type { ItemProps } from './Item.svelte';
    import { cubicOut } from 'svelte/easing';
    import { slide } from 'svelte/transition';
    import Items from './Items.svelte';
    import { onMount } from "svelte";

    let isOnTop = true;
    let openNav = false;
    let items :ItemProps[] = [
        {href: "#about", text: "Nós"},
        {href: "#", text: "Serviços"},
        {href: "#", text: "Projetos"},
        {href: "#", text: "Contacto"},
        {href: "/products", text: "Produtos", icon: "bag"},
        {href: "#", text: "Favoritos", icon: "star"},
    ];

    let title = "Monchimóveis";

    


    onMount(() => {
        document.addEventListener('scroll', function() {
            if (window.innerWidth <= 768) {
                return;
            }
            if (window.scrollY > 0) {
                isOnTop = false;
            } else {
                isOnTop = true;
            }
        });
    });

    function setOpenNav(value: boolean) {
        openNav = value;
    }	
   

</script>


<style>

#navbar hr {
    margin-top: 10px;
    height: 2px;
    text-align: center;
    position: relative;
    background-color: #a7c44c;
    /* margin: 0 auto 20px; */
    border: 0;
}

.navtitle {
    font-size: 22px;
    color: #eee;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
}
#navbar {
    background-color: transparent;
}

@media (max-width: 768px) {
    #navbar {
        background-color: #363636 !important;
    }
}
</style>

<nav 
    id="navbar" 
    class="fixed top-0 left-0 right-0 z-50 py-4 px-4 transition-colors duration-300 ease-in-out"
    style="background-color: {isOnTop ? 'transparent' : '#363636'}"
>
    <div class="container mx-auto flex items-center justify-between text-blue-gray-900">
    
        <a href="./" class="mr-4 cursor-pointer navtitle" >{title}</a>
    

    <div class="hidden lg:block xl:block">
        <ul class="mt-2 mb-4 flex gap-2 flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-right" >
            <Items items={items}/>
        </ul>
        <!-- <Items items={items}/> -->
    </div>
    
    <button
        class="ml-auto h-6 w-6 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-white cursor-pointer"
        onclick={() => setOpenNav(!openNav)}
        placeholder="" 
    >
    {#if openNav}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width={2}
        >
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    {:else}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width={2}
        >
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    {/if}
    
    </button>
    </div>
    {#if openNav}
    <div 
        class="container mx-auto"
        transition:slide={{ duration: 400, easing: cubicOut }} >
        
            <hr>
            <ul class="mt-2 mb-4 flex gap-2 flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-right" >
                <Items items={items}/>
            </ul>
    </div>
    {/if}
</nav>