function adicionar() {
    // PASSO A PASSO DA FUNÇÃO (lógica)

    // 1- recuperar valores: nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    // o split é usado para separar infos em um array, nos parâmetros se informa o que separa as informações e ele devolve o valor da
    // posição pedida (no caso 0)
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');

    let preco = quantidade.value * valorUnitario;

    // 2- calcular o preço, o subtutal
    // 3- adicionar no carrinho
    // 4- atualizar valor total
};

function limpar() {

};