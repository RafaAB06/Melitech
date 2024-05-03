const clickSound = new Audio('./Sound/UIButton_OnClick.mp3');
clickSound.currentTime = 0.05;

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
        clickSound.volume = 0.05;
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
            const goto_matter = document.getElementById('goto_matter');
            goto_matter.addEventListener('click', function(){
                const a = goto_matter.textContent;
                goto_matter.textContent = "Carregando...";
                clickSound.pause();
                clickSound.currentTime = 0.05;
                clickSound.volume = 0.05;
                clickSound.play();
                setTimeout(() => {  
                    window.open("https://www.ifsc.edu.br/web/noticias/w/-melimonitor-dispositivo-criado-no-campus-sao-miguel-do-oeste-do-ifsc-leva-estudantes-ao-rio-innovation-week", "_blank");
                    goto_matter.textContent = a;
                }, 1000);
            });
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
                    presentes no meliponário do Câmpus. A duração prevista era 10 meses, com trabalhos iniciados em fevereiro 
                    de 2023 e finalizados em dezembro do mesmo ano.
                </p>
            </div>
            <img src="./Images/Meliponario.jpg" alt="Meliponário IFSC" class="foto">
        </div>
        <div class="texto_2">
            <img src="./Images/arudino_topzera.jpg" alt="Meliponário IFSC" class="foto">
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
                Em Melitech, Meli faz refência à palavra Melipona, gênero comum de abelhas nativas, e Tech,
                referência à tecnologia. Um dos principais resultados foi a criação do protótipo do chamado Meliponitor, o que levou a equipe 
                à Rio Innovation Week 2023.
            </p>
        </div>
    `;

    return conteudo;
}

function pagina_3() {
    const elementHtml = `
        <div class = "head">
        <img src="./Images/riw.jpg" alt="RIW" class="melitechLogo">
        </div>
        <div class="background">
            <div class="texto_2">
                <div class="div_left_sem_borda">
                    <p class="texto_sobre">
                        A equipe inscreveu-se formalmente na RIW 2023 como projeto desenvolvido pela Rede Federal de Ensino, 
                        com a ideia de apresentação de um protótipo do produto  
                        entitulado Melimonitor; um dispositivo de monitoramente de caixas de abelhas sem ferrão, 
                        responsável pela coleta e processamnto de dados como temperatura, umidade e fluxo de abelhas.
                    </p>
                </div>
                <img src="./Images/eles_sem_eu.jpg" alt="Meliponário IFSC" class="foto_right_sem_borda">
            </div>
            <div class="texto_2">
                <img src="./Images/riw_eu_bonito.jpg" alt="Meliponário IFSC" class="foto_left_sem_borda">
                <div class="div_right_sem_borda">
                    <p class="texto_sobre">
                        O sistema, 
                        além de apresentar informações num display LCD (cuja principal função era a garantia o funcionamento) ainda 
                        comunicava-se com um aplicativo, mostrando dados em tempo real. A aplicação tinha suporte para 
                        múltiplas caixas de abelhas, o que facilitaria a vida daqueles que criam abelhas nativas em 
                        grande quantidade.
                    </p>
                </div>
            </div>
            <div class="div_texto_sobre_sem_borda">
                <p class="texto_sobre">
                    O IFSC - Câmpus são Miguel do Oeste pôde alocar recursos para pagar viagem e estadia de 5 pessoas,
                    essas que apresentaram o projeto na maio feira de tecnologia da América Latina.
                </p>
            </div>
        </div>
        <div class="gif_holder">
            <img src="./Images/melimonitor.gif" alt="gif_melimonitor" class="gif">
            <p class="texto_legenda">
                Estande na RIW 2023
            </p>
        </div>
        <div class="button_holder">
        <button class="goto_matter" id="goto_matter">Clique aqui e acesse a matéria feita pelo IFSC</button>
        </div>
    `;

    return elementHtml;
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
    'Kal-El Basílio Brito,<br>Docente.',
    'Evandro Luis da Cunha,<br>Docente.',
    'Luiz Carlos Baron,<br>Docente.',
    'Rafael André Brustolin,<br>Discente.',
    'Cristian Tres Disner,<br>Discente.',
    'Felipe Gabriel de Oliveria Dartora,<br>Discente.',
    'Daniel Eduardo Zanol,<br>Discente.',
    'Leonardo Basso Grzebielucas,<br>Discente.',
    'Guilherme Morandin,<br>Discente.',
]

function pagina_4() {
    let elementHtml = '';
    for (let i = 0; i < images.length; i++) {
        elementHtml += `
        <div class="perfil">
            <img src="${images[i]}" alt="foto_participante" class="foto_participante">
            <div class="div_texto_participante">
                <p class="texto_sobre">
                    ${description[i]}
                </p>
            </div>
        </div>
        `;
        if(i != images.length-1){
            elementHtml += '<hr>';
        }
    }

   return elementHtml;
}

const goto_ifsc = document.getElementById('goto_ifsc');
goto_ifsc.addEventListener('click', function(){
    window.open("https://www.ifsc.edu.br/web/campus-sao-miguel-do-oeste", "_blank");
});



