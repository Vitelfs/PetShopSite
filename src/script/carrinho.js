

function buscarEndereco() {
    var cep = document.getElementById('cepInput').value;
    var url = `https://viacep.com.br/ws/${cep}/json/`;
    var map_img = document.getElementById('map');
    var cidade_nome;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if(data.erro) {
            document.getElementById('endereco').innerText = "CEP não encontrado.";
        } else {
            var endereco = `CEP: ${data.cep}, ${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}`;
            document.getElementById('endereco').innerText = endereco;
            map_img.style.display = 'block';
            map_img.addEventListener('click', function() {
                redirect_map(document.getElementById('cepInput').value);
            });
        }
    })
    .catch(error => console.error('Erro:', error));
}




function displayCart() {

  const cart = JSON.parse(localStorage.getItem('cart'));
  const cartList = document.getElementById('cart');
  const total_price = document.getElementById('total-price-nd');
  const discount = document.getElementById('discount');
  const total_final = document.getElementById('total-price-wd');
  var quantity,prod_price,total_value = 0,discount_value = 0;

  cartList.innerHTML = '';
  if (cart && cart.length > 0) {
    cart.forEach(item => {
      let itemExists = false;
      for (let i = 0; i < cartList.children.length; i++) {
          let existingItem = cartList.children[i];
          let existingItemName = existingItem.querySelector('p').textContent.trim();
          if (existingItemName === item.name) {
              itemExists = true;
              break;
          }
      }
      if (itemExists) {
          return; 
      }
      const cartItem = document.createElement('li');

      const itemImage = document.createElement('img');
      itemImage.src = item.image;
      itemImage.alt = item.name;
      cartItem.appendChild(itemImage);

      const itemName = document.createElement('p');
      itemName.textContent = item.name;
      cartItem.appendChild(itemName);

      const itemPrice = document.createElement('p');
      itemPrice.setAttribute('id','item_price')
      itemPrice.textContent = item.price;

      let inputElement = document.createElement('input'); 
      inputElement.setAttribute('type', 'number');  
      inputElement.setAttribute('id', 'quantidade');
      inputElement.setAttribute('name', 'quantidade');
      inputElement.setAttribute('class', 'quantity-input'); 
      inputElement.setAttribute('min', '0');
      inputElement.setAttribute('max', '100');
      inputElement.setAttribute('value', '1');

      inputElement.addEventListener('change', function() {

        quantity = parseInt(inputElement.value); 

        if(quantity == 0){
          removeItem(event);
        }
        prod_price = parseFloat(item.price.replace('R$', '').replace(',', '.')) * quantity;
        itemPrice.textContent = 'R$' + prod_price.toFixed(2);
        total_value = calculateTotal(cartList);
        total_price.textContent = 'R$' + total_value.toFixed(2);
        total_final.textContent = 'R$' + total_value.toFixed(2);
      });
     
      cartItem.appendChild(inputElement);
      cartItem.appendChild(itemPrice);
      cartList.appendChild(cartItem);
      total_value = calculateTotal(cartList);
      total_price.textContent = 'R$' + total_value.toFixed(2); 
      total_final.textContent = 'R$' + total_value.toFixed(2);
    });
  } else {
    cartList.innerHTML = '<p style="font-size: 16px; color: #f47e81; padding: 5px; text-decoration: underline;">Carrinho vazio</p>';
  }
}

function calculateTotal(cartList) {
  let total = 0;
  cartList.querySelectorAll('li').forEach(cartItem => {
    let price = cartItem.querySelector('p:nth-of-type(2)').textContent;
    price = parseFloat(price.replace('R$', '').replace(',', '.'));
    total = total + price;
  });
  return total;
}
function removeItem(event) {
  const listItem = event.target.closest('li'); 
  const itemName = listItem.querySelector('p').textContent.trim(); 
  let updatedCart = JSON.parse(localStorage.getItem('cart'));
  updatedCart = updatedCart.filter(item => item.name !== itemName); 
  localStorage.setItem('cart', JSON.stringify(updatedCart)); 
  listItem.remove(); 
}

window.onload = displayCart;


