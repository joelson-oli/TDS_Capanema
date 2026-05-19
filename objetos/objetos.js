// Sintaxe de um objeto {}
const aluno = {
    nome: "Joelson",
    idade: 19,
    curso: "Técnico em desenvolvimeto de Sistema"
}

console.log(aluno);
console.log(aluno.nome);
console.log(aluno.idade);

aluno.matrícula = "2351465" // Adiciona uma nova propriedade 
aluno.idade = 15; // Atualizar caso existir

delete aluno.curso