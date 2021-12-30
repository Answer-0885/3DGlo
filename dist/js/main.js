(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),r=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),a=()=>{let a=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return Math.floor(t/60/60/24),{timeRemaining:t,hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();function c(e){return e<=9?"0"+e:e}t.textContent=c(a.hours),r.textContent=c(a.minutes),o.textContent=c(a.seconds),a.timeRemaining<=0&&(clearInterval(n),t.textContent="00",r.textContent="00",o.textContent="00")};a();const n=setInterval(a,1e3)})("31 december 2021"),(()=>{const e=document.querySelector("menu"),t=document.querySelector("main");document.querySelector("body").addEventListener("click",(r=>{const o=r.target.closest('a[href*="#"]'),a=()=>{e.classList.toggle("active-menu")};if(r.target.closest(".menu"))a();else if(r.target.closest(".close-btn"))a();else if(o&&t.contains(r.target)){r.preventDefault();const e=o.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}else if(o&&e.contains(r.target)){r.preventDefault();const e=r.target.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"}),a()}else!e.contains(r.target)&&e.classList.contains("active-menu")&&a()}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),r=document.querySelector("body");let o=0,a=0;function n(){o+=.01,o>=1&&(o=1,cancelAnimationFrame(a)),e.style.opacity=o,a=requestAnimationFrame(n)}t.forEach((t=>{t.addEventListener("click",(()=>{window.screen.width<768?(e.style.display="block",r.style.overflow="hidden"):(e.style.display="block",r.style.overflow="hidden",e.style.opacity="0",a=requestAnimationFrame(n))}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none",r.style.overflow="auto",o=0,cancelAnimationFrame(a))}))})(),(()=>{document.querySelector(".calc-type");const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),r=document.querySelector(".calc-day"),o=document.querySelector("#form1-name"),a=document.querySelector("#form1-email"),n=document.querySelector("#form1-phone"),c=document.querySelector("#form2-name"),l=document.querySelector("#form2-email"),s=document.querySelector("#form2-phone"),i=document.querySelector("#form2-message"),u=document.querySelector("#form3-name"),d=document.querySelector("#form3-email"),m=document.querySelector("#form3-phone");n.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9()\-]/,"")})),s.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\d/,"")})),m.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\d/,"")})),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^A-Za-z0-9@\-_.!~*']/,"")})),l.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^A-Za-z0-9@\-_.!~*']/,"")})),d.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^A-Za-z0-9@\-_.!~*']/,"")})),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\w+/,"")})),c.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\w+/,"")})),i.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\w+/,"")})),u.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\w+/,"")})),e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),r=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const o=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),r[t].classList.remove("d-none")):(e.classList.remove("active"),r[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");let r,o=document.querySelector(".portfolio-dots"),a=document.querySelectorAll(".dot"),n=0;const c=(e,t,r)=>{e[t].classList.remove(r)},l=(e,t,r)=>{e[t].classList.add(r)},s=()=>{c(t,n,"portfolio-item-active"),c(a,n,"dot-active"),n++,n>=t.length&&(n=0),l(t,n,"portfolio-item-active"),l(a,n,"dot-active")},i=(e=1500)=>{r=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(c(t,n,"portfolio-item-active"),c(a,n,"dot-active"),e.target.matches("#arrow-right")?n++:e.target.matches("#arrow-left")?n--:e.target.classList.contains("dot")&&a.forEach(((t,r)=>{e.target===t&&(n=r)})),n>=t.length&&(n=0),n<0&&(n=t.length-1),l(t,n,"portfolio-item-active"),l(a,n,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(r)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),e&&t&&o&&((()=>{for(let e=0;e<t.length;e++){let e=document.createElement("li");e.classList.add("dot"),o.append(e)}o.children[0].classList.add("dot-active")})(),i(2e3))})()})();