<script>
    import { base } from '$app/paths';
    import ServiceItem from './ServiceItem.svelte';
    const title = "Móveis Personalizados";
    const text =  "Criamos móveis únicos e personalizados, em madeira rústica, para atender ás suas necessidades e estilo.";
    const serviceItems = [
        {
            title: "Móveis Personalizados",
            text: "Criamos móveis únicos e personalizados, em madeira rústica, para atender ás suas necessidades e estilo.",
            image: `${base}/images/background_main_images.jpg`
        },
        {
            title: "Design Exclusivo",
            text: "Desenvolvemos móveis rústicos com design exclusivo, feitos sob medida para complementar o seu ambiente. Cada criação é pensada para unir a beleza natural da madeira com a funcionalidade, resultando em peças que se destacam pelo seu caráter único e pelo cuidado artesanal.",
            image:  `${base}/images/section_image2.jpg`
        },
        {
            title: "Móveis Artesanais",
            text: "Oferecemos a criação de móveis artesanais sob encomenda, feitos com madeira rústica de alta qualidade. Nossos artesãos dedicam-se a cada detalhe, garantindo que cada peça seja uma obra de arte funcional, adaptada às suas especificações e que traga aconchego e estilo ao seu lar.",
            image: `${base}/images/section_image3.jpg`
        }
    ];
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


@media (max-width: 768px) {
    #services .service-p-title {
        font-size: 16px;
    }
}
</style>

<div id="services" class="flex flex-row items-center justify-center">
    <div class="max-w-[1170px] flex flex-col items-center justify-center">
        <h1>{title}</h1>
        <hr/>

        <p class="service-p-title pr-5 pl-5">
            {text}
        </p>

        <div class="flex flex-col md:flex-row flex-nowrap items-center justify-center gap-5 divItem">
            {#each serviceItems as serviceItem}
                <ServiceItem {...serviceItem}/>
            {/each}
        </div>
    </div>
</div>