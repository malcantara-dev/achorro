
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

/////-----------------------------------------------------------------------------------------------
////-----------------------------------ESTA LOGADO--------------------------------------------------
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
////--------------------------------------Salvando as Info------------------------------------------
/////-----------------------------------------------------------------------------------------------
function salvandoInfo(){
    if(window.localStorage.getItem("index") == null  )
    {
        localStorage.setItem("index", 0);
    }
    var i =window.localStorage.getItem("index");
    document.querySelector("main #publi").addEventListener("click", function(){
        var nPET = document.querySelector("#nomePET").value;
        var rPET = document.querySelector("#racaPET").value;
        var fPET = document.querySelector("#fotodoPET").value; 
        var dPET = document.querySelector("#dataPET").value; 
        var ldPET = document.querySelector("#localDesaparecido").value; 
        var tPET = document.querySelector("#tipo").value; 
        console.log(nPET);
        console.log(rPET);
        console.log(fPET);
        console.log(dPET);
        console.log(ldPET);
        localStorage.setItem("nomePET"+i,nPET);
        localStorage.setItem("racaPET"+i,rPET);
        localStorage.setItem("fotoPET"+i,fPET);
        localStorage.setItem("dataPET"+i,dPET);
        localStorage.setItem("localPET"+i,ldPET);
        localStorage.setItem("tipoPET"+i,tPET);
        i++;
        console.log(i);
        localStorage.setItem("index", i);
         window.location.href = "index.html";
        
    
    });
}


/////-----------------------------------------------------------------------------------------------
////----------------------------------------PAGE LOAD-----------------------------------------------
/////-----------------------------------------------------------------------------------------------
qndLogado();
salvandoInfo();
menuabre();
footerDinamico();