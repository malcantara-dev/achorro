

const perdidos = [
    {
        nome: "Totó",
        tipo: "Cachorro",
        regiao: "Largo do Divino",
        src: "perdido1.jpeg",
        raca: "Golden Retriever",
        data: "28/10/2023"
    },

    {
        nome: "Marco",
        tipo: "Gato",
        regiao: "Campolim",
        src: "perdido2.jpeg",
        raca: "Persa",
        data: "28/10/2023"
    },

    {
        nome: "Lily",
        tipo: "Cachorro",
        regiao: "Jardim Santa Rosália",
        src: "perdido3.jpeg",
        raca: "Pinscher",
        data: "28/10/2023"
    },

    {
        nome: "Mel",
        tipo: "Cachorro",
        regiao: "Mangal",
        src: "perdido4.jpeg",
        raca: "Maltês",
        data: "28/10/2023"
    },

    {
        nome: "Marvin",
        tipo: "Gato",
        regiao: "Centro",
        src: "perdido5.jpeg",
        raca: "Vira-lata Laranja",
        data: "28/10/2023"
    },

    {
        nome: " Bolinha",
        tipo: "Cachorro",
        regiao: "Jardim Europa",
        src: "perdido6.jpeg",
        raca: "Vira-lata Caramelo",
        data: "28/10/2023"
    },
];
const imgRec = [
    {
        src: "Img1.jpeg",
        alt: "Imagem De recepção"
    },
    {
        src: "Img2.jpeg",
        alt: "Imagem de Explicação"
    },
    {
        src: "Img3.jpeg",
        alt: "Imagem pedindo auxílio"
    }
];


/////-----------------------------------------------------------------------------------------------
////------------------------------CRIANDO AS IMGS PRINCIPAIS----------------------------------------
/////-----------------------------------------------------------------------------------------------

function galeria(){
    var imgPrinc = document.querySelector("#img-inicio > img");
    var opImg = document.querySelector("#img-inicio #op-img");
    
    imgPrinc.src = imgRec[0].src;
    imgPrinc.alt = imgRec[0].alt;
    
    imgRec.forEach(function(imagem, index){
        var op = document.createElement("img");
        op.src = imagem.src;
        op.alt = imagem.alt;
        op.dataset.arrayIndex = index;
        op.dataset.selected = index === 0 ? true : false;
        
        op.addEventListener("click", function(e){
            var opSelec = e.target.dataset.arrayIndex;
            var imgSelec = imgRec[opSelec];
            imgPrinc.src = imgSelec.src;
            imgPrinc.alt = imgSelec.alt;
            opImg.querySelectorAll("img").forEach(function(img){
                img.dataset.selected = false;
            });
            e.target.dataset.selected = true;
        });
        
        opImg.appendChild(op);
    });
}



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
////-----------------------------------ESTA LOGADO--------------------------------------------------
/////-----------------------------------------------------------------------------------------------
function qndLogado(){
    var nomeValido = window.localStorage.getItem("nomeUsuario");
    if( nomeValido != null && nomeValido  != "")
    {
        var name = document.querySelector("#nome");
        name.textContent = `Olá ${nomeValido}`;
        name.removeAttribute("href");
    }
}
/////-----------------------------------------------------------------------------------------------
////---------------------------------CRIANDO OS PERDIDOS--------------------------------------------
/////-----------------------------------------------------------------------------------------------

function criandoPerdidos (perdido){
    var secPerdidos = document.querySelector(".catalogo");
    secPerdidos.textContent = "";

    perdido.forEach(function (amigo, index){
        var secAmigo = document.createElement("div");
        secAmigo.classList.add("oAmiguin");

        var foto = document.createElement("img");
        foto.src = amigo.src;
        foto.alt = "Foto Indisponível";

        var desc = document.createElement("div");
        desc.classList.add("descricao");
        
        var nome = document.createElement("h3");
        nome.classList.add("nomeP");
        nome.textContent = amigo.nome;

        var tipo = document.createElement("p");
        tipo.classList.add("tipo");
        tipo.textContent = amigo.tipo;

        var data = document.createElement("p");
        data.classList.add("data");
        data.textContent = `Data: ${amigo.data}`;

        var raca = document.createElement("p");
        raca.classList.add("raca");
        raca.textContent = "Raça: " + amigo.raca;

        var local = document.createElement("p");
        local.classList.add("Local");
        local.textContent = "Local: " + amigo.regiao;

        desc.append(nome);
        desc.append(tipo);
        desc.append(data);
        desc.append(raca);
        desc.append(local);

        secAmigo.append(foto);
        secAmigo.append(desc);

        secPerdidos.append(secAmigo);
    }
    );
}

function mostraPerdidos() {
    var cachorros = perdidos.filter( item => item.tipo === "Cachorro");

    var gatos = perdidos.filter( item => item.tipo === "Gato");

    criandoPerdidos(perdidos);
    document.querySelector(".filtro label[for= Todos] span.qntd").textContent = perdidos.length;
    document.querySelector(".filtro label[for= Gatos] span.qntd").textContent = gatos.length;
    document.querySelector(".filtro label[for= Cachorros] span.qntd").textContent = cachorros.length;

    var filtroSelec = document.querySelector(".filtro");

    filtroSelec.addEventListener("click", function(e){
        if(e.target.id === "Todos")
            criandoPerdidos(perdidos);
        else if(e.target.id === "Gatos")
            criandoPerdidos(gatos);
        else if( e.target.id === "Cachorros")
            criandoPerdidos(cachorros);
    });
}


///------------------------------------------------------------------------------------------------
///------------------------------ADICIONANDO NOVOS PERDIDOS----------------------------------------
///------------------------------------------------------------------------------------------------


function novosPerdidos(){
    
    var i = window.localStorage.getItem("index")-1;
   var novoNome = window.localStorage.getItem('nomePET'+i);
   var novoRaca =window.localStorage.getItem('racaPET'+i);
   var novoData = window.localStorage.getItem('dataPET'+i);
   if(novoData != null && novoData != ""){
       var dia = novoData.slice(8);
       var mes = novoData.slice(5, 7);
       var ano = novoData.slice(0, 4);
    }
    var novoTipo = window.localStorage.getItem('tipoPET'+i);
    var novoFoto = window.localStorage.getItem('fotoPET'+i); 
    var novoRegiao = window.localStorage.getItem('localPET'+i);
    var novoPerdido =  {nome: novoNome, tipo: novoTipo, regiao: novoRegiao, src: novoFoto, raca: novoRaca, data: `${dia}/${mes}/${ano}`};
    if(novoData != null && novoData != "")
    {   
       
        perdidos.push(novoPerdido);
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
novosPerdidos();
galeria();
mostraPerdidos();
footerDinamico();
qndLogado();

