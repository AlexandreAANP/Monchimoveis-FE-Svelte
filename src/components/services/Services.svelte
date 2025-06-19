<script>
    import ServiceItem from './ServiceItem.svelte';
    const {config} = $props();
</script>

<style>

#services h1{
    margin: 0 0 20px 0;
    font-weight: 500;
    font-size: 34px;
    color: #333;
    text-align: center;
    text-transform: uppercase;
}
#services hr {
    height: 4px;
    width: 70px;
    text-align: center;
    position: relative;
    background: #a7c44c;
    margin: 0 auto;
    margin-bottom: 20px;
    border: 0;
}
#services .service-p-title {
    font-size: 18px;
    margin: 0 0 10px;
    color: #777;
    font-weight: 300;
    text-align: center;
    text-rendering: optimizeLegibility !important;
}

#services {
    padding-top: 120px;
    padding-bottom: 30px;

}
#services .divItem {
    margin-top: 70px;
}
.hr-for-mobile {
    display: none;
}

@media (max-width: 768px) {
    #services .service-p-title {
        font-size: 16px;
    }
    .hr-for-mobile {
        display: block;
    }
}
</style>

<div id="services" class="flex flex-row items-center justify-center">
    <div class="max-w-[1170px] flex flex-col items-center justify-center">
        <h1>{config.title}</h1>
        <hr/>

        <p class="service-p-title pr-5 pl-5">
            {config.subtitle}
        </p>

        <div class="flex flex-col md:flex-row flex-nowrap items-center justify-center gap-5 divItem">
            {#each config.items as serviceItem, index}
                <ServiceItem {...serviceItem}/>
                {#if index !== config.items.length - 1}
                    <hr class="hr hr-for-mobile"/>
                {/if}
            {/each}
        </div>
    </div>
</div>