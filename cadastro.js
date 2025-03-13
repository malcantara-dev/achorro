
/////-----------------------------------------------------------------------------------------------
////----------------------------------ABRINDO O WRAPPER---------------------------------------------
/////-----------------------------------------------------------------------------------------------

function menuabre() {
    document.querySelector("#abre-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.add("menu-abre");
    });

    document.querySelector("#fecha-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.remove("menu-abre");
    });
}

///////---------------------------------------------------------------------------------------------
//////----------------------------------EXIBINDO CADASTRO-------------------------------------------
//////----------------------------------------------------------------------------------------------

function abrecadastro() {
    document.querySelector("main #cadastrarNovo").addEventListener("click", function(){
        document.querySelector("main .cadastro").classList.add("cabre");
        
    })

    document.querySelector("#fimCadastro").addEventListener("click", function(){
        var nomeUser = document.querySelector("#inputNome").value;
        var emailUser = document.querySelector("#inputEmail4").value;
        var senhaUser = document.querySelector("#inputPassword4").value;
        console.log(nomeUser);
        console.log(emailUser);
        console.log(senhaUser);
        document.querySelector("main .cadastro").classList.remove("cabre");
        localStorage.setItem("nomeUsuario",nomeUser);
        localStorage.setItem("emailUsuario",emailUser);
        localStorage.setItem("senhaUsuario",senhaUser);
        window.location.href = "index.html";
    });
}

/////-----------------------------------------------------------------------------------------------
////--------------------------------------ESTA LOGADO-----------------------------------------------
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


////------------------------------------------------------------------------------------------------
////--------------------------------------FAZENDO LOGIN---------------------------------------------
////------------------------------------------------------------------------------------------------

function entrar(){
    document.querySelector("#enviar").addEventListener("click", function(){
        var email1 = document.querySelector("#InputEmail1").value;
        var senha1 = document.querySelector("#InputPassword1").value;
        console.log(email1);
        console.log(senha1);
        if(email1 == emailUsuario && senha1 == senhaUsuario)
        {
            qndLogado();
        }
        window.location.href = "index.html";
    });
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

entrar();
menuabre();
abrecadastro();
footerDinamico();