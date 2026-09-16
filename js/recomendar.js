const imagemHTML = document.getElementById("imagemFilme");
const tituloHTML = document.getElementById("tituloFilme");
const notaHTML = document.getElementById("notaFilme");

const form = document.getElementById("formRecomendar");

form.addEventListener("submit", e => minhaFuncaoValidar(e) );

function minhaFuncaoValidar(evento){
    evento.preventDefault();

    const formTitulo =  document.getElementById("titulo");
    const formNota = document.getElementById("nota");
    const formImagem = document.getElementById("link");
   
    tituloHTML.textContent = formTitulo.value;
    notaHTML.textContent = formNota.value;
    imagemHTML.src = formImagem.value;
}