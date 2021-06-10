// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  // Extraiu o elemento que contém o preço
  const priceElement = product.querySelector('.price span');

  // Extrair o elemento que contém a quantidade
  const qttElement = product.querySelector('.quantity input');

  // Extrair o elemento que contém o subtotal
  const subtotalElement = product.querySelector('.subtotal span');

  // Calcular o subtotal
  const price = priceElement.innerText;
  const quantity = qttElement.value;

  const subtotal = parseFloat(price) * parseInt(quantity);

  // Atualizar o elemento HTML do subtotal com o novo valor
  subtotalElement.innerText = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  // Selecionar todos os elementos com a classe 'product'
  const allProducts = document.getElementsByClassName('product');

  let total = 0;
  // Executar o calculo de subtotal pra cada um desses elementos
  for (let product of allProducts) {
    total += updateSubtotal(product);
  }

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  const totalElement = document.querySelector('#total-value span');

  totalElement.innerText = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const currentRow = target.parentNode.parentNode;
  const tableElement = currentRow.parentNode;

  tableElement.removeChild(currentRow);

  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here

  // Selecionar a <tr> .create-product
  const createProductRow = event.currentTarget.parentNode.parentNode;

  // Selecionar os inputs de nome e preço do novo produto
  const nameInputElement = createProductRow.querySelector('input[type=text]');
  const priceInputElement =
    createProductRow.querySelector('input[type=number]');

  const name = nameInputElement.value;
  const price = priceInputElement.value;

  // Criar o HTML da nova linha da tabela que receberá os valores dos inputs acima
  const newProductRow = `
  <tr class="product">
  <td class="name">
    <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  </tr>
  `;

  // // Cria o elemento do DOM
  // const trElement = document.createElement('tr');
  // trElement.className = 'product';

  // // Configura o elemento do DOM para ter o conteúdo de novo produto criado anteriormente
  // trElement.innerHTML = newProductRow;

  // Seleciona o elemento <tbody> que tem todos os produtos
  const tbodyElement = createProductRow.parentNode.previousElementSibling;

  // Adiciona o elemento do novo produto à <tbody>
  // tbodyElement.appendChild(trElement);
  tbodyElement.innerHTML += newProductRow;

  // Adicionar o event listener no botão remove para o produto recém criado
  addRemoveListeners();
}

function addRemoveListeners() {
  // Seleciona todos os botões de remover
  const allRemoveButtons = document.querySelectorAll('.action button');

  // Configura cada botão para executar a função removeProduct no clique
  for (let buttonElement of allRemoveButtons) {
    buttonElement.addEventListener('click', removeProduct);
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  addRemoveListeners();

  // Selecionar o botão 'Create' e colocar o listener do evento de clique nele
  const createBtnElement = document.getElementById('create');

  createBtnElement.addEventListener('click', createProduct);
});
