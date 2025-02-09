<script lang="ts">
	import '../app.css';
	import Navbar from '../components/navbar/Navbar.svelte';
	import Footer from '../components/footer/Footer.svelte';
	let { children } = $props();
</script>

<style>
	:global(body) {
		background-color: #f9f9f9;
	}
</style>

<Navbar />

{@render children()}

<Footer />
