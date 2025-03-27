// Script para o FAQ
document.querySelectorAll('.faq-pergunta').forEach(item => {
    item.addEventListener('click', event => {
        const parent = item.parentNode;
        parent.classList.toggle('ativo');
        
        const toggle = item.querySelector('.faq-toggle');
        if (parent.classList.contains('ativo')) {
            toggle.textContent = '-';
        } else {
            toggle.textContent = '+';
        }
    });
});