!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");console.log(t),t.addEventListener("click",(function(){n=setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),t.disabled=!0,e.disabled=!1}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(n),console.log("hello")}));var n=null}();
//# sourceMappingURL=01-color-switcher.018c1783.js.map
