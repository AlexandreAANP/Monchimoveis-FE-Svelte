<script>
  import config  from "$lib/config";
</script>
<div class="flex flex-col justify-center items-center h-full text-center rounded-lg p-6">
    <!-- Ícone de estrela -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.995a1 1 0 00.95.69h5.262c.969 0 1.371 1.24.588 1.81l-4.26 3.094a1 1 0 00-.364 1.118l1.618 4.995c.3.921-.755 1.688-1.538 1.118l-4.26-3.094a1 1 0 00-1.176 0l-4.26 3.094c-.783.57-1.838-.197-1.538-1.118l1.618-4.995a1 1 0 00-.364-1.118L2.633 10.42c-.783-.57-.38-1.81.588-1.81h5.262a1 1 0 00.95-.69l1.618-4.995z" />
    </svg>
  
    <!-- Título -->
    <h2 class="text-xl font-semibold text-gray-700 mb-2">Sem favoritos ainda</h2>
  
    <!-- Mensagem -->
    <p class="text-gray-500">
      Ainda não tens nenhum produto adicionado aos favoritos.<br>
      Explora os nossos produtos e adiciona os teus preferidos!
    </p>
  
    <!-- Botão opcional -->
    <a href="{config.directory}/produtos" class="mt-6 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
      Ver produtos
    </a>
  </div>
  