<script lang="ts">
    import AboutText from "./AboutText.svelte";
    let title: string = "A nossa História";

    let urlVideo: string = "https://www.youtube.com/embed/WyufinWKOUQ?si=FlvkoVI6Xu9uHmIY";
</script>

<div id="about" class="divAbout">
    <div>
        <div class="sectioTitle text-center center">
            <h2 class="h2Title">{title}</h2>
            <hr class="hrTitle" />

            <div class="flex flex-col items-center">
                <iframe
                    class="w-3/4 h-64 md:w-1/2 md:h-96 shadow-gray-400 shadow-xl"
                    src={urlVideo}
                    title="Monchimoveis"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                >
                </iframe>
            </div>
            <AboutText></AboutText>
        </div>
    </div>
</div>

<style>
    .divAbout {
        padding: 120px 0;
        background-color: #f6f6f6;
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
        .divAbout {
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
