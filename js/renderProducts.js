!function(t){var n={};function e(c){if(n[c])return n[c].exports;var r=n[c]={i:c,l:!1,exports:{}};return t[c].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,c){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:c})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(e.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(c,r,function(n){return t[n]}.bind(null,r));return c},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n){const e=document.querySelector("#products-container");function c(t){t.forEach((function(t){const n=`<div class="col-md-6">\n\t\t\t\t\t\t<div class="card mb-4" data-id="${t.id}">\n\t\t\t\t\t\t\t<img class="product-img" src="img/roll/${t.imgSrc}" alt="">\n\t\t\t\t\t\t\t<div class="card-body text-center">\n\t\t\t\t\t\t\t\t<h4 class="item-title">${t.title}</h4>\n\t\t\t\t\t\t\t\t<p><small data-items-in-box class="text-muted">${t.itemsInBox} шт.</small></p>\n\n\t\t\t\t\t\t\t\t<div class="details-wrapper">\n\n\t\t\t\t\t\t\t\t\t\x3c!-- Счетчик --\x3e\n\t\t\t\t\t\t\t\t\t<div class="items counter-wrapper">\n\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="minus">-</div>\n\t\t\t\t\t\t\t\t\t\t<div class="items__current" data-counter>1</div>\n\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="plus">+</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\x3c!-- // Счетчик --\x3e\n\n\t\t\t\t\t\t\t\t\t<div class="price">\n\t\t\t\t\t\t\t\t\t\t<div class="price__weight">${t.weight}г.</div>\n\t\t\t\t\t\t\t\t\t\t<div class="price__currency">${t.price} ₽</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<button data-cart type="button" class="btn btn-block btn-outline-warning">\n\t\t\t\t\t\t\t\t\t+ в корзину\n\t\t\t\t\t\t\t\t</button>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>`;e.insertAdjacentHTML("beforeend",n)}))}!async function(){const t=await fetch("./js/products.json");c(await t.json())}(),document.querySelector("#rolss").onclick=function(){},document.querySelector("#sushs").onclick=function(){},document.querySelector("#sups").onclick=function(){}}]);
