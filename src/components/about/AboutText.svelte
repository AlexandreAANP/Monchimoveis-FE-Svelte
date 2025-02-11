<script lang="ts">
    import { fly, fade } from 'svelte/transition';
    import TranslateIcon from './TranslateIcon.svelte';
    import { quintOut } from 'svelte/easing';

    
    type Language = 'pt' | 'en';
    let language: Language = "pt";

    let subtitle: string = "MÓVEIS ARTESANAIS";
    let text: string = "Não há nada que se compare ao mobiliário natural. Todos os móveis são artesanais, fabricados em Monchique de madeira maciça das mais variadas espécies oriundas da serra de Monchique no Algarve. A linha entre móveis rústicos e a forma natural da madeira cruzam-se numa simbiose perfeita entre as peças naturais com bases modernas, que se enquadram perfeitamente num ambiente contemporâneo. Pode desfrutar de mobiliário natural de design único em sua casa, sabendo que todos os móveis de madeira são trabalhados apartir de madeiras sustentáveis num recurso renovável, em que por cada árvore colhida outras árvores serão plantadas. Cada peça de mobiliário natural tem o seu próprio caráter não havendo duas peças iguais.";
    let enSubtitle: string = "NATURAL WOOD FURNITURE";
    let enText: string = "There is nothing that compares to the natural wood furniture. All furnishings are handcrafted in Monchique manufactured of solid wood in a variety of species from the mountains of Monchique in the Algarve. The line between rustic furniture and the natural shape of the wood intersects in a perfect symbiosis between the natural bases which fit perfectly in a contemporary setting. You can enjoy natural furniture unique design in your home, knowing that all wooden furniture are crafted from sustainable wood a renewable resource, where for every tree harvest other trees will be planted. Each piece of furniture has naturally its own character so you wont find two pieces alike.";

    function toggleLanguage() {
        language = language === "pt" ? "en" : "pt";
    }


  const translations = {
    en: { subtitle: enSubtitle, text: enText },
    pt: { subtitle: subtitle, text: text }
  };

  

</script>

<style>
.subtitle {
    font-size: 20px;
    text-transform: uppercase;
    color: #333;
    font-weight: 500;
    text-rendering: optimizeLegibility !important;
    transition: all 1s ease;
}
.translateButton {
    width: 25px;
    height: 25px;
    text-align: center;
    font-size: 5px;
    background-color: #a7c44c;
}


.subtext {
    line-height: 24px;
    margin: 15px 0 30px;
    font-size: 17px;
    color: #777;
    font-weight: 300;
    text-rendering: optimizeLegibility !important;
    text-align: justify;
}

.divText {
    padding: 50px 0;
    margin-top: 4%;
    padding-left: 5%;
    padding-right: 5%;
    height: 270px;
}


@media (max-width: 768px) {
    .subtitle {
        font-size: 18px;
    }
    .subtext {
        font-size: 15px;
    }
    .divText {
        height:560px;
    }
}
</style>

<div class="container mx-auto flex flex-col items-center justify-center px-5 divText">
      
    <div class="mb-2 mt-5 flex w-full items-center justify-between">
        <div class="pl-5 pr-5">
            {#key language}
            <h3 
                class="subtitle"
                in:fly={{ y: -200, opacity: 0, duration: 600 }}
                >
                {translations[language].subtitle}
            </h3>
            {/key}       
        </div>

        <div class="mb-3 flex justify-end pt-2 pr-2 ">
            <button
            class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none translateButton"
            on:click={toggleLanguage}
            >
            <TranslateIcon />
            </button>
        </div>
        
    </div>
    <div class="mb-3 ml-5 flex flex-col items-center justify-left">
        {#key language}
        <p 
            class="subtext"
            in:fly={{ y: -200, opacity: 0, duration: 600 }}
            >
            {translations[language].text}

        </p>
        {/key}
      
    </div>
    
  
</div>