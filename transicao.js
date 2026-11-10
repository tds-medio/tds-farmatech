// Injeta a estrutura visual na página
(function criarOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'transicao-overlay';
    overlay.innerHTML = `
        <div class="transicao-conteudo">
            <img src="public/images/Robo-Load.jpg" alt="Carregando..." class="logo-transicao">
            <div class="transicao-spinner"></div>
        </div>
    `;
    document.body.appendChild(overlay);
})();

let temporizadorCarregamento;

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('transicao-overlay');

    temporizadorCarregamento = setTimeout(() => {
        if (overlay) {
            requestAnimationFrame(() => {
                overlay.classList.add('ativo', 'carregando');
            });
        }
    }, 100);

    window.addEventListener('load', () => {
        clearTimeout(temporizadorCarregamento);

        if (overlay && overlay.classList.contains('ativo')) {
            overlay.classList.add('saindo');
            overlay.classList.remove('carregando');

            // Aguarda a animação de encolher (400ms) terminar para remover o overlay
            setTimeout(() => {
                overlay.classList.remove('ativo', 'saindo');
            }, 100);
        }
    });
});

window.navegarComTransicao = function(url) {
    window.location.href = url;
};
