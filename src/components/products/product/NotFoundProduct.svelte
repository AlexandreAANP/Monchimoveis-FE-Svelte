<script>
  import config from "$lib/config.json"
    const {productReference} = $props()
</script>

<div class="bg-white/90 p-6 pt-10 mt-10 shadow-md rounded-lg max-w-6xl mx-auto w-full text-center">
    <div class="flex flex-col items-center space-y-4">
      <!-- Icon -->
      <svg width="120px" height="120px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 16.4995C15.0878 15.2854 13.6356 14.5 12 14.5C10.3642 14.5 8.91221 15.2857 8 16.5M15 9V10M9 9V10M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      <!-- Title -->
      <h2 class="text-2xl font-semibold text-gray-800">
        Produto não encontrado
      </h2>
  
      <!-- Message -->
      <p class="text-gray-600">
        Não encontramos nenhum produto com a referência <span class="font-medium text-black">{productReference}</span>.
      </p>
  
      <!-- Back Button (optional) -->
      <a href="{config.directory}/products" class="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
        Ver todos os produtos
      </a>
    </div>
  </div>
  