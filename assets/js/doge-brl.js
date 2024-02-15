const code = document.getElementById('code');
const codein = document.getElementById('codein');
const nome = document.getElementById('name');
const high = document.getElementById('high');
const low = document.getElementById('low');
const bid = document.getElementById('bid');
const converte = document.getElementById('converte');
const convertido = document.getElementById('valorconvertido');
const date = document.getElementById('create_date');
const btngo = document.getElementById('btn-go');
const pesquisa = document.getElementById('pesquisa');
var input = document.querySelector("#valor");

pesquisa.value = "DOGE-BRL"

const fetchApi = (value) => {
    const result = fetch(`https://economia.awesomeapi.com.br/json/last/${value}`)
    .then(response => response.json())
    .then(data => {
        return data;
    });
    return result;
}

var venda;
btngo.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await fetchApi(pesquisa.value);

    code.textContent = result.DOGEBRL.code
    codein.textContent = result.DOGEBRL.codein
    nome.textContent = result.DOGEBRL.name
    high.textContent = result.DOGEBRL.high
    low.textContent = result.DOGEBRL.low
    bid.textContent = result.DOGEBRL.bid
    date.textContent = result.DOGEBRL.create_date

    let converter;
    converter = parseFloat(result.DOGEBRL.bid);
    converter = 1 / converter;
    converter = converter.toFixed(2)
    converte.textContent = converter

    venda = result.DOGEBRL.bid

})

function clique() { 
    let float;
    float = input.value / parseFloat(venda);
    console.log(venda)
    console.log(input.value)
    float = float.toFixed(2);
    console.log(float)
    convertido.textContent = float;
}