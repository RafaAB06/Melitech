const clickSound = new Audio('./Sound/UIButton_OnClick.mp3');

const inicio = document.getElementById("inicio");
const sobre = document.getElementById("sobre");
const riw = document.getElementById("riw");
const parts = document.getElementById("parts");

const divPagina = document.getElementById('page_holder');

const buttons = [inicio, sobre, riw, parts];

let currentPage = 0;

const buttonClass = 'guia';
const selectedButtonClass = 'guia_selected';

mudarPagina(0);
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        mudarPagina(i);
        clickSound.pause();
        clickSound.currentTime = 0.05;
        clickSound.volume = 0.025;
        clickSound.play();
    });
}

function mudarPagina(index){
    currentPage = index;

    ajustarBotoes(index);
    adicionarPagina(index);
}

function ajustarBotoes(a) {
    for (let i = 0; i < buttons.length; i++) {
        if(i==a){
            buttons[i].className = selectedButtonClass;
        }else{
            buttons[i].className = buttonClass;
        }
    }
}

function adicionarPagina(index) {
    while (divPagina.firstChild) {
        divPagina.removeChild(divPagina.firstChild);
    }
    switch (index) {
        case 0:
            pagina_1();
            break;
        case 1:
            divPagina.innerHTML = pagina_2();
            break;
        case 2:
            divPagina.innerHTML = pagina_3();
            break;

        case 3:
            divPagina.innerHTML = pagina_4();
            break;
    
        default:
            break;
    }
}


function pagina_1(){
    const divCabecalho = document.createElement("div");
    divCabecalho.classList.add("head");
    const imagem = document.createElement("img");
    imagem.src = "./Images/MelitechLogotipo.png";
    imagem.alt = "Melitech";
    imagem.classList.add("melitechLogo");
    divCabecalho.appendChild(imagem);

    const divTextoInicio = document.createElement("div");
    divTextoInicio.classList.add("div_texto_inicio");
    const paragrafo = document.createElement("p");
    paragrafo.classList.add("texto_inicio");
    paragrafo.textContent = "Um projeto desenvolvido pelo Instituto Federal de Ciência, Tecnologia e Educação de Santa Catarina";
    divTextoInicio.appendChild(paragrafo);

    divPagina.appendChild(divCabecalho);
    divPagina.appendChild(divTextoInicio);
}

function pagina_2() {
    const conteudo = `
        <div class="div_titulo_sobre">
            O que é a MeliTech?
        </div>
        <div class="div_texto_sobre">
            <p class="texto_sobre">
                A MeliTech surgiu através do projeto de extensão desenvolvido pelo IFSC - Câmpus São Miguel do Oeste
                "Desenvolvimento de meliponário via modelagem 3D para escolas do município de São Miguel do Oeste" 
                no contexto  das Oficinas 4.0. As Oficinas 4.0 são um conjunto de editais promovidos pelo Governo Federal 
                que consistiam em atividades de capacitação tecnológica e pesquisa aplicada direcionadas a estudantes da
                Rede Federal de Ensino.
            </p>
        </div>
        <div class="texto_2">
            <div class="div_texto_sobre_left">
                <p class="texto_sobre">
                    O projeto buscava estudar e criar soluções para a criação de abelhas sem ferrão, como forma de 
                    impulsionar o desenvolvimento socioeconômico local. Desde o aprimoramente através de modelagem e 
                    impressão 3D até seminários educativos nas escolas locais e estudo das espécies de abelhas nativas 
                    presentes no meliponários do Câmpus. A duração prevista era 10 meses, com trabalhos iniciados em fevereiro 
                    de 2023 e finalizados em dezembro do mesmo ano.
                </p>
            </div>
            <img src="./Images/Meliponario.jpg" alt="Meliponário IFSC" class="foto_meliponario">
        </div>
        <div class="texto_2">
            <img src="./Images/arudino_topzera.jpg" alt="Meliponário IFSC" class="foto_arudino_KKKKK">
            <div class="div_texto_sobre_right">
                <p class="texto_sobre">
                    Além da prototipagem em 3D, houveram oficinas gestão de projetos, atividades de pesquisa,
                    programação em C++ e Python e robótica. Isso permitiu aos alunos 
                    trabalharem em grupo na busca por soluções tecnológicas na área de criação de abelhas sem ferrão.
                </p>
            </div>
        </div>
        <div class="div_texto_sobre">
            <p class="texto_sobre">
                No nome Melitech, Meli faz refência à palavra Melipona, gênero comum de abelhas nativas, e Tech,
                referência à tecnologia. Um dos principais resultados foi a criação do protótipo do chamado Meliponitor, o que levou a equipe 
                à Rio Innovation Week 2023.
            </p>
        </div>
        <div class = "head">
        <img src="./Images/riw.jpg" alt="RIW" class="melitechLogo">
        </div>
    `;

    return conteudo;
}

function pagina_3() {
    let elementHtml = '';
    for (let i = 0; i < images.length; i++) {
        elementHtml += `
        <div class="perfil">
            Cri cri cri mó trampo termina isso ta nem formatado o texto mas ta indo
        </div>
        `;
    }

    elementHtml += '<div>Porque o texto repetiu 6 vezes? aaaaaaagh</div>';
    return elementHtml += '<div>Clica no icone do IFSC ali em cima </div>';
}

const images = [
    './Images/Fotos/kal.webp',
    './Images/Fotos/evandro.webp',
    './Images/Fotos/baron.jpg',
    './Images/Fotos/Rafa_lindo.jpg',
    './Images/Fotos/Cris_chan.jpeg',
    './Images/Fotos/Felp.jpeg',
    './Images/Fotos/esse.jpg',
    './Images/Fotos/cabassinho.webp',
    './Images/Fotos/eu_odeio_fazer_site_aaa.png'
];
const description = [
    'Kal-El Basílio Brito',
    'Evandro Luis da Cunha',
    'Luiz Carlos Baron',
    'Rafael André Brustolin',
    'Cristian Tre Disner',
    'Felipe Gabriel de Oliveria Dartora',
    'Daniel Eduardo Zanol',
    'Leonardo Basso Grzebielucas',
    'Guilherme Morandin',
]

function pagina_4() {
    let elementHtml = '';
    for (let i = 0; i < images.length; i++) {
        elementHtml += `
        <div class="perfil">
            <img src="${images[i]}" alt="foto_participante" class="foto_participante">
            <div class="div_texto_sobre">
                <p class="texto_sobre">
                    ${description[i]}
                </p>
            </div>
        </div>
        `;
    }

   return elementHtml;
}

const goto_ifsc = document.getElementById('goto_ifsc');
goto_ifsc.addEventListener('click', function(){
    window.location.href = "https://www.ifsc.edu.br/web/campus-sao-miguel-do-oeste";
});

