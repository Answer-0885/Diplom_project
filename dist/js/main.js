(()=>{"use strict";const e=(e,t,o)=>{const r=document.querySelector("body"),n=document.querySelector(".overlay"),l=document.querySelectorAll(`.${e}`),a=document.querySelector(`.${o}`);l.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),a.style.display="block",r.style.overflow="hidden",n.style.display="block",function({timing:e,draw:t,duration:o}){let r=performance.now();requestAnimationFrame((function n(l){let a=(l-r)/o;a>1&&(a=1);let s=e(a);t(s),a<1&&requestAnimationFrame(n)}))}({duration:600,timing:e=>e,draw(e){a.style.opacity=e,n.style.opacity=e}})}))})),window.addEventListener("click",(e=>{(e.target.closest(".overlay")||e.target.classList.contains(`${t}`))&&(a.style.display="none",r.style.overflow="auto",n.style.display="none")}))},t=({formID:e,someElem:t=[]})=>{const o=document.getElementById(e),r=document.createElement("div");r.style.color="DarkOrange";const n=e=>{let t=!0;return e.forEach((e=>{e.classList.contains("form-name")&&(e.value.match(/^[а-яА-Я\s][а-яА-Я\s]+[а-яА-Я\s]?$/g)||(t=!1,e.classList.add("error"),setTimeout((()=>{e.classList.remove("error")}),4e3))),e.classList.contains("form-phone")&&(e.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,}$/gi)||(t=!1,e.classList.add("error"),setTimeout((()=>{e.classList.remove("error")}),4e3)))})),t};try{if(!o)throw new Error("Верните форму на место, пожааааалуйста!");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),l=new FormData(o),a={};var s;n(e)?(o.append(r),r.textContent="Загрузка..."):r.textContent="",l.forEach(((e,t)=>{a[t]=e})),window.location.toString().indexOf("balkony.html")>0&&t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?a[e.id]=t.textContent:"input"===e.type&&"0"!==t.value&&""!==t.value&&(a[e.id]=t.value)})),n(e)?(s=a,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{e.forEach((e=>{e.classList.contains("value")||(e.value=""),e.classList.remove("error")})),r.textContent="Спасибо! Наш менеджер с вами свяжется.",setTimeout((()=>{o.removeChild(r);const e=document.querySelector(".header-modal"),t=document.querySelector(".navigation-fixed"),n=document.querySelector(".services-modal-1"),l=document.querySelector(".services-modal-2"),a=document.querySelector(".services-modal-3"),s=document.querySelector(".services-modal-4"),c=document.querySelector(".overlay"),i=document.querySelector("body");e.style.display="none",n.style.display="none",l.style.display="none",a.style.display="none",s.style.display="none",t.style.display="none",c.style.display="none",i.style.overflow="auto"}),4e3)})).catch((e=>{r.textContent="Ошибка...",setTimeout((()=>{o.removeChild(r)}),4e3)})):alert("Введите пожалуйста своё имя и номер телефона!")})()}))}catch(e){console.log(e.message)}};e("button","header-modal__close","header-modal"),e("top-btn","header-modal__close","header-modal"),e("sertificate-document","img-modal__close","img-modal"),e("utp-button","header-modal__close","header-modal"),e("open-burger","close-burger","navigation-fixed"),e("service-button-1","services-modal__close","services-modal-1"),e("service-button-2","services-modal__close","services-modal-2"),e("service-button-3","services-modal__close","services-modal-3"),e("service-button-4","services-modal__close","services-modal-4"),(e=>{const t=document.querySelectorAll(".count_1"),o=document.querySelectorAll(".count_2"),r=document.querySelectorAll(".count_3"),n=document.querySelectorAll(".count_4"),l=()=>{let l=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();function s(e){return e<=9?"0"+e:e}let c=function(e,t){return t[e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]]},i=c(l.days,[" День: "," Дня: "," Дней: "]),d=c(l.hours,[" Час: "," Часа: "," Часов: "]),u=c(l.minutes,[" Минута: "," Минуты: "," Минут: "]),m=c(l.seconds,[" Секунда: "," Секунды: "," Секунд: "]);t.forEach((e=>{e.innerHTML=`${i}<br><span>${s(l.days)}</span>`})),o.forEach((e=>{e.innerHTML=`${d}<br><span>${s(l.hours)}</span>`})),r.forEach((e=>e.innerHTML=`${u}<br><span>${s(l.minutes)}</span>`)),n.forEach((e=>{e.innerHTML=`${m}<br><span>${s(l.seconds)}</span>`})),l.timeRemaining<="00"&&(clearInterval(a),t.forEach((e=>{e.textContent="00",e.style.fontSize="32px"})),o.forEach((e=>{e.textContent="00",e.style.fontSize="32px"})),r.forEach((e=>{e.textContent="00",e.style.fontSize="32px"})),n.forEach((e=>{e.textContent="00",e.style.fontSize="32px"})))},a=setInterval(l,1e3);l()})("23:59 31 december 2022"),new Swiper(".swiper",{navigation:{nextEl:".benefits__arrow--right",prevEl:".benefits__arrow--left"},grabCursor:!0,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{576:{slidesPerView:3,spaceBetween:40}}}),(()=>{const e=document.querySelector(".smooth");e.addEventListener("click",(e=>{if(e.preventDefault(),e.target.closest(".smooth")){const t=e.target.closest('a[href*="#"]').getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}})),document.addEventListener("DOMContentLoaded",(()=>{t()})),window.addEventListener("scroll",(()=>{t()}));const t=()=>{window.pageYOffset<500?e.style.display="none":e.style.display="block"}})(),new Swiper(".swiper-service",{navigation:{nextEl:".services__arrow--right",prevEl:".services__arrow--left"},grabCursor:!0,breakpoints:{576:{autoHeight:!0,slidesPerView:2}}}),((e=100)=>{const t=document.querySelector("#calc-type"),o=document.querySelector("#calc-type-material"),r=document.querySelector("#calc-input"),n=document.querySelector("#calc-total");window.addEventListener("input",(l=>{l.target!==t&&l.target!==o&&l.target!==r||(()=>{let l=+t.options[t.selectedIndex].value,a=+o.options[o.selectedIndex].value,s=0;Number.isNaN(l)&&(l=1),Number.isNaN(a)&&(a=1),"--"!=t.value&&"--"!=o.value?s=e*l*a*+r.value:r.value="",n.value=s})()}))})(),(()=>{const e=document.querySelectorAll(".form-name"),t=document.querySelectorAll(".form-phone"),o=e=>(e=(e=(e=(e=(e=e.replace(/\s+/g," ")).replace(/-+/g,"-")).replace(/\(+/g,"(")).replace(/\)+/g,")")).replace(/^[ |\-+]/g,"")).replace(/[ |\-+]$/g,"");e.forEach((e=>{e.addEventListener("blur",(e=>{let t=e.target.value;t=t.replace(/[^а-яёA-Za-z\s]$/gi,""),t=o(t),t=t.replace(/( |^)[ а-яёA-Za-z\s]/g,(e=>e.toUpperCase())),e.target.value=t})),e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-яёA-Za-z}\s]$/gi,"")}))})),t.forEach((e=>{e.addEventListener("blur",(e=>{let t=e.target.value;t=t.replace(/[^\d+]{1,16}$/g,""),t=o(t),e.target.value="",e.target.value=t})),e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d+]{1,16}$/g,"")}))})),t.forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("error")&&e.classList.remove("error")}))})),e.forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("error")&&e.classList.remove("error")}))}))})(),(()=>{const e=document.querySelector(".navigation-fixed"),t=document.querySelector(".overlay"),o=document.querySelector("body");e.addEventListener("click",(r=>{if(r.preventDefault(),e.contains(r.target)&&!r.target.classList.contains("btn")){r.preventDefault();const n=r.target.getAttribute("href");e.style.display="none",t.style.display="none",o.style.overflow="auto",document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}}))})(),t({formID:"form1",someElem:[{type:"input",id:"calc-total"}]}),t({formID:"form2",someElem:[{type:"input",id:"calc-total"}]}),t({formID:"form3",someElem:[{type:"input",id:"calc-total"}]}),t({formID:"form4",someElem:[{type:"input",id:"calc-total"}]}),t({formID:"form5",someElem:[{type:"input",id:"calc-total"}]}),t({formID:"form6",someElem:[{type:"input",id:"calc-total"}]}),t({formID:"form7",someElem:[{type:"input",id:"calc-total"}]}),t({formID:"form8",someElem:[{type:"input",id:"calc-total"}]}),t({formID:"form9",someElem:[{type:"input",id:"calc-total"}]}),t({formID:"form10",someElem:[{type:"input",id:"calc-total"}]})})();