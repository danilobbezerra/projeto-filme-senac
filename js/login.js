
const formLogin = document.getElementById("formLogin");
const emailLogin = document.getElementById("email");
const senhaLogin = document.getElementById("senha");
const mensagemLogin = document.getElementById("mensagemLogin");
const mostrarSenha = document.getElementById("mostrarSenha");

function LimpaEstados(){    
    mensagemLogin.classList.remove(
      "d-none",
      "alert-success",
      "alert-danger"
    );
}

LimpaEstados();


formLogin.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const emailDigitado = emailLogin.value.trim();
  const senhaDigitada = senhaLogin.value.trim();

  if(emailDigitado === "" || senhaDigitada === "")
  {
      mensagemLogin.textContent = "Preencha e-mail e senha.";
      mensagemLogin.classList.add("alert");
      mensagemLogin.classList.add("alert-danger");
      return;
  }

  if (!emailDigitado.includes("@")) {
      mensagemLogin.textContent = "Digite um e-mail válido.";
      mensagemLogin.classList.add("alert");
      mensagemLogin.classList.add("alert-danger");
      return;
  }


const objDadosLogin = {
    email: emailDigitado,
    senha: senhaDigitada
};

$.post(
    "https://webhook.site/12a2c4d3-3980-4080-9f0f-1c10adb1278f",
    objDadosLogin
)
.done(function(data, textStatus, jqXHR) {
  
  //aqui vem a resposta da api com sucesso
  // data = {
  //   id: "nasdasdasdasdasdasdas"
  // };
  
  console.log("SUCESSO", data);
})
.fail(function(jqXHR, textStatus, errorThrown) {

    //aqui vem os erros caso ocorra ao chamar a api
    console.log("ERRO");
    console.log("Status:", textStatus);
    console.log("Erro:", errorThrown);
    console.log("Resposta:", jqXHR.responseText);
});


  // if (emailDigitado === "aluno@cinefront.com" && senhaDigitada === "123456") {
  //   LimpaEstados();
  //   mensagemLogin.textContent = "Login realizado com sucesso!";
  //   mensagemLogin.classList.add("alert");
  //   mensagemLogin.classList.add("alert-success");
    

  // } else {
  //   LimpaEstados();
  //   mensagemLogin.textContent = "E-mail ou senha incorretos.";
  //   mensagemLogin.classList.add("alert");
  //   mensagemLogin.classList.add("alert-danger");
  // }

  console.log("Email digitado:" + emailDigitado)
  console.log("Senha digitada:" + senhaDigitada)
  
});

mostrarSenha.addEventListener("change", function () {
  if (mostrarSenha.checked) {
    senhaLogin.type = "text";
  } else {
    senhaLogin.type = "password";
  }
});


