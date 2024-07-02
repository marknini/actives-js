/* Crie um script que simule o registro de informações de um aluno. O script deve ter três variáveis:

var nomeAluno;
let curso;
const matricula;

As variáveis nomeAluno e matricula devem estar em um escopo global.
A variável curso deve estar dentro de uma função. 
A função deve retornar uma string que concatene todas as informações do aluno em uma única linha 
utilizando template literals ${var}. */

var nomeAluno;
let curso;
let matricula = 123;  // Alterando de const para let para permitir incrementação

function registrandoAluno(nome, cursoAtual) {
    nomeAluno = nome;
    curso = cursoAtual;

    const matriculaAtual = matricula++;  // Usando matricula++ para incrementar a matrícula

    return `Nome do aluno: ${nomeAluno}, Curso: ${curso}, Matrícula: ${matriculaAtual}`;
}

let primeiro = registrandoAluno('João', 'Engenharia de Software');
let segundo = registrandoAluno('Maria', 'Análise e Desenvolvimento Web');

console.log(primeiro);
console.log(segundo);  
