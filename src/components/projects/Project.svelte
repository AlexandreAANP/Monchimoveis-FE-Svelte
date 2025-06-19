<script>
    import Button from './Button.svelte';
    import PortofolioItem from './PortofolioItem.svelte';
    const {config} =$props();
    let active = $state("all");
    function setActiveButton(index){
        active = index;
    }
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
                <h2>{config.title}</h2>
                <hr />
            </div>
            <div class='flex flex-row flex-wrap items-center justify-center gap-5'>
                {#each config.cats as button}
                    <Button index={button.id} active={active} setActiveButton={setActiveButton}>
                        {button.name}
                    </Button>
                {/each}
                
            <div class="divItems flex flex-wrap items-left justify-between gap-5">
                {#each config.items as item}
                    {#if active === "all" || active === item.cat}
                        <PortofolioItem title={item.title} urlImage={item.image} url={item.url}/>
                    {/if}
                {/each}
            </div>


            </div>

        </div>
       
    </div>
</div>