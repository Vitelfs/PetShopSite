let count = 1;

document.getElementById('radio1').checked = true;


setInterval (function(){
    nextImage();
},5000);

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("content").classList.add("content-open");
    document.getElementById("video-grid").classList.add("video-grid-open");
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("content").classList.remove("content-open");
    document.getElementById("video-grid").classList.remove("video-grid-open");
}

function addCart(event){
    
    const product = event.target.parentNode;
    const productName = product.querySelector('.product-name').innerText;
    const productImage = product.querySelector('.other-item-img').src;
    const productPrice = product.querySelector('.product-price').innerText;


    console.log(productName); 
    console.log(productImage); 
    console.log(productPrice);

    const productData = {
        name: productName,
        image: productImage,
        price: productPrice
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    cart.push(productData);
  
    localStorage.setItem('cart', JSON.stringify(cart));

    if (localStorage.getItem('cart')) {
        alert('Item adicionado ao carrinho com sucesso!');
    } else {
        alert('Erro ao adicionar o item ao carrinho!');
    }
}
