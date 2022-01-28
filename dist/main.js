(()=>{"use strict";function e({timing:e,draw:t,duration:n}){let a=performance.now();requestAnimationFrame((function r(o){let l=(o-a)/n;l>1&&(l=1);let c=e(l);t(c),l<1&&requestAnimationFrame(r)}))}const t=document.createElement("div");t.innerHTML='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n  width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">\n  <rect x="0" y="0" width="4" height="16" fill="#19b5fe">\n  <animateTransform attributeType="xml"\n  attributeName="transform" type="translate"\n  values="0 0; 0 20; 0 0"\n  begin="0" dur="0.6s" repeatCount="indefinite" />\n  </rect>\n  <rect x="10" y="0" width="4" height="16" fill="#19b5fe">\n  <animateTransform attributeType="xml"\n  attributeName="transform" type="translate"\n  values="0 0; 0 20; 0 0"\n  begin="0.2s" dur="0.6s" repeatCount="indefinite" />\n  </rect>\n  <rect x="20" y="0" width="4" height="16" fill="#19b5fe">\n  <animateTransform attributeType="xml"\n  attributeName="transform" type="translate"\n  values="0 0; 0 20; 0 0"\n  begin="0.4s" dur="0.6s" repeatCount="indefinite" />\n  </rect>\n  </svg>';const n=document.createElement("div");n.innerHTML='<svg width="48" height="48" viewBox="0 0 48 48" fill="none" \nstroke="#19b5fe"  stroke-width="3" stroke-dasharray="100">\n<path id="check" d="M 12,22 L 22,31 L 36,13" \n   stroke-dashoffset="0">\n<animate attributeName="stroke-dashoffset" \n        from="100" to="0" dur="2s"></animate>\n</path>\n</svg>';const a=document.createElement("div");a.innerHTML='<svg width="48" height="48" viewBox="0 0 48 48" fill="none" \nstroke="#19b5fe" stroke-width="3" stroke-dasharray="100">\n<path id="fail" d="M 15,15 L 32,33 M 32,15 L 15,33" \n   stroke-dashoffset="0">\n<animate attributeName="stroke-dashoffset" \n        from="100" to="0" dur="2s">\n</animate>\n</path>\n</svg>';const r=({formID:e,someElem:r=[]})=>{const o=document.getElementById(e),l=document.querySelector(".popup"),c=document.createElement("div");c.style.color="rgb(25,181,254)";const i=e=>{let t=!0;return e.forEach((e=>{if(e.classList.contains("form-email")){if(!e.value.match(/.+@.+\..+/gi))return t=!1,!1}else if(e.classList.contains("form-phone")){if(!e.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,}$/gi))return t=!1,!1}else if(e.classList.contains("form-name")||e.classList.contains("top-form")){if(!e.value.match(/^[а-яА-Я][а-яА-Я]+[а-яА-Я]?$/g))return t=!1,!1}else if(e.classList.contains("mess")&&e.value.match(/[a-zA-Z'][a-zA-Z']+[a-zA-Z']?$/gi))return t=!1,console.log(e),!1})),t};try{if(!o)throw new Error("Верните форму на место, пожааааалуйста!");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),s=new FormData(o),u={};var d;i(e)?(o.append(c),c.textContent="Загрузка..."):c.textContent="",i(e)&&(o.contains(n)&&o.removeChild(n),o.contains(a)&&o.removeChild(a),o.contains(t)&&o.removeChild(t),o.append(c),o.append(t)),s.forEach(((e,t)=>{u[t]=e})),r.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?u[e.id]=t.textContent:"input"===e.type&&(u[e.id]=t.value)})),i(e)?(d=u,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(d),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((a=>{o.removeChild(t),o.append(n),c.textContent="Спасибо!Наш менеджер с вами свяжется.",e.forEach((e=>{e.value=""})),setTimeout((()=>{o.removeChild(c),o.removeChild(n),l.classList.contains("popup")&&(l.style.display="none")}),3e3)})).catch((e=>{o.removeChild(t),o.append(a),c.textContent="Ошибка...",setTimeout((()=>{o.removeChild(a),o.removeChild(c)}),3e3)})):alert("Введите пожалуйста Ваше имя и номер телефона")})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),a=document.getElementById("timer-seconds"),r=()=>{let r=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return Math.floor(t/60/60/24),{timeRemaining:t,hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();function l(e){return e<=9?"0"+e:e}t.textContent=l(r.hours),n.textContent=l(r.minutes),a.textContent=l(r.seconds),r.timeRemaining<=0&&(clearInterval(o),t.textContent="00",n.textContent="00",a.textContent="00")},o=setInterval(r,1e3);r()})("31 january 2022"),(()=>{const e=document.querySelector("menu"),t=document.querySelector("main");document.querySelector("body").addEventListener("click",(n=>{const a=n.target.closest('a[href*="#"]'),r=()=>{e.classList.toggle("active-menu")};if(n.target.closest(".menu"))r();else if(n.target.closest(".close-btn"))n.preventDefault(),r();else if(a&&t.contains(n.target)){n.preventDefault();const e=a.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}else if(a&&e.contains(n.target)){n.preventDefault();const e=n.target.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"}),r()}else!e.contains(n.target)&&e.classList.contains("active-menu")&&r()}))})(),(()=>{const t=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup");t.forEach((t=>{t.addEventListener("click",(()=>{window.screen.width<768?n.style.display="block":(n.style.display="block",n.style.opacity="0",e({duration:500,timing:e=>e,draw(e){n.style.opacity=e}}))}))})),n.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(n.style.display="none")}))})(),(()=>{document.querySelector(".calc-type");const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),n=document.querySelector(".calc-day"),a=document.querySelector("#form1-name"),r=document.querySelector("#form1-email"),o=document.querySelector("#form1-phone"),l=document.querySelector("#form2-name"),c=document.querySelector("#form2-email"),i=document.querySelector("#form2-phone"),s=document.querySelector("#form2-message"),u=document.querySelector("#form3-name"),d=document.querySelector("#form3-email"),m=document.querySelector("#form3-phone");o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9()+\-]/,"")})),i.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9()+\-]/,"")})),m.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9()+\-]/,"")})),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^A-Za-z0-9@\-_.!~*']/,"")})),c.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^A-Za-z0-9@\-_.!~*']/,"")})),d.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^A-Za-z0-9@\-_.!~*']/,"")})),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-я]/,"")})),l.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-я]/,"")})),s.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-я\.\?\,\:\!\"\'\-]/,"")})),u.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-я]/,"")})),e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),n.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const a=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===a?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");let n,a=document.querySelector(".portfolio-dots"),r=0;const o=(e,t,n)=>{e[t].classList.remove(n)},l=(e,t,n)=>{e[t].classList.add(n)},c=()=>{let e=document.querySelectorAll(".dot");o(t,r,"portfolio-item-active"),o(e,r,"dot-active"),r++,r>=t.length&&(r=0),l(t,r,"portfolio-item-active"),l(e,r,"dot-active")},i=(e=1500)=>{n=setInterval(c,e)};e.addEventListener("click",(e=>{e.preventDefault();let n=document.querySelectorAll(".dot");e.target.matches(".dot, .portfolio-btn")&&(o(t,r,"portfolio-item-active"),o(n,r,"dot-active"),e.target.matches("#arrow-right")?r++:e.target.matches("#arrow-left")?r--:e.target.classList.contains("dot")&&n.forEach(((t,n)=>{e.target===t&&(r=n)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),l(t,r,"portfolio-item-active"),l(n,r,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),e&&t&&a&&((()=>{for(let e=0;e<t.length;e++){let e=document.createElement("li");e.classList.add("dot"),a.append(e)}a.children[0].classList.add("dot-active")})(),i(2e3))})(),((t=100)=>{const n=document.querySelector(".calc-block"),a=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),o=document.querySelector(".calc-count"),l=document.querySelector(".calc-day"),c=document.querySelector("#total");let i=0,s=0;n.addEventListener("input",(n=>{n.target!==a&&n.target!==r&&n.target!==o&&n.target!==l||(()=>{const n=+a.options[a.selectedIndex].value,u=r.value;let d=1,m=1;o.value>1&&(d+=+o.value/10),l.value&&l.value<5?m=2:l.value&&l.value<10&&(m=1.5),a.value&&r.value?(s=i,i=t*n*u*d*m):(i=0,r.value="",o.value="",l.value=""),e({duration:1e3,timing:e=>e,draw(e){c.textContent=Math.round(s+e*(i-s))}})})()}))})(100),new Swiper(".swiper",{grabCursor:!0,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{576:{slidesPerView:3,spaceBetween:40}}}),new Swiper(".swiper2",{grabCursor:!0,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{576:{slidesPerView:3,spaceBetween:5}}}),r({formID:"form1",someElem:[{type:"block",id:"total"}]}),r({formID:"form2",someElem:[{type:"block",id:"total"}]}),r({formID:"form3",someElem:[{type:"block",id:"total"}]})})();