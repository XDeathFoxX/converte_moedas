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

pesquisa.value = "BTC-BRL"

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

    code.textContent = result.BTCBRL.code
    codein.textContent = result.BTCBRL.codein
    nome.textContent = result.BTCBRL.name
    high.textContent = result.BTCBRL.high
    low.textContent = result.BTCBRL.low
    bid.textContent = result.BTCBRL.bid
    date.textContent = result.BTCBRL.create_date

    let converter;
    converter = parseFloat(result.BTCBRL.bid);
    converter = 1 / converter;
    converter = converter.toFixed(7)
    converte.textContent = converter

    venda = result.BTCBRL.bid

})

function clique() { 
    let float;
    float = input.value / parseFloat(venda);
    console.log(venda)
    console.log(input.value)
    float = float.toFixed(7);
    console.log(float)
    convertido.textContent = float;
}