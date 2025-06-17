<script>
    import { onMount } from "svelte";
    import CloseNavBarIcon from "../navbar/CloseNavBarIcon.svelte";
    import OpenNavBarIcon from "../navbar/OpenNavBarIcon.svelte";
    import OpenCategoriesIcon from "./icons/OpenCategoriesIcon.svelte";
    import CloseCategoriesIcon from "./icons/CloseCategoriesIcon.svelte";
    import { slide } from 'svelte/transition';
    const endpoint = `http://localhost:9898/api/v1/content/public/category`
  
  
  let isCategoriesOpen = $state(false);
  let categoriesData = $state(null);
  let isLoading = $state(false);
  let { changeCategory, actualCategory } = $props();

  async function fetchCategories() {
    isLoading = true;
    const response = await  fetch(endpoint);
    categoriesData = await response.json();
    isLoading = false;
  }

  function toggleCategories() {
    if (!isCategoriesOpen && !categoriesData) {
      fetchCategories();
    }
    isCategoriesOpen = !isCategoriesOpen;
  }

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
      max-width: 600px;
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
  
    #categoriesMobile {
      display: none;
    }
    
    .categoryActive{
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
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
  <div class="flex flex-col w-full">
    <div id="categoriesMobile" class="bg-white shadow-lg top-0 left-0 py-6 px-4 font-[sans-serif] ">
        <div class="flex flex-row items-baseline justify-between">
            <div class="basis-sm">
                <h4 class="title text-center pb-4">CATEGORIAS</h4>
            </div>
            <div class="col">
                <button class="cursor-pointer" onclick={() => toggleCategories()}>
                    {#if isCategoriesOpen}
                        <CloseNavBarIcon/>
                    {:else}
                        <OpenNavBarIcon/>
                    {/if}
                </button>
            </div>
           
        </div>
        
        {#if isCategoriesOpen && categoriesData}

            <div  transition:slide={{ delay: 100, duration: 400 }} class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                <div class="w-full">
                    <button  onclick={()=>changeCategory(null)}
                      class="{actualCategory ? "" : "categoryActive"} text-black  text-left w-full cursor-pointer hover:text-green-600 text-[15px] block hover:bg-gray-50 rounded px-4 py-2.5 transition-all">
                      Todas Categorias
                    </button>
                </div>
                {#each categoriesData.content.categories as category}
                <div class="w-full">
                    <button onclick={()=>changeCategory(`${category.name}-${category.id}`)}
                        class="{actualCategory == `${category.name}-${category.id}` ? 'categoryActive' : ''} text-black text-left w-full cursor-pointer hover:text-green-600 text-[15px] block hover:bg-gray-50 rounded px-4 py-2.5 transition-all">
                        {category.name}
                      </button>
                </div>
                {/each}
              </div>
          {/if}
        
          <div class="flex flex-col w-full items-center">
            <button onclick={()=> toggleCategories()}>
                {#if isCategoriesOpen}
                <CloseCategoriesIcon />
                {:else}
                <OpenCategoriesIcon />
                {/if}
            </button>
            </div>
      </div>
  </div>
  