const api_key ="6d9fe977ad600caa45d4cd2a";
const url = "https://v6.exchangerate-api.com/v6/" + api_key;
const currency_one = document.getElementById("currency_one");
const currency_two = document.getElementById("currency_two");
const list_one = document.getElementById("list_one");
const list_two = document.getElementById("list_two");
const amount = document.getElementById("amount");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

fetch(url + "/codes")
    .then(res => res.json())
    .then(data => {
        const items = data.supported_codes;
        let options;
        for (let item of items){
            options += `<option value=${item[1]}>${item[0]}</option> `;
            
        }
        list_one.innerHTML = options;
        list_two.innerHTML = options;
    });

    calculate.addEventListener("click" , function(){
        const doviz1 = currency_one.value;
        const doviz2 = currency_two.value;
        const miktar = amount.value;

        fetch(url + "/latest/" + doviz1)
        .then(res => res.json())
        .then(data => {
            const sonuc = data.conversion_rates[doviz2] * miktar;
            result.innerHTML = `
               ${miktar} ${doviz1} = ${sonuc} ${doviz2}
            `
            
             
                
            // console.log(data.conversion_rates[doviz2] * miktar);
        })


    });

