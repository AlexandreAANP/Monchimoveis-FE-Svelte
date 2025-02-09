<script context="module" lang="ts">
    export interface ItemProps {
        href: string;
        text: string;
        icon?: string;
    }
</script>

<script lang="ts">
    import ProductIcon from './ProductsIcon.svelte';
    import FavIcon from './FavIcon.svelte';
    let props = $props();
</script>
<style>
.navitem {
    color: #a7c44c;
    font-weight: 400;
    font-size: 15px;
    padding: 5px;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
}
</style>

<li
    class="flex items-center gap-x-2 p-1 font-medium cursor-pointer"
    >
    <a
     class='cursor-pointer'
     target="_self"
     href={props.href}
     >
        <span class="flex items-center gap-x-2 text-white navitem">
            {#if props.icon == "star"}
            <ProductIcon/> 
            {:else if props.icon == "bag"}
            <FavIcon/>
            {/if}
            {props.text}
        </span>
    </a>
</li>
