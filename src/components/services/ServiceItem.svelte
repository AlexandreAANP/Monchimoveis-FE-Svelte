<script>
    const props = $props();

</script>
<style>
.services-p {
    font-size: 17px;
    margin: 0 0 10px;
    color: #777;
    font-weight: 300;
    text-align: left;
    text-rendering: optimizeLegibility !important;
}

.services-h3 {
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 10px 0;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 500;
    color: #333;
}
.hr-for-mobile {
    display: none;
}

@media (max-width: 768px) {
    .services-h3  {
        font-size: 20px;
    }
    .services-p {
        font-size: 15px;
        text-align: justify;
    }
    .hr-for-mobile {
        display: block;
    }
}
</style>

<div class="basis-full pl-3 pr-3">
    <div class="flex flex-col items-center justify-center pr-5 pl-5">
        <img src={props.image} alt={props.title} width={300} height={300} class="shadow-md"/>
        <h3 class="services-h3">{props.title}</h3>
        <p class="services-p">{props.text}</p>
    </div>
</div>