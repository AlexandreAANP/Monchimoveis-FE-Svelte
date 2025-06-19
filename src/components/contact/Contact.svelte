<script>
    const {config} = $props();
</script>

<style>

#contact {
    padding: 120px 0 60px 0;
    background: #F6F6F6;
}
#contact .section {
    margin-bottom: 70px;
}
#contact h2 {
    margin: 0 0 20px 0;
    font-weight: 500;
    font-size: 34px;
    color: #333;
    text-transform: uppercase;
}

#contact hr {
    height: 4px;
    width: 70px;
    text-align: center;
    position: relative;
    background: #a7c44c;
    margin: 0 auto;
    margin-bottom: 20px;
    border: 0;
}
#contact p {
    font-size: 18px;
    margin: 0 0 10px;
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    color: #777;
    font-weight: 300;
    text-align: center;
}

#contact h3 {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 400;
    color: #555;
    margin-top: 20px;
    margin-bottom: 10px;
    line-height: 1.1;
}

#contact .item {
    margin: 20px 0 40px 0;
}

#contact .item span {
    font-weight: 400;
    color: #aaa;
    text-transform: uppercase;
    margin-bottom: 6px;
    display: inline-block;
}
#contact .item p {
    font-size: 16px;
    margin: 0 0 10px;
    text-align: justify;
}

@media (max-width: 768px) {
    #contact h2 {
        font-size: 34px;
    }
    #contact p {
        font-size: 15px;
        text-align: center;
    }
    #contact h3 {
        font-size: 18px;
        text-align: center;
    }
    #contact .item span {
        text-align: center;
    }
    #contact .item {
        margin: 10px 0 20px 0;
        
    }
}
</style>

<div id="contact" class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center max-w-[1170px]">
        <div class="section flex flex-col items-center justify-center pr-5 pl-5">
            <h2 >{config.title}</h2>
            <hr/>
            <p>
                {config.text}
            </p>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-center gap-5 w-full">
            <div class="basis-4/12 flex flex-col items-center justify-center md:items-start md:justify-start pr-5 pl-5">
                    <h3>Contacto</h3>
                    <div class="item flex flex-row md:flex-col w-full">
                        <span class="pr-5 md:pr-0">Morada:</span>
                        <p >{config.address}</p>
                    </div>
                    <div class="item flex flex-row md:flex-col w-full">
                        <span class="pr-5 md:pr-0">Email:</span>
                        <p>{config.email}</p>
                    </div>
                    <div class="item flex flex-row md:flex-col w-full">
                        <span class="pr-5 md:pr-0">Telefone:</span>
                        <p>{config.phone}</p>
                    </div>
            </div>
            <div class="basis-8/12 flex flex-col items-left justify-left pl-5">
                <h3>
                    Nossa localização
                </h3>
                <iframe 
                    title="Nossa localização"
                    src="{config.iframe}"
                    width="100%"
                    height="450"
                    style="border: 0"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</div>