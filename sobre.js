/////-----------------------------------------------------------------------------------------------
////----------------------------------ABRINDO O WRAPPER---------------------------------------------
/////-----------------------------------------------------------------------------------------------

function menuabre() {
    document.querySelector("#abre-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.add("menu-abre");
    });

    document.querySelector("#fecha-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.remove("menu-abre");
    })
}

/////-----------------------------------------------------------------------------------------------
////-------------------------------------ESTA LOGADO------------------------------------------------
/////-----------------------------------------------------------------------------------------------
function qndLogado(){
    var nomeValido = window.localStorage.getItem("nomeUsuario");
    if( nomeValido != null && nomeValido  != "")
    {
        var name = document.querySelector("#nome");
        name.textContent = `Olá ${nomeValido}`;
        name.href = "index.html";
    }
}



/////-----------------------------------------------------------------------------------------------
////----------------------------------------FOOTER--------------------------------------------------
/////-----------------------------------------------------------------------------------------------
function footerDinamico(){
    var anoAtual = new Date().getFullYear();
    document.querySelector("footer").textContent = `Ⓒ - ${anoAtual} Todos os direitos reservados`;
}

/////-----------------------------------------------------------------------------------------------
////----------------------------------------PAGE LOAD-----------------------------------------------
/////-----------------------------------------------------------------------------------------------
menuabre();
qndLogado();
footerDinamico();