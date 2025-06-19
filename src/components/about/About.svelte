<script>
    import AboutText from "./AboutText.svelte";
    const {config} = $props();
</script>
<style>
    #about {
        padding: 120px 0;
        background-color: #f9f9f9;
    }

    #about .sectioTitle {
        margin-bottom: 40px;
    }

    #about .h2Title {
        margin: 0 0 20px 0;
        font-weight: 500;
        font-size: 34px;
        color: #333;
        text-transform: uppercase;
        text-rendering: optimizeLegibility !important;
    }

    .hrTitle {
        height: 4px;
        width: 70px;
        text-align: center;
        position: relative;
        background-color: #a7c44c;
        margin: 0 auto;
        margin-bottom: 20px;
        border: 0;
    }

    @media (max-width: 768px) {
        #about {
            padding-top: 50px;
        }
        #about .sectioTitle {
            margin-bottom: 20px;
        }
        #about .h2Title {
            font-size: 28px;
        }

        .hrTitle {
            width: 50px;
        }
    }
</style>

<div id="about" >
        <div class="sectioTitle text-center center">
            <h2 class="h2Title">{config.title}</h2>
            <hr class="hrTitle" />

            <div class="flex flex-col items-center">
                <iframe
                    class="w-3/4 h-64 md:w-1/2 md:h-96 shadow-gray-400 shadow-xl"
                    src={config.url_video}
                    title="Monchimoveis"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                >
                </iframe>
            </div>
            <AboutText config={config.content}></AboutText>
        </div>
    
</div>

