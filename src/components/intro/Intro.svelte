<script>

    let props = $props();
    let title = "MonchiMóveis";
    let subtitle = "Móveis Rústicos de Madeira Natural";
    let buttonContent = "SABER MAIS";
    let buttonHref = "#about";
</script>

<style>

    header {
        display:block;
    }

    .mainDiv {
        display : table;
        width: 100%;
        padding: 0;
        background-position-x: center;
        background-position-y: bottom;
        background-repeat: no-repeat;
        background-color: #e5e5e5;
        background-size: cover;
    }

    .mainDiv2 {
        background-color: rgba(0,0,0,0.4);
    }

    header h1 {
        color: white;
        font-size: 68px;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 10px;
        letter-spacing: -1px;
        line-height: 1.1;
    }

    header .button {
        color: white;
        background-color: #94ae44;
        text-shadow: 0 0 3px #859c3c;
        border: 0;
        padding: 14px 20px;
        margin: 0;
        font-size: 17px;
        font-weight: normal;
        border-radius: 12px 0 12px 0;
        margin-top: 20px;
        transition: all 0.5s ease;
    }

    header p {
        margin-top: 10px;
        margin-bottom: 40px;
    }

    header .mainDiv3 {
        padding-top: 300px;
        padding-bottom: 200px;
    }

    header .spanDash {
        color: #a7c44c;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        header h1 {
            font-size: 40px;
        }
    }

</style>

<header>
    <div class="flex justify-center items-center h-screen bg-background text-foreground mainDiv" style="background-image: {`url(${props.imageUrl})`}">
        <div class="absolute top-0 left-0 w-full h-full mainDiv2">
            <div class="container mx-auto text-center">
                <div class="row">
                    <div class="container mx-auto text-center mainDiv3" >
                        <h1>
                            <strong>
                                {title}
                            </strong>
                            <span class="spanDash"> / </span>
                            {subtitle}
                        </h1>
                        <p></p>
                        <a class="button" href={buttonHref}>
                            {buttonContent}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>