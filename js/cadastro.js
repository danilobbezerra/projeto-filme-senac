//const nome = document.getElementById("nome");
const nome = $("#nome");

//const email = document.getElementById("email");

const email = $("email");

//const nascimento = document.getElementById("nascimento");
const nascimento = $("nascimento");

//const senha = document.getElementById("senha");
const senha = $("senha");

//const senhaConfirmacao = document.getElementById("senhaConfirmacao");
const senhaConfirmacao = $("senhaConfirmacao");

//const generos = document.getElementById("generos");
const generos = $("generos");

//const comoConheceu = document.getElementById("como-conheceu");
const comoConheceu = $("como-conheceu");

//const termo = document.getElementById("termo");
const termo = $("termo");

const formCadastro = document.getElementById("formCadastro");

formCadastro.addEventListener("submit", function (evento) {       
  evento.preventDefault();
  limpaStatus();

  validarIdade(nascimento.value);

  //validarSenha(senha.value);

  if(termo.checked === false){
      termo.classList.add("is-invalid");
      return;
  }  

  const objDadosCadastro = {
    nomeCompleto: nome.value,
    email: email.value,
    DataNascimento: nascimento.value,
    Senha: senha.value,
    comoConheceu: comoConheceu.value,
    termo: termo.checked
  }

  $.post("https://webhook.site/4c21d8dd-9294-4eeb-9253-c8d51708e800", objDadosCadastro, function(data) {
    alert("Resposta do servidor: " + data);
  });

    $.delete("https://webhook.site/4c21d8dd-9294-4eeb-9253-c8d51708e800", objDadosCadastro, function(data) {
        alert("Resposta do servidor: " + data);
    });

    $.put("https://webhook.site/4c21d8dd-9294-4eeb-9253-c8d51708e800", objDadosCadastro, function(data) {
        alert("Resposta do servidor: " + data);
    });    
 
 });


function validarIdade(dataNascimento) {
    const [ano, mes, dia] = dataNascimento.split('-').map(Number);
    const nasc = new Date(ano, mes - 1, dia);
    const hoje = new Date();

    let idade = hoje.getFullYear() - nasc.getFullYear();
    const resultadoIdade = idade > 18 && idade < 100;

    if(!resultadoIdade) {
        nascimento.class("is-invalid");
    }else{
      nascimento.class("is-valid");
    }

}

function validarSenha(senhaDigita) {
    const senhaMin = 8;
    const senhaMax = 15;

    if (senhaDigita.length < senhaMin || senhaDigita.length > senhaMax) {
       senha.classList.add("is-invalid");
       senhaConfirmacao.classList.add("is-invalid");
    }else{
      senha.classList.add("is-valid");
      senhaConfirmacao.classList.add("is-valid");      
    }

    if(senha.value !== senhaConfirmacao.value){
       senha.classList.add("is-invalid");
       senhaConfirmacao.classList.add("is-invalid");
     }else{
      senha.classList.add("is-valid");
      senhaConfirmacao.classList.add("is-valid");
     }
}

$("#senha").on("input", function () {
    const tamanho = $(this).val().length;

    $("#barraSenha").removeClass(
        "bg-danger bg-warning bg-success"
    );

    if (tamanho === 0) {
        $("#barraSenha")
            .css("width", "0%")
            .addClass("bg-danger");
    } else if (tamanho < 6) {
        $("#barraSenha")
            .css("width", "33%")
            .addClass("bg-danger");
    } else if (tamanho < 10) {
        $("#barraSenha")
            .css("width", "66%")
            .addClass("bg-warning");
    } else {
        $("#barraSenha")
            .css("width", "100%")
            .addClass("bg-success");
    }
});


function limpaStatus(){

    nome.removeClass("is-invalid is-valid");
    // nome.classList.remove(
    //   "is-invalid",
    //   "is-valid"
    // );

    email.removeClass("is-invalid is-valid");
    // email.classList.remove(
    //   "is-invalid",
    //   "is-valid"
    // );
    
    nascimento.removeClass("is-invalid is-valid");
    // nascimento.classList.remove(
    //   "is-invalid",
    //   "is-valid"
    // );

    senha.removeClass("is-invalid is-valid");
    // senha.classList.remove(
    //   "is-invalid",
    //   "is-valid"
    // );   

    senhaConfirmacao.removeClass("is-invalid is-valid");
    // senhaConfirmacao.classList.remove(
    //   "is-invalid",
    //   "is-valid"
    // );   

    termo.removeClass("is-invalid is-valid");
    // termo.classList.remove(
    //   "is-invalid",
    //   "is-valid"
    // );     
}