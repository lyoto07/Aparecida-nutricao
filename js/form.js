let ul = document.querySelector('#mensagens-erro');
botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault();

    let form = document.querySelector('#form-adiciona');
    var paciente = obtemPacienteDoForm(form);

    let erros = validaPaciente(paciente);
    if (erros.length > 0) {
        ExibemensagemDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    let mensagensErro = document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML='';
})

function adicionaPacienteNaTabela(paciente){
    let pacienteTr = criaTr(paciente);
    let tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}
function obtemPacienteDoForm(form) {
    let paciente = {
        nome: form.nome.value,
        peso: parseInt(form.peso.value),
        altura: parseInt(form.altura.value),
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function criaTr(paciente) {
    //cria um elemento td no html e armazena ele em uma variavel
    let pacienteTr = document.createElement('tr');
    //cria uma classe para o td
    pacienteTr.classList.add('paciente');

    //passa para a função criaTd o nome da classe e o dado do paciente e coloca como filho de pacienteTr
    pacienteTr.appendChild(criaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(criaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(criaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(criaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(criaTd(paciente.imc, 'info-imc'));

    return pacienteTr;

}

function criaTd(dado, classe) {
    //cria um elemento td no html e armazena ele em uma variavel
    let td = document.createElement('td');
    //insere um valor no td vindo de dado
    td.textContent = dado;
    //cria uma classe para o td
    td.classList.add(classe);

    return td;

}

function validaPaciente(paciente) {
    let erros = [];
    if (!validaNome(paciente.nome)) {
        erros.push('Nome invalido!');
    }

    if (!validaPeso(paciente.peso)) {
        erros.push('Peso invalido!');
    }

    if (!validaAltura(paciente.altura)) {
        erros.push('Altura Invalida!');
    }

    if (!validaGordura(paciente.gordura)) {
        erros.push('gordura Invalida!');
    }

    return erros;
}

function ExibemensagemDeErro(erros) {
    ul.innerHTML = '';

    erros.forEach(function (erro) {
        let li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}