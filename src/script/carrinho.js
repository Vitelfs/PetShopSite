function buscarEndereco() {
    var cep = document.getElementById('cepInput').value;
    var url = `https://viacep.com.br/ws/${cep}/json/`;
    var map_img = document.getElementById('map');
    
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

let quantidade = document.getElementById('quantidade');
let quantidade_value = 1;
let prod_price_value = 3.60;
let discount_value = 0;
let prod_price = document.getElementById('product-price');
let discount = document.getElementById('discount');
let prod_price_bd = document.getElementById('total-price-nd');
let prod_price_wd = document.getElementById('total-price-wd');


prod_price.innerHTML = prod_price_value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
discount.innerHTML = discount_value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
prod_price_bd.innerHTML = (prod_price_value*quantidade_value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
prod_price_wd.innerHTML = ((prod_price_value*quantidade_value)-discount_value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
quantidade.innerText = quantidade_value;


function atualizarQuantidade() {
    if(quantidade_value > 5){
        discount_value = (prod_price_value*quantidade_value)*0.10;
    }
    else{
        discount_value = 0;
    }
    prod_price.innerHTML = (prod_price_value * quantidade_value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    prod_price_bd.innerHTML = (prod_price_value*quantidade_value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});;
    discount.innerHTML = discount_value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    prod_price_wd.innerHTML = ((prod_price_value*quantidade_value)-discount_value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});;
    quantidade.innerText = quantidade_value.toString();
}

function addItem() {
    quantidade_value++;
    atualizarQuantidade();
}

function removeItem() {
    if (quantidade_value > 0) {
        quantidade_value--;
        atualizarQuantidade();
    } else {
        alert('A quantidade não pode ser inferior a 0');
    }
}
