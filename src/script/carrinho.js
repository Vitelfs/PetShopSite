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
