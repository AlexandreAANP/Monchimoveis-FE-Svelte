<script lang="ts">
    import About from '../components/about/About.svelte';
    import Intro from '../components/intro/Intro.svelte';
    import Services from '../components/services/Services.svelte';
    import Project from '../components/projects/Project.svelte';
    import Contact from '../components/contact/Contact.svelte';

    import config from '$lib/config.json';

</script>
<Intro config={config.main_page.home} />
<About config={config.main_page.about}/>
<Services config={config.main_page.services}/>
<Project config={config.main_page.projects}/>
<Contact config={config.main_page.contact}/>
