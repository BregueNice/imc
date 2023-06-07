let peso = document.querySelector('#peso')
peso.focus()
let altura = document.querySelector('#altura')
let resultado = document.querySelector('.resultado')

function calcular() {
    let cal = parseFloat(peso.value / (altura.value * altura.value)).toFixed(1)
    resultado.innerHTML = `<strong>Seu IMC é:</strong><br> ${cal}`
    document.getElementById('tabela').style.display = "flex";

    if (cal <= 18.5) {
        toggle('abaixo');
        toggle('abaixo2');
    }
    if (cal > 18.5 && cal < 24.9) {
        toggle('normal');
        toggle('normal2');
    }
    if (cal >= 25 && cal <=29.9){
        toggle('excesso');
        toggle('excesso2');
    }
    if (cal >=30 && cal <34.9){
        toggle('obs1');
        toggle('obs12');
    }
    if (cal >=35 && cal <= 39.9){
        toggle('obs2');
        toggle('obs22');
    }
    if(cal > 40.0){
        toggle('obs3');
        toggle('obs32');
    }
}
function mostrar() {
    document.getElementById('tabela').style.display = "flex";
}

function fechar() {
    document.getElementById('tabela').style.display = "none";
}

function toggle(id) {
    let atv = document.getElementsByClassName('ativa');
    if (atv.length > 1 ) {
        atv[0].classList.remove('ativa');
        atv[0].classList.remove('ativa');
    }
    document.getElementById(id).classList.add("ativa");
    document.getElementById(id).classList.add("ativa");
}