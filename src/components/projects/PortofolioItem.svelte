<script>
    import {fly} from 'svelte/transition';
    const props = $props();
</script>
<style>

.portofolioItem {
    margin: 15px 0;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1); opacity: 1;
}

.portofolioItem img {
    border-radius: 0 50px 0 50px;
}

.portofolioItem .h4Mobile {
    font-size: 15px;
    text-align: center;
    margin-top: 5px;
    text-transform: uppercase;
    font-weight: 400;
    color: #333;
    display: none;
}

.portofolioItem .h4 {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 400;
    color: #333;
}

.portofolioItem .overlay{
    display: block;
}


@media (max-width: 768px) {
    
    .portofolioItem {
        max-width: 150px;
    }

    .portofolioItem .h4 {
        font-size: 15px;
    }
    .portofolioItem .h4Mobile{
        display: block;
    }

    .portofolioItem img {
        max-width: 150px;
    }

    .portofolioItem .overlay{
        display: none;
    }


    
}

</style>

<div 
in:fly={{ y: 100, opacity: 0, duration: 600 }}
out:fly={{ y: -100, opacity: 0, duration: 600 }}
class="portofolioItem relative max-w-xs overflow-hidden bg-cover bg-no-repeat flex flex-col items-center justify-center">
    <img
        src={props.urlImage}
        class="max-w-xs"
        alt={props.title} />
    <a href={props.url}><h4 class="h4Mobile">{props.title}</h4></a>
    <a href={props.url}>
        <div
            class="overlay absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">    
            <div class="flex flex-col items-center justify-center h-full">
                <h4 class="h4">{props.title}</h4>
            </div>
        
        </div>
    </a>
</div>