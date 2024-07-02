/* 1 - Crie um script que tenha três variáveis:

var nome;
let sobreNome;
const cpf;

nome e cpf devem estar em um escopo global. sobreNome deve estar dentro de uma função. A execução do programa deve imprimir o nome completo na ordem correta (com quebra de linha): Nome Sobrenome CPF. Outra linha com uma mensagem concatenando os valores.

*/

var nome;
const cpf = '123.456.789.00';

function user (){
    nome = 'Marknini';
    let sobrenome = 'Toscano';
    console.log(nome);
    console.log(sobrenome);
    console.log(cpf);
    console.log(`\n Usuário: ${nome} \n Sobrenome: ${sobrenome} \n CPF: ${cpf}`);
}

user();