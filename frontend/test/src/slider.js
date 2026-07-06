// frontend/src/slider.ts
// 1. O Vite vai mapear automaticamente todas as imagens da pasta assets
// O padrão './assets/*' busca tudo que estiver lá dentro
// Mude a sua linha 5 para esta:
const modulosImagens = import.meta.glob('../assets/*.{png,jpg,jpeg,svg,webp}', { eager: true });
// 2. Extraímos apenas os caminhos finais das imagens resolvidas pelo Vite
const caminhosDasImagens = Object.keys(modulosImagens);
// 3. Captura o container do DOM
const sliderContainer = document.getElementById('sliderContainer');
function renderizarImagens() {
    if (!sliderContainer) {
        console.error("Elemento #sliderContainer não foi encontrado no HTML.");
        return;
    }
    // 4. Monta o HTML dinamicamente sem precisar de uma lista manual de nomes
    const htmlImagens = caminhosDasImagens.map((caminho) => {
        return `
            <img 
                src="${caminho}" 
                alt="Imagem do Slider" 
                width="100%"
                loading="lazy" 
                class="slider-img"
            />
        `;
    }).join('');
    sliderContainer.innerHTML = htmlImagens;
}
// 5. Executa ao carregar a página
window.addEventListener('DOMContentLoaded', renderizarImagens);
export {};
//# sourceMappingURL=slider.js.map