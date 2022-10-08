let titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista "
let botaoAdicionar = document.querySelector('#adicionar-paciente');
let pacientes = document.querySelectorAll('.paciente');


for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];

    let peso = paciente.querySelector('.info-peso').textContent;
    let altura = paciente.querySelector('.info-altura').textContent;
    let gordura = paciente.querySelector('.info-gordura').textContent;
    let imc = paciente.querySelector('.info-imc');
    let isPeso = validaPeso(peso);
    let isAltura = validaAltura(altura);

    if (isPeso === false) {
        imc.textContent = 'Peso invalido';
        isPeso = false;
        paciente.classList.add('paciente-invalido')
    }

    if (altura <= 0.00 || altura >= 3.00) {
        imc.textContent = 'Altura invalida';
        isAltura = false
        paciente.classList.add('paciente-invalido')
    }

    if (isPeso && isAltura) {
        imc.textContent = calculaImc(peso,altura)
    }
}

function calculaImc(peso,altura){
    let imc = 0;
    imc = (peso / Math.pow(altura,2)).toFixed(2);
    return imc;
}

function validaNome(nome){
    if (nome === ''){
        return false;
    }else{
        return true;
    }
}
function validaPeso(peso){
    if (isNaN(peso) || peso <= 0 || peso >= 600){
        return false;
    }else{
        return true;
    }
}

function validaAltura(altura){
    if (isNaN(altura) || altura <= 0.00 || altura >= 3.00 || altura === null){
        return false;
    }else{
        return true;
    }
}

function validaGordura(gordura){
    if (isNaN(gordura) || gordura <= 0.00 || gordura >= 100){
        return false;
    }else{
        return true;
    }
}