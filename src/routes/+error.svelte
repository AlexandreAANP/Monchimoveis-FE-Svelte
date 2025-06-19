<script>
  import { page } from '$app/state';
  import config from '$lib/config.js';
</script>

<div class="min-h-screen flex flex-col justify-center items-center bg-gray-300 text-center px-4">
  <div class="max-w-xl">
    <h1 class="text-6xl font-bold text-red-600 mb-4">{page.status}</h1>
    <h2 class="text-2xl font-semibold text-gray-800 mb-2">
      {page.status === 404 ? "Page Not Found" : "Something Went Wrong"}
    </h2>
    <p class="text-gray-600 mb-6">
      {page.error?.message || "An unexpected error occurred. Please try again later."}
    </p>
    <a href="{config.directory}/" class="inline-block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
      Go to Homepage
    </a>
  </div>
</div>
