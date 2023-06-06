let peso = document.querySelector('#peso')
peso.focus()
let altura = document.querySelector('#altura')
let resultado = document.querySelector('.resultado')

function calcular() {
    let cal = parseFloat(peso.value / (altura.value * altura.value)).toFixed(1)
    resultado.innerHTML = `<strong>Seu IMC é:</strong><br> ${cal}`
    document.getElementById('tabela').style.display = "flex";

    if (cal <= 18.5) {
        document.getElementById('abaixo').classList.add("ativa");
        document.getElementById('abaixo2').classList.add("ativa");
        
    }
    if (cal > 18.5 && cal < 24.9) {
        document.getElementById('normal').classList.add("ativa");
        document.getElementById('normal2').classList.add("ativa");
    }
    if (cal >= 25 && cal <=29.9){
        document.getElementById('excesso').classList.add("ativa");
        document.getElementById('excesso2').classList.add("ativa");
    }
    if (cal >=30 && cal <34.9){
        document.getElementById('obs1').classList.add("ativa");
        document.getElementById('obs12').classList.add("ativa");
    }
    if (cal >=35 && cal <= 39.9){
        document.getElementById('obs2').classList.add("ativa");
        document.getElementById('obs22').classList.add("ativa");
    }
    if(cal > 40.0){
        document.getElementById('obs3').classList.add("ativa");
        document.getElementById('obs32').classList.add("ativa");
    }
}
function mostrar() {
    document.getElementById('tabela').style.display = "flex";
}

function fechar() {
    document.getElementById('tabela').style.display = "none";
}