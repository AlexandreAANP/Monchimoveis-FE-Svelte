<script>
  import { onMount } from "svelte";
  import { replaceState } from '$app/navigation';
  import { page } from '$app/stores';
  import { get } from 'svelte/store';
  
  const endpoint = `http://localhost:9898/api/v1/content/public/category`

  async function fetchCategories() {
    const response = await fetch(endpoint);
    return response.json();
  }

  let getCategories = fetchCategories();
  let { changeCategory, actualCategory } = $props();


</script>

<style>
  hr{
    border: none;
    height: 4px;
    background: linear-gradient(to right, #2e7d32, #81c784, #2e7d32);
    border-radius: 2px;
    margin: 30px auto;
    width: 60%;
    box-shadow: 0 2px 4px rgba(46, 125, 50, 0.3);
  }
  .suggestion {
    background-color: #e6f4ea;
    color: #2e7d32;
    border: 2px solid #81c784;
    padding: 20px;
    border-radius: 12px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.2rem;
    box-shadow: 0 4px 8px rgba(46, 125, 50, 0.2);
    max-width: 300px;
    margin: 20px auto;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .title {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 400;
    color: #333;
  }
  #categories {
    display: block;
  }
  .categoryActive{
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
  }

  #categoriesMobile {
    display: none;
  }

  @media (max-width: 768px) {

  }

  @media (max-width: 1023px) {
    #categories {
      display: none;
    }
    #categoriesMobile {
    display: block;
  }
}
</style>

<div id="categories" class="bg-white shadow-lg top-0 left-0 min-w-[240px] py-6 px-4 font-[sans-serif] overflow-auto">
    <h4 class="title text-center pb-4">CATEGORIAS</h4>  
    <ul class="pl-3">
      {#await getCategories }
      <div class="flex items-center justify-center w-full h-40">
        <div class="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      {:then data } 
        <li>
          <button  onclick={()=>changeCategory(null)}
            class="{actualCategory ? "" : "categoryActive"} text-black  text-left w-full cursor-pointer hover:text-green-600 text-[15px] block hover:bg-gray-50 rounded px-4 py-2.5 transition-all">
            Todas Categorias
          </button>
        </li>
        {#each data.content.categories as category}
        <li>
          <button onclick={()=>changeCategory(`${category.name}-${category.id}`)}
            class="{actualCategory == `${category.name}-${category.id}` ? 'categoryActive' : ''} text-black text-left w-full cursor-pointer hover:text-green-600 text-[15px] block hover:bg-gray-50 rounded px-4 py-2.5 transition-all">
            {category.name}
          </button>
        </li>
        {/each}
      {/await}
    </ul>
    <hr>
    <div >
      <a href="/#contact"><p class=suggestion>Procura algo único? Contacte-nos e personalizamos o móvel perfeito para si!</p></a>
    </div>

  </div>