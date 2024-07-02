/*  Crie um script que simule um sistema de registro de produtos. O script deve ter três variáveis:

var produto;
let categoria;
const codigoProduto;

As variáveis produto e codigoProduto devem estar em um escopo global. A variável categoria deve estar dentro de uma função. A execução do programa deve imprimir os detalhes do produto na ordem correta (com quebra de linha): Produto Categoria Código do Produto. */


// testando o primeiro tipo
var produto;
const codigoProduto = 0;

const print = () => {
    let categoria = 'Perecível';
    produto = 'Arroz';
    console.log(`Registro de Alimentos:\n Produto: ${produto}\n Categoria: ${categoria}\n Código: ${codigoProduto}`);
}


// outra forma de fazer
let codigoProduto1 = 0;


function registro (produto, categoria)  {
    produto = produto;
    categoria = categoria;
    codigoProduto1 += 1;
    console.log(`\n Produto: ${produto}\n Categoria: ${categoria}\n Código: ${codigoProduto1}`);
}


// a ultima em que pensei
const contador = {codigoProduto: 0};

function registro1 (produto, categoria)  {
    produto = produto;
    categoria = categoria;
    contador.codigoProduto += 1;
    console.log(`\n Produto: ${produto}\n Categoria: ${categoria}\n Código: ${contador.codigoProduto}`);
}


print();

registro('Feijão', 'Não Perecível');
registro('Macarrão', 'Não Perecível');
registro('Sal', 'Não Perecível');

registro1('Feijão Preto', 'Não Perecível');
registro1('Macarrão Integral', 'Não Perecível');
registro1('Arroz Integral', 'Não Perecível');