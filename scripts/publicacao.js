// Script para trocar as imagens na galeria
document.querySelectorAll('.miniaturas img').forEach(img => {
    img.addEventListener('click', function() {
        // Remove a classe ativa de todas as miniaturas
        document.querySelectorAll('.miniaturas img').forEach(i => i.classList.remove('ativa'));
        
        // Adiciona a classe ativa na miniatura clicada
        this.classList.add('ativa');
        
        // Atualiza a imagem principal
        document.getElementById('pet-imagem').src = this.src;
    });
});

// Script para carregar os dados do pet com base no parâmetro da URL
// Em uma aplicação real, esses dados viriam de um banco de dados
window.addEventListener('DOMContentLoaded', function() {
    // Obter o parâmetro pet da URL
    const urlParams = new URLSearchParams(window.location.search);
    const petNome = urlParams.get('pet');
    
        
        // Exemplo simples para demonstração
        if (petNome === 'lorena') {
            document.getElementById('pet-nome').textContent = 'Lorena';
            document.getElementById('pet-titulo').textContent = 'Lorena';
            document.getElementById('pet-imagem').src = 'pet2.jpg';
            document.getElementById('info-nome').textContent = 'Lorena';
            document.getElementById('info-raca').textContent = 'Golden Retriever';
            document.getElementById('info-idade').textContent = '2 anos';
            document.getElementById('info-sexo').textContent = 'Fêmea';
            document.getElementById('info-cor').textContent = 'Dourado';
            document.getElementById('info-porte').textContent = 'Grande';
            document.getElementById('info-caracteristicas').textContent = 'Tímida, usa coleira vermelha';
            document.getElementById('info-data').textContent = '22/03/2023';
            document.getElementById('info-local').textContent = 'Zona Oeste - Próximo ao Shopping Eldorado';
            // Atualizar outros campos...
        }
        else if (petNome === 'max') {
            document.getElementById('pet-nome').textContent = 'Max';
            document.getElementById('pet-titulo').textContent = 'Max';
            document.getElementById('pet-imagem').src = 'pet3.jpg';
            document.getElementById('pet-status').textContent = 'Encontrado';
            document.getElementById('info-nome').textContent = 'Max';
            document.getElementById('info-raca').textContent = 'Pug';
            document.getElementById('info-idade').textContent = '5 anos';
            document.getElementById('info-sexo').textContent = 'Macho';
            document.getElementById('info-cor').textContent = 'Bege';
            document.getElementById('info-porte').textContent = 'Pequeno';
            document.getElementById('info-caracteristicas').textContent = 'Brincalhão, usa coleira azul';
            document.getElementById('info-data').textContent = '10/08/2023';
            document.getElementById('info-local').textContent = 'Zona Norte - Próximo ao Parque da Juventude';
        }
        else if (petNome === 'mel') {
            document.getElementById('pet-nome').textContent = 'Mel';
            document.getElementById('pet-titulo').textContent = 'Mel';
            document.getElementById('pet-imagem').src = 'pet4.jpg';
            document.getElementById('info-nome').textContent = 'Mel';
            document.getElementById('info-raca').textContent = 'Dálmata';
            document.getElementById('info-idade').textContent = '3 anos';
            document.getElementById('info-sexo').textContent = 'Fêmea';
            document.getElementById('info-cor').textContent = 'Branca e preta';
            document.getElementById('info-porte').textContent = 'Grande';
            document.getElementById('info-caracteristicas').textContent = 'Medrosa, sem coleira';
            document.getElementById('info-data').textContent = '05/05/2023';
            document.getElementById('info-local').textContent = 'Centro - Próximo à Praça da República';
            // Atualizar outros campos...
        }
        else if (petNome === 'nino') {
            document.getElementById('pet-nome').textContent = 'Nino';
            document.getElementById('pet-titulo').textContent = 'Nino';
            document.getElementById('pet-imagem').src = 'pet5.jpg';
            document.getElementById('info-nome').textContent = 'Nino';
            document.getElementById('info-raca').textContent = 'Pastor Alemão';
            document.getElementById('info-idade').textContent = '1 ano';
            document.getElementById('info-sexo').textContent = 'Macho';
            document.getElementById('info-cor').textContent = 'Bege e marrom';
            document.getElementById('info-porte').textContent = 'Grande';
            document.getElementById('info-caracteristicas').textContent = 'Só late, mas não morde, coleira verde';
            document.getElementById('info-data').textContent = '18/09/2023';
            document.getElementById('info-local').textContent = 'Zona Leste - Próximo ao Shopping Anália Franco';
            // Atualizar outros campos...
        }
        else if (petNome === 'luna') {
            document.getElementById('pet-nome').textContent = 'Luna';
            document.getElementById('pet-titulo').textContent = 'Luna';
            document.getElementById('pet-imagem').src = 'pet6.jpg';
            document.getElementById('info-nome').textContent = 'Luna';
            document.getElementById('info-raca').textContent = 'Golden Retriever';
            document.getElementById('info-idade').textContent = '7 meses';
            document.getElementById('info-sexo').textContent = 'Fêmea';
            document.getElementById('info-cor').textContent = 'Dourado';
            document.getElementById('info-porte').textContent = 'Grande';
            document.getElementById('info-caracteristicas').textContent = 'Nenem, gosta de brincar, coleira rosa';
            document.getElementById('info-data').textContent = '18/12/2023';
            document.getElementById('info-local').textContent = 'Zona Sul - Próximo ao Estádio Morumbi';
            // Atualizar outros campos...
        }
        else if (petNome === 'thor') {
            document.getElementById('pet-nome').textContent = 'Thor';
            document.getElementById('pet-titulo').textContent = 'Thor';
            document.getElementById('pet-imagem').src = 'pet7.jpg';
            document.getElementById('info-nome').textContent = 'Thor';
            document.getElementById('info-raca').textContent = 'Corgi';
            document.getElementById('info-idade').textContent = '4 anos';
            document.getElementById('info-sexo').textContent = 'Macho';
            document.getElementById('info-cor').textContent = 'Branco e marrom';
            document.getElementById('info-porte').textContent = 'Pequeno';
            document.getElementById('info-caracteristicas').textContent = 'Usa coleira preta';
            document.getElementById('info-data').textContent = '27/06/2023';
            document.getElementById('info-local').textContent = 'Zona Norte - Próximo a estação da Sé';
            // Atualizar outros campos...
        }
        // Adicionar outros pets conforme necessário
});