!function(){document.querySelector('[name="delay"]');var e=document.querySelector("form");function o(e,o){return new Promis((function(n,t){var l=Math.random()>.3;setTimeout((function(){l?(n("yes"),resolve({position:e,delay:o})):(t("no"),resolve({position:e,delay:o}))}),o)}))}console.log("hi1"),e.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,t=Number(n.delay.value),l=Number(n.step.value),c=Number(n.amount.value);console.log(t),console.log(l),console.log(c);for(var r=0;r<=c;r+=1)r+=1,console.log(r),o(r,t).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}))}))}();
//# sourceMappingURL=03-promises.24791c75.js.map