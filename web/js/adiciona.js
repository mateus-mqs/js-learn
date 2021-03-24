var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){ 
    event.preventDefault(); 
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPaciente(form);
    var erros = validaPaciente(paciente);
    if (erros.length > 0){
        mensagemErro(erros);
        return;
    }
    addPaciente(paciente);
    form.reset();
    var mensagensErro = document.querySelector("#mensagem-erro");
    mensagensErro.innerHTML = "";
});

function validaPaciente(paciente){
    var erros = []; 

    if (paciente.nome.length == 0) erros.push("O nome não pode ser em branco");
    if (paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco");
    if (paciente.peso.length == 0) erros.push("O peso não pode ser em branco");
    if (paciente.altura.length == 0) erros.push("A altura não pode ser em branco");
    if (paciente.peso > 1000 || paciente.peso < 0) erros.push("Peso é inválido");
    if (paciente.altura > 3.00 || paciente.peso < 0) erros.push("Altura é inválida");

    return erros;
}

function obtemPaciente(form){
    var paciente = { 
        nome: form.nome.value, 
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function criaLinha(paciente){
    var pacienteTr = document.createElement("tr"); 
    pacienteTr.classList.add("paciente"); 

    pacienteTr.appendChild(td(paciente.nome, "info-nome")); 
    pacienteTr.appendChild(td(paciente.peso, "info-peso"));
    pacienteTr.appendChild(td(paciente.altura, "info-altura"));
    pacienteTr.appendChild(td(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(td(paciente.imc, "info-imc"));

    return pacienteTr;
}

function td(dado, classe){
    var cel = document.createElement("td"); 
    cel.classList.add(classe); 
    cel.textContent = dado; 
    return cel;
}

function addPaciente(paciente){
    var linha = criaLinha(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(linha);
}

function mensagemErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = ""; 
    erros.forEach(function(erro) { 
        var li = document.createElement("li"); 
        li.textContent = erro; 
        ul.appendChild(li);
    });
}