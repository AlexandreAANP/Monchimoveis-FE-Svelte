<script module lang="ts">
    export interface ButtonProps {
        index: string;
        active: string;
        setActiveButton: (index: string) => void;
    }
</script>
<script lang="ts">
    let props = $props();

</script>

<style>
.button {
    cursor: pointer;
    color: #a7c44c;
    font-weight: 400;
    font-size: 15px;
    padding: 10px 20px;
    border: 2px solid #a7c44c;
    border-radius: 10px 0 10px 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    background-color: transparent;
}

.buttonActive{
    background: #a7c44c;
    color: #fff;
}

@media (max-width: 768px) {
    .button {
        font-size: 12px;
    }
}
</style>

<button
    class={`button align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none  ${props.active === props.index ? 'buttonActive' : ''}`}
    onclick="{() => props.setActiveButton(props.index)}"
>
    {@render props.children()}
</button>