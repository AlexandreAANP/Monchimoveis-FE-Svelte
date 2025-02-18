<script lang="ts">

    import { base } from '$app/paths'; 
    import PortofolioItem from './PortofolioItem.svelte';
    function setActiveButton(index:string){
        active = index;
    }
    import Button from './Button.svelte';
    let active = "all";
    const buttons = [
        {name: "Todos", id: "all"},
        {name: "Mobiliário de quarto", id: "cat_1"},
        {name: "Mesas", id: "cat_2"},
        {name: "Espelhos", id: "cat_3"},
    ];


    const items = [
        {cat: "cat_1", title: "Cama de Casal", image: `${base}/images/projects_cama.jpg`, url:"#"},
        {cat: "cat_1", title: "Beliche", image: `${base}/images/projects_cama2.jpg`, url:"#"},
        {cat: "cat_1", title: "Cómoda", image: `${base}/images/projects_cama3.jpg`, url:"#"},
        {cat: "cat_2", title: "Mesa", image: `${base}/images/projects_mesas.jpg`, url:"#"},
        {cat: "cat_2", title: "Mesa de Sala", image: `${base}/images/projects_mesas2.jpg`, url:"#"},
        {cat: "cat_2", title: "Mesa de centro", image: `${base}/images/projects_mesas3.jpg`, url:"#"},
        {cat: "cat_3", title: "Espelho", image: `${base}/images/projects_espelho.jpg`, url:"#"},
        {cat: "cat_3", title: "Espelho", image: `${base}/images/projects_espelho2.jpg`, url:"#"},
        {cat: "cat_3", title: "Espelho", image: `${base}/images/projects_espelho3.jpg`, url:"#"},

    ];

    let filteredItems = items.filter(item => item.cat === active || active === "all");

    
</script>



<style>
#projects {
    padding-top: 120px;
    background-color: #f6f6f6;
}

#projects h2 {
    margin: 0 0 20px 0;
    font-weight: 500;
    font-size: 34px;
    color: #333;
    text-transform: uppercase;
}
#projects hr {
    height: 4px;
    width: 70px;
    text-align: center;
    position: relative;
    background-color: #a7c44c;
    margin: 0 auto;
    margin-bottom: 20px;
    border: 0;
}
#projects .divItems {
    margin-top: 70px;
}

@media (max-width: 768px) {
    #projects .divItems {
        justify-content: center;
    }
}
</style>


<div id="projects" >

    <div class='flex flex-col items-center'>
        <div class='max-w-[1170px]'>
            <div class='flex flex-col items-center' style="margin-bottom: 70px">
                <h2>Projetos</h2>
                <hr />
            </div>
            <div class='flex flex-row flex-wrap items-center justify-center gap-5'>
                {#each buttons as button}
                    <Button index={button.id} active={active} setActiveButton={setActiveButton}>
                        {button.name}
                    </Button>
                {/each}
            <div class="divItems flex flex-wrap items-left justify-between gap-5">
                {#each filteredItems as item}
                    <PortofolioItem title={item.title} urlImage={item.image} url={item.url}/>
                {/each}
            </div>
            <!-- {filteredItems} -->


            </div>

        </div>
       
    </div>
</div>