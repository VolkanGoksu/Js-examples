const api = "https://api.exchangeratesapi.io/";

const currencyOne= document.getElementById('currency_one');
const currencyTwo = document.getElementById('currency_two');
const amountt = document.getElementById('amount');
const btn = document.getElementById('btn_calculate');
const result = document.getElementById('result');


fetch('currencies.json')
    .then(res => res.json())
    .then(data => {
        const keys = Object.keys(data);
        const values = Object.values(data);

        let options;

        for (let i = 0; i < keys.length; i++) {
            options += `<option value=${keys[i]}>${values[i]}</option>`;
        }

        currencyOne.innerHTML += options;
        currencyTwo.innerHTML += options;
    });

    btn.addEventListener('click', function() {
    
    const firstCurrency=  currencyOne.value;
    const lateCurrency = currencyTwo.value;
    const amount = amountt.value;

    fetch(`${api}latest?base=${firstCurrency}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[lateCurrency];
            result.innerHTML = `${amount} ${firstCurrency} = ${amount * rate} ${lateCurrency}`;
        })

});