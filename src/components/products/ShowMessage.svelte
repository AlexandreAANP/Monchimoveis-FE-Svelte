<script>
    import { fly } from 'svelte/transition';
    const { message} = $props();
</script>

{#if message}
    <div
    transition:fly="{{ x: 50, duration: 700 }}"
    class="fixed top-6 right-6 bg-green-800 text-white px-4 py-2 rounded-lg shadow-lg text-sm sm:text-base z-50"
  >
  {@html message}
  </div>
    {/if}