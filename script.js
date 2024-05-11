const fromAmountElement = document.querySelector('.amount');
const convertedAmountElement = document.querySelector('.convertedAmount');
const fromCurrencyElement = document.querySelector('.fromcurrency');
const toCurrencyElement = document.querySelector('.tocurrency');
const resultElement = document.querySelector('.result');
const converterContainer = document.querySelector('.converter-container')

const conttries = [
    {code:"USD", name:"USD"},
    {code:"INR", name:"INR"},
    {code:"AED", name:"AED"},
    {code:"ARS", name:"ARS"},
    {code:"AUD", name:"AUD"},
    {code:"BGN", name:"BGN"},
    {code:"BRL", name:"BRL"},
    {code:"BSD", name:"BSD"},
    {code:"CAD", name:"CAD"},
    {code:"CHF", name:"CHF"},
    {code:"CLP", name:"CLP"},
    {code:"CNY", name:"CNY"},
    {code:"COP", name:"COP"},
    {code:"CZK", name:"CZK"},
    {code:"DKK", name:"DKK"},
    {code:"DOP", name:"DOP"},
    {code:"EGP", name:"EGP"},
    {code:"EUR", name:"EUR"},
    {code:"FJD", name:"FJD"},
    {code:"GBP", name:"GBP"},
    {code:"GTQ", name:"GTQ"},
    {code:"HKD", name:"HKD"},
    {code:"HUF", name:"HUF"},
    {code:"IDR", name:"IDR"},
    {code:"ILS", name:"ILS"},
    {code:"ISK", name:"ISK"},
    {code:"JPY", name:"JPY"},
    {code:"KRW", name:"KRW"},
    {code:"KZT", name:"KZT"},
    {code:"MVR", name:"MVR"},
    {code:"MXN", name:"MXN"},
    {code:"MYR", name:"MYR"},
    {code:"NOK", name:"NOK"},
    {code:"NZD", name:"NZD"},
    {code:"PAB", name:"PAB"},
    {code:"PEN", name:"PEN"},
    {code:"PHP", name:"PHP"},
    {code:"PKR", name:"PKR"},
    {code:"PLN", name:"PLN"},
    {code:"PYG", name:"PYG"},
    {code:"RON", name:"RON"},
    {code:"RUB", name:"RUB"},
    {code:"SAR", name:"SAR"},
    {code:"SEK", name:"SEK"},
    {code:"SGD", name:"SGD"},
    {code:"THB", name:"THB"},
    {code:"TRY", name:"TRY"},
    {code:"TWD", name:"TWD"},
    {code:"UAH", name:"UAH"},
    {code:"UYU", name:"UYU"},
    {code:"ZAR", name:"ZAR"},
];

conttries.forEach(country => {
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');

    option1.value = option2.value = country.code;
    option1.textContent = option2.textContent = `${country.code} 
    (${country.name})`;

    fromCurrencyElement.appendChild(option1);
    toCurrencyElement.appendChild(option2);

    fromCurrencyElement.value = "USD";
    toCurrencyElement.value = "INR";
})

const getExchangeRate = async () => {
    const amount = parseFloat(fromAmountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;

try{
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
    
        // console.log(data);
    
        const conversionRate = data.rates[toCurrency];
        const convertedAmount = (amount * conversionRate);
    
        convertedAmountElement.value = convertedAmount;
        resultElement.textContent = `${amount} ${fromCurrency} = 
        ${convertedAmount} ${toCurrency}`;
    }
    catch(error){
        converterContainer.innerHTML = `<h1>Error while fetching data!!!</h1>`
    }

}


// getExchangeRate();
//fetching data when user gives input
fromAmountElement.addEventListener('input', getExchangeRate);


//fetching data when user change currency type
fromCurrencyElement.addEventListener('change', getExchangeRate);
toCurrencyElement.addEventListener('change', getExchangeRate);


window.addEventListener('load', getExchangeRate);


function modeSwitch(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}