<script>
    import FavProduct from "./favProduct.svelte";
    import NotFoundFavProducts from "./NotFoundFavProducts.svelte";

    const {products} = $props()

</script>

  
{#if !products}
<!-- Nenhum favorito -->
<NotFoundFavProducts/>
  {:else}
<!-- Lista de favoritos -->
<div id="favs_div" class="overflow-auto max-h-[90%]">
    <table class="min-w-full table-auto border-separate border-spacing-y-2">
    <thead >
        <tr class="bg-gray-100 text-left w-full">
        <th class="px-4 py-2">Nome</th>
        <th class="px-4 py-2 hidden lg:block">Descrição</th>
        <th class="px-4 py-2 text-center hidden lg:block">Preço</th>
        <th class="px-4 py-2 text-center">Imagem</th>
        <th class="px-4 py-2"></th>
        </tr>
    </thead>
    <tbody>
        {#each products as product}
            <FavProduct product= {product} />
        {/each}
        
    </tbody>
    </table>
</div>
{/if}

  