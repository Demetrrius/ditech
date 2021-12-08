// Esta função tem como objetivo verificar se o campo buscas está vazio
document.querySelector('#form-busca').onsubmit = function(){
    if(document.querySelector('#q').value == '') {
        document.querySelector('#q').style.background='gray';        
        return false;
    }
}
// Fazendo a associação da função com evento
//document.querySelector('#form-busca').onsubmit = validaBusca;

function limpafocus(limpa) {
    document.getElementById(limpa).style.background = "white";
}

var banners=["img/destaque-home.png","img/destaque-home-2.png"];
var bannerAtual=0;

function trocaBanner() {
    bannerAtual=(bannerAtual +1 ) % 2;
    document.querySelector('#destaque').src=banners[bannerAtual];
}
setInterval(trocaBanner, 4000);

