// define a variavel totalGeral
let totalGeral;
// usa a função limpar no inicio do código para tudo estar zerado quando começar o preenchimento do carrinho
limpar();

function adicionar() {
    // PASSO A PASSO DA FUNÇÃO (lógica)

    // 1- recuperar valores: nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    // o split é usado para separar infos em um array, nos parâmetros se informa o que separa as informações e ele devolve o valor da
    // posição pedida (no caso 0)
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    // 2- calcular o preço, o subtutal
    let preco = quantidade * valorUnitario;

    // 3- adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;

    // 4- atualizar valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;

    // vai rodar toda vez que a função for executada zerando o campo de quantidade
    document.getElementById('quantidade').value = '';
};

function limpar() {
    // zerando tudo na função limpar
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
};