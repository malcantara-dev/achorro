// Script para navegação entre etapas
document.addEventListener('DOMContentLoaded', function() {
    // Botões de navegação
    const btnProximo = document.querySelectorAll('.btn-proximo');
    const btnAnterior = document.querySelectorAll('.btn-anterior');
    
    // Navegação para próxima etapa
    btnProximo.forEach(btn => {
        btn.addEventListener('click', function() {
            const etapaAtual = parseInt(this.getAttribute('data-proximo')) - 1;
            const proximaEtapa = parseInt(this.getAttribute('data-proximo'));
            
            // Validar campos da etapa atual antes de avançar
            if (validarEtapa(etapaAtual)) {
                mudarEtapa(proximaEtapa);
                
                // Se for a última etapa, preencher os dados de revisão
                if (proximaEtapa === 5) {
                    preencherRevisao();
                }
            }
        });
    });
    
    // Navegação para etapa anterior
    btnAnterior.forEach(btn => {
        btn.addEventListener('click', function() {
            const etapaAnterior = parseInt(this.getAttribute('data-anterior'));
            mudarEtapa(etapaAnterior);
        });
    });
    
    // Função para mudar de etapa
    function mudarEtapa(etapa) {
        // Atualizar conteúdo da etapa
        document.querySelectorAll('.etapa-conteudo').forEach(conteudo => {
            conteudo.classList.remove('ativa');
        });
        document.getElementById(`etapa-${etapa}`).classList.add('ativa');
        
        // Atualizar barra de progresso
        document.querySelectorAll('.progresso-etapa').forEach(item => {
            const etapaItem = parseInt(item.getAttribute('data-etapa'));
            if (etapaItem < etapa) {
                item.classList.add('concluida');
                item.classList.remove('ativa');
            } else if (etapaItem === etapa) {
                item.classList.add('ativa');
                item.classList.remove('concluida');
            } else {
                item.classList.remove('ativa', 'concluida');
            }
        });
        
        // Rolar para o topo do formulário
        window.scrollTo({
            top: document.querySelector('.container').offsetTop - 20,
            behavior: 'smooth'
        });
    }
    
    // Função para validar campos da etapa
    function validarEtapa(etapa) {
        // Aqui seria implementada a validação dos campos obrigatórios
        // Para simplificar, estamos retornando true
        return true;
    }
    
    // Função para preencher os dados de revisão
    function preencherRevisao() {
        // Status
        const status = document.querySelector('input[name="status"]:checked').value;
        document.getElementById('revisao-status').textContent = status === 'perdido' ? 'Perdido' : 'Encontrado';
        
        // Nome do pet
        document.getElementById('revisao-nome').textContent = document.getElementById('nome-pet').value || '-';
        
        // Tipo de pet
        const tipoPet = document.getElementById('tipo-pet');
        document.getElementById('revisao-tipo').textContent = tipoPet.options[tipoPet.selectedIndex].text || '-';
        
        // Raça
        document.getElementById('revisao-raca').textContent = document.getElementById('raca').value || '-';
        
        // Idade
        document.getElementById('revisao-idade').textContent = document.getElementById('idade').value || '-';
        
        // Sexo
        const sexo = document.getElementById('sexo');
        document.getElementById('revisao-sexo').textContent = sexo.options[sexo.selectedIndex].text || '-';
        
        // Cor
        document.getElementById('revisao-cor').textContent = document.getElementById('cor').value || '-';
        
        // Porte
        const porte = document.getElementById('porte');
        document.getElementById('revisao-porte').textContent = porte.options[porte.selectedIndex].text || '-';
        
        // Data de desaparecimento
        const data = document.getElementById('data-desaparecimento').value;
        if (data) {
            const dataFormatada = new Date(data).toLocaleDateString('pt-BR');
            document.getElementById('revisao-data').textContent = dataFormatada;
        }
        
        // Local
        const local = document.getElementById('local-desaparecimento').value;
        const bairro = document.getElementById('bairro').value;
        const cidade = document.getElementById('cidade').value;
        const estado = document.getElementById('estado').value;
        let localCompleto = '';
        
        if (local) localCompleto += local;
        if (bairro) localCompleto += (localCompleto ? ', ' : '') + bairro;
        if (cidade) localCompleto += (localCompleto ? ', ' : '') + cidade;
        if (estado) localCompleto += (localCompleto ? ' - ' : '') + estado;
        
        document.getElementById('revisao-local').textContent = localCompleto || '-';
        
        // Responsável
        document.getElementById('revisao-responsavel').textContent = document.getElementById('nome-responsavel').value || '-';
        
        // Telefone
        document.getElementById('revisao-telefone').textContent = document.getElementById('telefone').value || '-';
        
        // Email
        document.getElementById('revisao-email').textContent = document.getElementById('email').value || '-';
        
        // Foto principal
        const fotoPrincipal = document.getElementById('foto-principal').files[0];
        if (fotoPrincipal) {
            const previewContainer = document.getElementById('revisao-foto-principal');
            previewContainer.innerHTML = '';
            
            const img = document.createElement('img');
            img.src = URL.createObjectURL(fotoPrincipal);
            img.alt = 'Foto do pet';
            img.className = 'revisao-imagem';
            
            previewContainer.appendChild(img);
        }
    }
    
    // Script para preview de imagens
    const inputsFoto = document.querySelectorAll('.file-input');
    
    inputsFoto.forEach(input => {
        input.addEventListener('change', function(e) {
            const file = this.files[0];
            if (file) {
                const previewContainer = this.parentElement.querySelector('.preview-container');
                const placeholder = this.parentElement.querySelector('.upload-placeholder');
                
                // Limpar preview anterior
                previewContainer.innerHTML = '';
                
                // Criar preview
                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                img.alt = 'Preview';
                img.className = 'preview-image';
                
                // Adicionar botão de remover
                const removeBtn = document.createElement('button');
                removeBtn.type = 'button';
                removeBtn.className = 'btn-remover-foto';
                removeBtn.innerHTML = '&times;';
                removeBtn.addEventListener('click', function() {
                    // Limpar o input de arquivo
                    input.value = '';
                    
                    // Remover preview
                    previewContainer.innerHTML = '';
                    
                    // Mostrar placeholder novamente
                    placeholder.style.display = 'flex';
                });
                
                previewContainer.appendChild(img);
                previewContainer.appendChild(removeBtn);
                
                // Esconder placeholder
                placeholder.style.display = 'none';
            }
        });
    });
    
    // Submissão do formulário
    document.querySelector('.postagem-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aqui seria implementado o envio dos dados para o servidor
        // Para demonstração, apenas exibimos uma mensagem de sucesso
        alert('Publicação criada com sucesso! Você será redirecionado para a página de publicações.');
        
        // Redirecionar para a página de publicações
        window.location.href = 'publicacoes.html';
    });
});