<script>
    import Item from './Item.svelte';
    let props = $props();
</script>


{#each props.items as item }
    <Item href={item.href} icon={item.icon} text={item.text} />

{/each}