const nome = document.getElementById("nome");
const email = document.getElementById("email");
const nascimento = document.getElementById("nascimento");
const senha = document.getElementById("senha");
const senhaConfirmacao = document.getElementById("senhaConfirmacao");
const termo = document.getElementById("termo");
const formCadastro = document.getElementById("formCadastro");
const barraSenha = document.getElementById("barraSenha");

// --------------------
// Funções auxiliares
// --------------------
function marcarStatus(campo, valido) {
    campo.classList.remove("is-valid", "is-invalid");
    campo.classList.add(valido ? "is-valid" : "is-invalid");
}

function limpaStatus() {
    [
        nome,
        email,
        nascimento,
        senha,
        senhaConfirmacao,
        termo
    ].forEach(campo => {
        campo.classList.remove("is-valid", "is-invalid");
    });
}

// --------------------
// Validação de idade
// --------------------
function validarIdade(dataNascimento) {
    const nasc = new Date(dataNascimento);
    const hoje = new Date();

    let idade = hoje.getFullYear() - nasc.getFullYear();

    const aniversarioAindaNaoChegou =
        hoje.getMonth() < nasc.getMonth() ||
        (
            hoje.getMonth() === nasc.getMonth() &&
            hoje.getDate() < nasc.getDate()
        );

    if (aniversarioAindaNaoChegou) {
        idade--;
    }

    const valido = idade >= 18 && idade <= 100;

    marcarStatus(nascimento, valido);

    return valido;
}

// --------------------
// Validação de senha
// --------------------
function validarSenha(senhaDigitada) {
    const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/;

    const valido = regex.test(senhaDigitada);

    marcarStatus(senha, valido);

    return valido;
}

// --------------------
// Submit
// --------------------
formCadastro.addEventListener("submit", function (evento) {
    evento.preventDefault();

    limpaStatus();

    let formularioValido = true;

    // Idade
    if (!validarIdade(nascimento.value)) {
        formularioValido = false;
    }

    // Senha
    if (!validarSenha(senha.value)) {
        formularioValido = false;
    }

    // Confirmação de senha
    const senhasIguais =
        senha.value === senhaConfirmacao.value;

    marcarStatus(senhaConfirmacao, senhasIguais);

    if (!senhasIguais) {
        formularioValido = false;
    }

    // Termos
    marcarStatus(termo, termo.checked);

    if (!termo.checked) {
        formularioValido = false;
    }

    if (formularioValido) {
        console.log("Formulário válido!");
        formCadastro.submit();
    }
});



function switchTheme() {
            try {
                const link = document.getElementById('themeStylesheet');
                if (!link) {
                    throw new Error("Stylesheet link not found.");
                }

                // Toggle between two CSS files
                if (link.getAttribute('href') === 'light-theme.css') {
                    link.setAttribute('href', 'dark-theme.css');
                } else {
                    link.setAttribute('href', 'light-theme.css');
                }
            } catch (error) {
                console.error("Error switching theme:", error.message);
            }
        }