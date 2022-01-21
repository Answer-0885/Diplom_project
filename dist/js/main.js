(()=>{"use strict";const e=(e,t,o)=>{const r=document.querySelector("body"),a=document.querySelector(".overlay"),n=document.querySelectorAll(`.${e}`),l=document.querySelector(`.${o}`);n.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),l.style.display="block",r.style.overflow="hidden",a.style.display="block",function({timing:e,draw:t,duration:o}){let r=performance.now();requestAnimationFrame((function a(n){let l=(n-r)/o;l>1&&(l=1);let s=e(l);t(s),l<1&&requestAnimationFrame(a)}))}({duration:600,timing:e=>e,draw(e){l.style.opacity=e,a.style.opacity=e}})}))})),window.addEventListener("click",(e=>{(e.target.closest(".overlay")||e.target.classList.contains(`${t}`))&&(l.style.display="none",r.style.overflow="auto",a.style.display="none")}))},t=({formID:e,someElem:t=[]})=>{const o=document.getElementById(e),r=document.createElement("div");r.style.color="DarkOrange";const a=e=>{let t=!0;return e.forEach((e=>{e.classList.contains("form-name")&&(e.value.match(/^[а-яА-Я\s][а-яА-Я\s]+[а-яА-Я\s]?$/g)||(t=!1,e.classList.add("error"),setTimeout((()=>{e.classList.remove("error")}),4e3))),e.classList.contains("form-phone")&&(e.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,}$/gi)||(t=!1,e.classList.add("error"),setTimeout((()=>{e.classList.remove("error")}),4e3)))})),t};try{if(!o)throw new Error("Верните форму на место, пожааааалуйста!");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),n=new FormData(o),l={};var s;a(e)?(o.append(r),r.textContent="Загрузка..."):r.textContent="",n.forEach(((e,t)=>{l[t]=e})),window.location.toString().indexOf("balkony.html")>0&&t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?l[e.id]=t.textContent:"input"===e.type&&"0"!==t.value&&""!==t.value&&(l[e.id]=t.value)})),a(e)?(s=l,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{e.forEach((e=>{e.value="",e.classList.remove("error")})),r.textContent="Спасибо! Наш менеджер с вами свяжется.",setTimeout((()=>{o.removeChild(r);const e=document.querySelector(".header-modal"),t=document.querySelector(".services-modal"),a=document.querySelector(".overlay"),n=document.querySelector("body");e.style.display="none",t.style.display="none",a.style.display="none",n.style.overflow="auto"}),4e3)})).catch((e=>{r.textContent="Ошибка...",setTimeout((()=>{o.removeChild(r)}),4e3)})):alert("Введите пожалуйста своё имя и номер телефона!")})()}))}catch(e){console.log(e.message)}};e("button","header-modal__close","header-modal"),e("service-button","services-modal__close","services-modal"),e("sertificate-document","img-modal__close","img-modal"),e("utp-button","header-modal__close","header-modal"),e("navbar-toggle","header-modal__close","navbar-collapse-fixed"),(e=>{const t=document.querySelectorAll(".count_1>span"),o=document.querySelectorAll(".count_2>span"),r=document.querySelectorAll(".count_3>span"),a=document.querySelectorAll(".count_4>span"),n=()=>{let n=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();function s(e){return e<=9?"0"+e:e}t.forEach((e=>{e.textContent=s(n.days)})),o.forEach((e=>{e.textContent=s(n.hours)})),r.forEach((e=>e.textContent=s(n.minutes))),a.forEach((e=>{e.textContent=s(n.seconds)})),n.timeRemaining<="00"&&(clearInterval(l),t.forEach((e=>{e.textContent="00"})),o.forEach((e=>{e.textContent="00"})),r.forEach((e=>e.textContent="00")),a.forEach((e=>{e.textContent="00"})))},l=setInterval(n,1e3);n()})("23:59 24 january 2022"),new Swiper(".swiper",{navigation:{nextEl:".benefits__arrow--right",prevEl:".benefits__arrow--left"},grabCursor:!0,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{576:{slidesPerView:3,spaceBetween:40}}}),(()=>{const e=document.querySelector(".smooth");e.addEventListener("click",(e=>{if(e.preventDefault(),e.target.closest(".smooth")){const t=e.target.closest('a[href*="#"]').getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}})),document.addEventListener("DOMContentLoaded",(()=>{t()})),window.addEventListener("scroll",(()=>{t()}));const t=()=>{window.pageYOffset<500?e.style.display="none":e.style.display="block"}})(),new Swiper(".swiper-service",{navigation:{nextEl:".services__arrow--right",prevEl:".services__arrow--left"},grabCursor:!0,breakpoints:{576:{autoHeight:!1,slidesPerView:2,spaceBetween:40,slidesPerColumn:2}}}),((e=100)=>{const t=document.querySelector("#calc-type"),o=document.querySelector("#calc-type-material"),r=document.querySelector("#calc-input"),a=document.querySelector("#calc-total");window.addEventListener("input",(n=>{n.target!==t&&n.target!==o&&n.target!==r||(()=>{let n=+t.options[t.selectedIndex].value,l=+o.options[o.selectedIndex].value,s=0;Number.isNaN(n)&&(n=1),Number.isNaN(l)&&(l=1),"--"!=t.value&&"--"!=o.value?s=e*n*l*+r.value:r.value="",a.value=s})()}))})(),(()=>{const e=document.querySelectorAll(".form-name"),t=document.querySelectorAll(".form-phone"),o=e=>(e=(e=(e=(e=(e=e.replace(/\s+/g," ")).replace(/-+/g,"-")).replace(/\(+/g,"(")).replace(/\)+/g,")")).replace(/^[ |\-+]/g,"")).replace(/[ |\-+]$/g,"");e.forEach((e=>{e.addEventListener("blur",(e=>{let t=e.target.value;t=t.replace(/[^а-яёA-Za-z\s]$/gi,""),t=o(t),t=t.replace(/( |^)[ а-яёA-Za-z\s]/g,(e=>e.toUpperCase())),e.target.value=t})),e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-яёA-Za-z}\s]$/gi,"")}))})),t.forEach((e=>{e.addEventListener("blur",(e=>{let t=e.target.value;t=t.replace(/[^\d+]{1,16}$/g,""),t=o(t),e.target.value="",e.target.value=t})),e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d+]{1,16}$/g,"")}))})),t.forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("error")&&e.classList.remove("error")}))})),e.forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("error")&&e.classList.remove("error")}))}))})(),t({formID:"form1",someElem:[{type:"input",id:"calc-total"}]}),t({formID:"form2",someElem:[{type:"input",id:"calc-total"}]}),t({formID:"form3",someElem:[{type:"input",id:"calc-total"}]}),t({formID:"form4",someElem:[{type:"input",id:"calc-total"}]}),t({formID:"form5",someElem:[{type:"input",id:"calc-total"}]}),t({formID:"form6",someElem:[{type:"input",id:"calc-total"}]}),t({formID:"form7",someElem:[{type:"input",id:"calc-total"}]})})();