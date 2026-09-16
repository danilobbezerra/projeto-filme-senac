//variaveis
let danilo = "meu nome"
var saddasd = "meu nome 2"


//tipos
const nome = "Maria";
const idade = 20;
const aluno = true;

const idade1 = 20
const idade2 = 20

//console.log(idade1 + idade2)


//funcoes
const resultado = somar(10, 5);

function somar(numero1, numero2){
    return numero1 + numero2;
}

//console.log(resultado)


function darBoasVindas(nome){
    console.log("Olá " + nome);
}

darBoasVindas("Danilo")
darBoasVindas("Maria")
darBoasVindas("José")

//condicionais

const idadeAluno = 17;

function alunoMaiorDeIdade(idade){
    if(idade >= 18){
        console.log("Aluno de " + idade + " anos, Pode entrar");
    }else{
        console.log("Aluno de " + idade + " anos, não pode entrar");
    }
}

alunoMaiorDeIdade(17)
alunoMaiorDeIdade(18)
alunoMaiorDeIdade(19)



//ARRAY
const alunos = ["Maria", "João", "Carlos"];
//                 0       1       2


console.log(alunos[3])


//OBJETO

const alunoObj = {
    nome: "Maria",
    idade: 22,
    curso: "Front-End",
    ativo: true
};


console.log(alunoObj.curso);


const alunoObjDois = {
    nome: "Maria",
    email: "asdsdasd@adasd.com"
};


console.log(alunoObjDois.nome);
console.log(alunoObjDois.email);


//loop
const meusAlunos = ["Maria","João","Carlos"];

meusAlunos.forEach(
    function (aluno){
        console.log("Olá " + aluno);
    }
);

const array1 = ["a", "b", "c"];

array1.forEach((e) => console.log(e));








const nomeLoja = "Tech Store";
let carrinho = [
    { produto: "Mouse", preco: 100 },
    { produto: "Teclado", preco: 200 }
];
function calcularTotal(produtos) {
    let total = 0;
    produtos.forEach(function (produto) {
        total = total + produto.preco;
    });
    return total;
}
const totalCompra = calcularTotal(carrinho);

if (totalCompra >= 300) {
    console.log("Você ganhou frete grátis!");
}

console.log("Total: R$ " + totalCompra);