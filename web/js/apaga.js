var doubleClick = document.querySelector("#tabela-pacientes");

doubleClick.addEventListener("dblclick",function(event){
    event.target.parentNode.remove();
});