document.querySelector('.file-input').addEventListener('change', function(e) {
    const fileName = e.target.files[0] ? e.target.files[0].name : 'Nenhum arquivo selecionado';
    document.querySelector('.file-name').textContent = fileName;
});

document.querySelector('.file-button').addEventListener('click', function() {
    document.querySelector('.file-input').click();
});