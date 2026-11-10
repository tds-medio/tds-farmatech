(function () {
  var URL_JOGOS = './galeria-jogos/jogos.html';




  function irParaJogos() {
    window.location.href = URL_JOGOS;
  }

  function ativarBotaoMenu() {
    var botoes = document.querySelectorAll('header nav button');
    botoes.forEach(function (b) {
      if (b.textContent.trim().toLowerCase() !== 'jogos' || b.dataset.jogosOk) return;
      b.dataset.jogosOk = '1';

      b.disabled = false;
      b.removeAttribute('disabled');
      b.removeAttribute('aria-disabled');
      b.removeAttribute('title');
      b.classList.remove('cursor-not-allowed', 'opacity-50');
      b.style.opacity = '1';
      b.style.cursor = 'pointer';
      b.style.borderColor = 'rgba(255,255,255,0.35)';
      b.addEventListener('mouseenter', function () { b.style.background = 'rgba(255,255,255,0.18)'; });
      b.addEventListener('mouseleave', function () { b.style.background = 'rgba(255,255,255,0.08)'; });
      b.addEventListener('click', irParaJogos);

      // esconde o balãozinho "Em breve"
      var tip = b.parentElement && b.parentElement.querySelector('span');
      if (tip) tip.style.setProperty('display', 'none', 'important');
    });
  }

  function ativarCard() {
    var card = document.querySelector('div[title="Em breve"]');
    if (!card || card.dataset.jogosOk) return;
    card.dataset.jogosOk = '1';

    card.removeAttribute('title');
    card.classList.remove('cursor-not-allowed', 'opacity-60');
    card.style.cursor = 'pointer';
    card.style.opacity = '1';
    card.style.borderTop = '4px solid var(--blue)';
    card.style.transition = 'transform .15s, box-shadow .15s';
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');
    card.addEventListener('mouseenter', function () {
      card.style.transform = 'translateY(-2px)';
      card.style.boxShadow = '0 6px 16px rgba(14,58,110,.15)';
    });
    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
      card.style.boxShadow = '';
    });

    var h3 = card.querySelector('h3');
    if (h3) h3.style.color = 'var(--blue)';

    var icone = card.querySelector('div');
    if (icone) icone.style.background = '#e8f0fa';

    var etiqueta = card.querySelector('span');
    if (etiqueta) {
      etiqueta.textContent = 'Jogar agora →';
      etiqueta.style.background = 'transparent';
      etiqueta.style.color = 'var(--blue-2)';
      etiqueta.style.padding = '0';
      etiqueta.style.textTransform = 'none';
      etiqueta.style.fontSize = '12px';
      etiqueta.style.letterSpacing = 'normal';
    }

    card.addEventListener('click', irParaJogos);
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') irParaJogos();
    });
  }

  function ativarTudo() {
    ativarBotaoMenu();
    ativarCard();
  }

  // o site é React: os elementos são criados/recriados depois do carregamento
  new MutationObserver(ativarTudo).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  document.addEventListener('DOMContentLoaded', ativarTudo);
  ativarTudo();
})();