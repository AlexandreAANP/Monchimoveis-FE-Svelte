<script>
    import {fly} from 'svelte/transition';
    import TranslateIcon from './TranslateIcon.svelte';
    const {config} = $props();
    let language= $state("pt");
    function toggleLanguage() {
        language = language === "pt" ? "en" : "pt";
    }
  
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
                {config[language].subtitle}
            </h3>
            {/key}       
        </div>

        <div class="mb-3 flex justify-end pt-2 pr-2 ">
            <button
            class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none translateButton"
            onclick={toggleLanguage}
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
            {config[language].text}

        </p>
        {/key}
      
    </div>
    
  
</div>