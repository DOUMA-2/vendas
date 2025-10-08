// Obtém a referência para o elemento do carrinho no cabeçalho (Carrinho (0))
const cartCounter = document.querySelector('.cart');

// Define uma variável para rastrear o número de itens no carrinho
let cartItemCount = 0;

// Função que é chamada ao clicar no botão "Adicionar ao Carrinho"
function addToCart(event) {
    // Verifica se o elemento clicado é o botão
    if (event.target.tagName === 'BUTTON') {
        
        // 1. Aumenta a contagem do carrinho
        cartItemCount++;

        // 2. Atualiza o texto exibido no contador do carrinho
        cartCounter.textContent = `Carrinho (${cartItemCount})`;

        // Opcional: Efeito visual ou mensagem de confirmação
        const productName = event.target.closest('.product-card').querySelector('h3').textContent;
        alert(`${productName} adicionado ao carrinho! Total: ${cartItemCount} itens.`);
    }
}

// 3. Adiciona um "ouvinte de eventos" (event listener)
// Isso faz com que a função 'addToCart' seja executada sempre que 
// um clique ocorrer na grade de produtos.
const productGrid = document.querySelector('.product-grid');
if (productGrid) {
    productGrid.addEventListener('click', addToCart);
} else {
    console.error("Elemento '.product-grid' não encontrado. Verifique seu HTML.");
}