(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const p=[{title:"Página Educativa - Landing Page",description:"Primer proyecto creado con HTML, SASS y Vite, mostrando mis proyectos y habilidades.",technologies:["HTML","SASS","Vite"],image:"./src/assets/img/pagina-educativa.jpg",github:"https://github.com/jaickerlozano/proyecto_elaboracion_pagina_html",demo:"https://jaickerlozano.github.io/proyecto_elaboracion_pagina_html/"},{title:"Portfolio - Landing Page",description:"Portfolio responsive creado con HTML, SASS y Vite, mostrando mis proyectos y habilidades.",technologies:["HTML","SASS","Vite"],image:"./src/assets/img/proyecto-portfolio.jpg",github:"https://github.com/jaickerlozano/proyecto03_responsive_portfolio",demo:"https://jaickerlozano.github.io/proyecto03_responsive_portfolio/"},{title:"Juego de Memoria",description:"Primer proyecto creado con Vanilla JS",technologies:["JavaScript","HTML","SASS","Vite"],image:"./src/assets/img/juego-de-parejas.jpg",github:"https://github.com/jaickerlozano/primer-proyecto-js-juego-de-memoria",demo:"https://jaickerlozano.github.io/primer-proyecto-js-juego-de-memoria/"},{title:"E-Learning Landing Page",description:"e-Learning es una landing page responsive desarrollada con HTML, SASS y Vite",technologies:["HTML","SASS","Vite"],image:"./src/assets/img/e-learning-mobile.jpg",github:"https://github.com/jaickerlozano/Proyecto01_responsive_elearning",demo:"https://jaickerlozano.github.io/Proyecto01_responsive_elearning/"},{title:"Texto a Voz",description:"Aplicación en Python que convierte texto en voz, con interfaz simple y configurable.",technologies:["Python"],image:"./src/assets/img/textoavoz.jpg",github:"https://github.com/JaickerLozano/texto_a_voz",demo:"#"},{title:"Editor de Texto",description:"Aplicación básica en Python para editar texto utilizando la librería tkinter",technologies:["Python"],image:"./src/assets/img/editordetexto.jpg",github:"https://github.com/jaickerlozano/editor_de_texto",demo:"#"}],l=document.getElementById("projectsContainer");function v(t){const{title:s,description:i,technologies:n,image:e,github:o,demo:a}=t,u=n.map(h=>`<span>${h}</span>`).join("");return`
    <div class="project-card">
      <img src="${e}" alt="${s}" class="project-card__img" />
      <div class="project-card__body">
        <h3 class="project-card__title">${s}</h3>
        <p class="project-card__desc">${i}</p>
        <div class="project-card__tech">${u}</div>
        <div class="project-card__links">
          <a href="${o}" target="_blank">GitHub</a>
          <a href="${a}" target="_blank">Demo</a>
        </div>
      </div>
    </div>
  `}document.addEventListener("DOMContentLoaded",()=>{l?l.innerHTML=p.map(v).join(""):console.error("No se encontró el contenedor de proyectos (id=projectsContainer).")});const d=document.querySelector(".skills__grid"),f=[{name:"HTML",icon:"./src/assets/img/icons/html5.svg"},{name:"SASS",icon:"./src/assets/img/icons/sass.svg"},{name:"JavaScript",icon:"./src/assets/img/icons/javascript.svg"},{name:"Python",icon:"./src/assets/img/icons/python.svg"},{name:"MySQL",icon:"./src/assets/img/icons/mysql.svg"},{name:"Git / GitHub",icon:"./src/assets/img/icons/github.svg"},{name:"React",icon:"./src/assets/img/icons/react.svg"}];function b(t){return`
    <div class="skill-card">
      <img src="${t.icon}" alt="${t.name}" />
      <h3>${t.name}</h3>
    </div>
  `}function y(){d&&(d.innerHTML=f.map(b).join(""))}function j(){const t=document.querySelectorAll(".skill-card"),s=new IntersectionObserver((i,n)=>{i.forEach(e=>{if(e.isIntersecting){const o=Array.from(t).indexOf(e.target);setTimeout(()=>{e.target.classList.add("show")},o*100),n.unobserve(e.target)}})},{threshold:.2});t.forEach(i=>s.observe(i))}document.addEventListener("DOMContentLoaded",()=>{y(),j()});const r=document.getElementById("contactForm"),c=document.getElementById("formMessage"),m=document.querySelector(".contact__content"),_=new IntersectionObserver((t,s)=>{t.forEach(i=>{i.isIntersecting&&(i.target.classList.add("show"),s.unobserve(i.target))})},{threshold:.2});m&&_.observe(m);r&&r.addEventListener("submit",t=>{t.preventDefault();const s=r.name.value.trim(),i=r.email.value.trim(),n=r.message.value.trim();if(!s||!i||!n){c.textContent="Por favor completa todos los campos.",c.style.color="red";return}c.textContent="¡Mensaje enviado correctamente! 📩",c.style.color="green",r.reset()});const S=document.getElementById("projectsContainer");S.innerHTML=p.map(t=>`
  <div class="project-card">
    <img src="${t.imagen}" alt="${t.nombre}">
    <h3>${t.nombre}</h3>
    <p>${t.descripcion}</p>
    <div class="project-links">
      <a href="${t.demo}" target="_blank">Demo</a>
      <a href="${t.codigo}" target="_blank">Código</a>
    </div>
  </div>
`).join("");const L=document.getElementById("nav-toggle"),P=document.querySelector(".nav__menu");L.addEventListener("click",()=>{P.classList.toggle("active")});const g=document.getElementById("year");g&&(g.textContent=new Date().getFullYear());
