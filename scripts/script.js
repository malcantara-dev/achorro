// Inicialização do Swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 5, // Mostra 5 itens ao mesmo tempo
    spaceBetween: 10, // Espaçamento entre os itens
    loop: true, // Ativa o loop infinito
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // Numero de cards na tela de acordo com tamanho da tela
      1024: { slidesPerView: 5 },
      768: { slidesPerView: 3 },
      480: { slidesPerView: 1 },
    },
  })
  
  // Função para suavizar a animação
  function easeOutStrong(t) {
    return 1 - Math.pow(1 - t, 4) // O expoente 4 faz a desaceleração começar mais cedo
  }
  
  // Função para animar os números
  function animateCounter(id, start, end, duration) {
    const counter = document.getElementById(id)
    const startTime = performance.now()
  
    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutStrong(progress)
      const currentValue = Math.floor(start + (end - start) * easedProgress)
      counter.textContent = currentValue
  
      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        counter.textContent = end
      }
    }
  
    requestAnimationFrame(updateCounter)
  }
  
  // Função para verificar se um elemento está visível na tela
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }
  
  // Iniciar animação quando os contadores estiverem visíveis
  function handleScroll() {
    const statsSection = document.querySelector(".stats")
    if (isElementInViewport(statsSection)) {
      animateCounter("counter1", 0, 4522, 2000)
      animateCounter("counter2", 0, 1369, 2000)
      window.removeEventListener("scroll", handleScroll)
    }
  }
  
  // Inicialização
  document.addEventListener("DOMContentLoaded", () => {
    // Verificar se os contadores já estão visíveis quando a página carrega
    handleScroll()
  
    // Adicionar evento de scroll para animar quando ficar visível
    // window.addEventListener("scroll", handleScroll)
  })
  
  // Iniciar animação imediatamente quando a página carrega completamente
  window.onload = () => {
    animateCounter("counter1", 0, 4522, 2000)
    animateCounter("counter2", 0, 1369, 2000)
  }
  
  