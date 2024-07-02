var produto;
const codigoProduto = { atual: 0 }; // Usando um objeto para permitir incremento

function registrarProduto(prod, categ) {
    produto = prod;
    let categoria = categ;
    codigoProduto.atual += 1; // Incrementando o código do produto

    return `Produto: ${produto}\nCategoria: ${categoria}\nCódigo: ${codigoProduto.atual}`;
}

function imprimirProduto(produtoDetalhes) {
    console.log(`Registro de Produtos:\n${produtoDetalhes}`);
}

const produto1 = registrarProduto('Arroz', 'Não Perecível');
const produto2 = registrarProduto('Feijão', 'Não Perecível');
const produto3 = registrarProduto('Macarrão', 'Não Perecível');

imprimirProduto(produto1);
imprimirProduto(produto2);
imprimirProduto(produto3);
