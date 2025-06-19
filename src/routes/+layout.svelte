<script lang="ts">
	import '../app.css';
	import Navbar from '../components/navbar/Navbar.svelte';
	import Footer from '../components/footer/Footer.svelte';
	import config from '$lib/config.json';
	import { page } from '$app/state';
	let { children } = $props();
	
</script>

<style>
	:global(body) {
		background-color: #ecedee;
		color: #171717;
	}
</style>

<Navbar config = {config.navbar} notInTop= {page.status !== 200}/>

{@render children()}

<Footer config={config.footer} />
