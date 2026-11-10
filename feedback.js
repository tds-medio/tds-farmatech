(function () {
  // ====== CONFIGURAÇÕES ======
  var FORM_URL  = 'https://forms.gle/38i9NdKsk6jnfPNG7';
  var IMG_NAME  = 'IMG-20261103-WA0027.jpg';   // imagem do botão de feedback
  var ICON_NAME = 'logo-ícone.ico';            // ícone do site
  // ===========================

  // Descobre a pasta raiz a partir do próprio feedback.js
  var script = document.currentScript;
  var BASE = script ? new URL('.', script.src).href : './';
  var IMG_URL  = BASE + 'public/images/' + encodeURIComponent(IMG_NAME);
  var ICON_URL = BASE + 'public/images/' + encodeURIComponent(ICON_NAME);

  // ---------- Ícone do site (favicon) ----------
  function setFavicon() {
    document.querySelectorAll('link[rel*="icon"]').forEach(function (l) { l.remove(); });
    var l = document.createElement('link');
    l.rel = 'icon';
    l.type = 'image/x-icon';
    l.href = ICON_URL + '?v=2';
    document.head.appendChild(l);
  }

  // ---------- Botão de feedback ----------
  function criarBotao() {
    if (!document.body || document.getElementById('btn-feedback-tds')) return;

    var wrap = document.createElement('div');
    wrap.id = 'btn-feedback-tds';
    wrap.style.cssText =
      'width:100%;display:flex;justify-content:center;' +
      'padding:24px 16px 32px;box-sizing:border-box;';

    var a = document.createElement('a');
    a.href = FORM_URL;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.title = 'Deixe seu feedback';
    a.setAttribute('aria-label', 'Deixe seu feedback (abre o formulário)');
    a.style.cssText =
      'display:block;width:100%;max-width:420px;border-radius:16px;overflow:hidden;' +
      'box-shadow:0 6px 18px rgba(0,0,0,.25);transition:transform .2s ease, box-shadow .2s ease;';
    a.onmouseenter = function () {
      a.style.transform = 'scale(1.04)';
      a.style.boxShadow = '0 10px 26px rgba(0,0,0,.35)';
    };
    a.onmouseleave = function () {
      a.style.transform = 'scale(1)';
      a.style.boxShadow = '0 6px 18px rgba(0,0,0,.25)';
    };

    var img = document.createElement('img');
    img.src = IMG_URL;
    img.alt = 'Feedback';
    img.style.cssText = 'display:block;width:100%;height:auto;';

    a.appendChild(img);
    wrap.appendChild(a);
    document.body.appendChild(wrap);
  }

  function iniciar() {
    setFavicon();
    criarBotao();
    // Se o React remover o botão ao trocar de aba, ele é recriado
    new MutationObserver(criarBotao).observe(document.body, { childList: true });
  }

  setFavicon();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();