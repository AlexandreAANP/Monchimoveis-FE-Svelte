<script>
    import { slide } from "svelte/transition";
    import SendIcon from "../icons/SendIcon.svelte";
    import CancelIcon from "../icons/CancelIcon.svelte";
    import ShowMessage from "../ShowMessage.svelte";
    import {blockProduct, loadProductMessage} from "../../../utils/block-product.utils.svelte"
    import ShowWarningMessage from "../ShowWarningMessage.svelte";
    const apiEndpoint = "http://localhost:9898/api/v1/content/product/add/interested"
    const __successMessage = "A sua Mensagem foi enviada com sucesso!<br>Entraremos em contacto consigo assim que possível"
    const __warningBlockedProductMessage = "⚠️ Já recebemos uma mensagem sua recentemente.<br> Por favor, aguarde pelo menos 24 horas antes de enviar outra."

    let {productTitle, productReference, hide,  hideFunction} = $props();
    let isBlock = $state(false)
    let productMessage = $state({
        name: "",
        email: "",
        phone: "",
        message: "",
    })
    let errors = $state({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    let successMessage = $state("")
    let warningMessage = $state("")

    async function showMessage() {
        successMessage = __successMessage;
        console.log(isBlock)
        setTimeout(() => {successMessage = ""; !isBlock && hideFunction()}, 3000);
    }

    async function showWarning() {
        warningMessage = __warningBlockedProductMessage;
        setTimeout(() => warningMessage = "", 3000);
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validateForm() {
        console.log(productMessage)
        errors = { name: '', email: '', telefone: '', message: '' };

        if (!productMessage.name.trim()) errors.name = 'Nome é obrigatório.';
        if (!productMessage.email.trim()) errors.email = 'Email é obrigatório.';
        else if (!validateEmail(productMessage.email)) errors.email = 'Email inválido.';
        if (!productMessage.phone.trim()) errors.phone = 'Telefone é obrigatório.';
        if (!productMessage.message.trim()) errors.message = 'Mensagem é obrigatória.';

        return Object.values(errors).every((e) => e === '');
    }
    async function handleSubmit(){
        if(isBlock) return;
        if(validateForm()){
            //send message
            let productID = productReference.split("-")
            console.log(productID)
            productID = productID[productID.length - 1];
            const response = await fetch(apiEndpoint, {method:"POST", body: JSON.stringify({
                "product_id": productID,
                "name": productMessage.name,
                "email": productMessage.email,
                "phone": productMessage.phone,
                "message": productMessage.message
            })})
            if(!response.ok) return;

            blockProduct(productReference, productMessage);
            showMessage();
            isBlock = true;

        }
    }

    let blockedProductMessage = loadProductMessage(productReference);
    if(blockedProductMessage){
        productMessage.name = blockedProductMessage.name;
        productMessage.email = blockedProductMessage.email;
        productMessage.phone = blockedProductMessage.phone;
        productMessage.message = blockedProductMessage.message;
        showWarning();
        isBlock = true;
    }
    

    


</script>
<style>
    .btn-send {
        cursor: pointer;
        color: #fff;
        background-color: #5cb85c;
        border-color: #4cae4c;
    }
    .btn-send:hover{
        background-color: #449d44;
        border-color: #398439;
    }
    .btn-send:disabled {
        cursor: not-allowed;
        background-color: #a5d6a7;  /* lighter green */
        border-color: #a5d6a7;
        opacity: 0.65;
    }
    .btn-cancel {
        cursor: pointer;
        color: #fff;
        background-color: #d9534f;
        border-color: #d43f3a;
    }
    .btn-cancel:hover{
        background-color: #c9302c;
        border-color: #ac2925;
    }
    .error{
        color: #c9302c;
    }
</style>


<div 
    in:slide={{ y: 200, duration: 700 }}
    out:slide={{ y: 200, duration: 700 }}
    class={`w-[300px] md:w-[400px] bg-gray-100 rounded-lg fixed right-[5vw] bottom-0  p-4`}>
    <div>
        
      <h4 id="product_name" class="text-lg font-semibold">{productTitle}</h4>
      <h5 class="text-base font-small mt-2">Interessado em saber mais sobre este produto?</h5>
      <p class="text-sm text-gray-600 mt-1">Deixe-nos o seu contacto e entraremos em contacto consigo o mais breve possível.</p>
      
    </div>
  
    <form id="interestedForm" class="mt-4 space-y-4" onsubmit={(e) => e.preventDefault()}>
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Nome:</label>
        <input type="text" id="name" name="name" placeholder="Introduza o seu nome" bind:value={productMessage.name} disabled={isBlock}
          class="mt-1 py-2 pl-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
          {#if errors.name}
            <p class="error text-sm mt-1">{errors.name}</p>
          {/if}
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Introduza o seu email"
          bind:value={productMessage.email}
          disabled={isBlock}
          class="mt-1 py-2 pl-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
          {#if errors.email}
            <p class="error text-sm mt-1">{errors.email}</p>
          {/if}
          </div>
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700">Telefone:</label>
        <input type="text" id="phone" maxlength="15" name="phone" placeholder="Introduza o seu telefone" bind:value={productMessage.phone} disabled={isBlock}
          class="mt-1 py-2 pl-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
          {#if errors.phone}
            <p class="error text-sm mt-1">{errors.phone}</p>
          {/if}
      </div>
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Mensagem:</label>
        <textarea id="message" name="message" rows="3" bind:value={productMessage.message} disabled={isBlock}
          placeholder="Estou interressado no produto e gostava de receber mais informações."
          class="mt-1 py-2 pl-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"></textarea>
          {#if errors.message}
            <p class="error text-sm mt-1">{errors.message}</p>
        {/if}
      </div>
    </form>
  
    <div class="flex justify-between gap-4 mt-4">
      <button onclick={handleSubmit} disabled={isBlock} class="btn-send flex items-center justify-center gap-2 px-4 py-2 rounded">
        <SendIcon/>  Enviar
      </button>
      <button  
        onclick={hideFunction}
        class="btn-cancel  px-4 py-2 rounded flex items-center justify-center gap-2 ">
        <CancelIcon/> Cancelar
      </button>
    </div>
  </div>

  <ShowMessage message={successMessage}/>
  <ShowWarningMessage message={warningMessage}/>