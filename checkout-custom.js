(() => {
  // ─── CONFIG: adicione seus IDs aqui ───────────────────────────────────────
  var CONFIG = {
    1234: {
      nome: "Signup Fee",
      imagem:
        "https://i.postimg.cc/nhTBD8Jg/Whats-App-Image-2026-02-27-at-20-11-33.jpg",
      preco: "$39.95",
    },
    5678: {
      nome: "NOME PRODUTO B",
      imagem: "https://url-da-imagem-2.jpg",
      preco: "$49.90",
    },
  };
  // ──────────────────────────────────────────────────────────────────────────

  var id = new URLSearchParams(location.search).get("id");
  var cfg = CONFIG[id];

  // encerra se ID inválido ou não for mobile
  if (!cfg) return;
  if (!matchMedia("(max-width:1024px)").matches) return;

  // 1. injeta CSS
  var injectCSS = function () {
    var css = [
      // esconde preço, quantidade, variante originais
      "#cartx-section-checkout_summary #cartx-section-cart-products .checkout-product-row .desktop-price .nett-price,",
      "#cartx-section-checkout_summary #cartx-section-cart-products .checkout-product-row .product-price-mobile .bolderFont,",
      "#cartx-section-checkout_summary .checkout-product-row .variant-name,",
      "#cartx-section-checkout_summary .checkout-product-row .custom_options,",
      "#cartx-section-checkout_summary .checkout-product-row .prdct-qty,",
      ".incremental-btn-wrap { display:none !important; }",

      // esconde valor real do preço
      "#cartx-section-checkout_summary #cartx-section-checkout-cost-details .price-value.checkoutSubTotal,",
      "#cartx-section-checkout_summary #cartx-section-checkout-cost-details .final-total.checkoutTotal > span,",
      ".total-text .checkoutTotal .m-price { font-size:0 !important; }",

      // injeta preço customizado via ::after
      "#cartx-section-checkout_summary #cartx-section-checkout-cost-details .price-value.checkoutSubTotal::after,",
      "#cartx-section-checkout_summary #cartx-section-checkout-cost-details .final-total.checkoutTotal > span::after,",
      ".total-text .checkoutTotal .m-price::after {",
      '  content:"' + cfg.preco + '";',
      "  display:inline-block; width:100%; text-align:right;",
      "  font-size:18px; font-weight:400; color:#000;",
      "}",

      // esconde símbolo de moeda duplicado
      "#cartx-section-checkout_summary #cartx-section-checkout-cost-details .currency-code.disp-inline-block { display:none !important; }",

      // esconde nome original e injeta nome customizado via ::after
      ".prdcts_list .checkout-product-row:nth-of-type(1) .prdct-name h5 {",
      "  font-size:0 !important; line-height:0 !important;",
      "}",
      ".prdcts_list .checkout-product-row:nth-of-type(1) .prdct-name h5::after {",
      '  content:"' + cfg.nome + '";',
      "  font-size:16px; line-height:1.2; font-weight:400; color:#111;",
      "}",
    ].join("\n");

    // envolve em @media mobile
    var style = document.createElement("style");
    style.textContent = "@media(max-width:1024px){" + css + "}";
    document.head.appendChild(style);
  };

  // 2. remove elementos indesejados (imposto, termos, avisos)
  var removeElements = function () {
    var sel = [
      ".totalTaxText",
      ".price-title.bolderFont",
      ".subscription-messages-main",
      ".terms-text-payment",
      ".bottom-form-content-new",
      ".bottom-important-notice",
    ].join(",");

    document.querySelectorAll(sel).forEach(function (el) {
      if (el.textContent && el.textContent.match(/estimated taxes|imposto/i)) {
        el.remove();
        return;
      }
      if (el.classList.contains("totalTaxText")) {
        el.remove();
        return;
      }
      if (
        el.matches(
          ".bottom-important-notice,.subscription-messages-main,.terms-text-payment,.bottom-form-content-new",
        )
      ) {
        el.remove();
      }
    });
  };

  // MutationObserver para re-remover caso CartPanda reinsira dinamicamente
  var observeRemovals = function () {
    removeElements();
    new MutationObserver(removeElements).observe(document.body, {
      subtree: true,
      childList: true,
    });
  };

  // 3. troca imagem diretamente no src do <img>
  var swapImage = function () {
    document.querySelectorAll(".prdct-thumb img").forEach(function (img) {
      img.src = cfg.imagem;
    });
  };

  // 4. executa
  var run = function () {
    injectCSS();
    observeRemovals();
    swapImage();
  };

  document.readyState !== "loading"
    ? run()
    : document.addEventListener("DOMContentLoaded", run);
})();
