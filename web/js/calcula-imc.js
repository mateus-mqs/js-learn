var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++){
    var pacientePeso = pacientes[i].querySelector(".info-peso").textContent;
    var pacienteAltura = pacientes[i].querySelector(".info-altura").textContent;
    var imc = calculaImc(pacientePeso, pacienteAltura);
    pacientes[i].querySelector(".info-imc").textContent = imc;
}

function calculaImc(peso, altura){
    return (peso / (altura * altura)).toFixed(2);
}