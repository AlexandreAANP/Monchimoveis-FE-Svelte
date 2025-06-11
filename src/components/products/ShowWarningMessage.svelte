<script>
    import { fly } from 'svelte/transition';
    const { message} = $props();
</script>

{#if message}
    <div
    transition:fly="{{ x: 50, duration: 1000 }}"
    class="fixed top-6 right-6 text-yellow-800 bg-yellow-100 border border-yellow-300 px-4 py-2 mb-2 rounded-lg shadow-lg text-sm sm:text-base z-50"
  >
  {@html message}
  </div>
    {/if}