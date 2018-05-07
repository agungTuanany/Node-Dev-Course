const axios =require('axios');

const fixerAPI_KEY = '9a51547f1dd050576bf2f8adfd6ff415';

const getExchangeRate = (from, to) => {
    return axios.get(`http://api.fixer.io/latest?access_key=${fixerAPI_KEY}&base=${from}`).then((response) => {
        return response.data.rates[to];
    });
};

const getCountries = (currencyCode) => {
    return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((response) => {
        return response.data.map((country) => country.name);
    });
};

const convertCurrency = (from, to, amount) => {
    return getCountries(to).then((countries) => {
        return getExchangeRate(from, to);
    }).then((rate) => {
        const exchangedAmount = amount * rate;

        return `${amount} ${from} is worth ${exchangedAmount} ${to}. `;
    })
}

getExchangeRate('USD', 'IDR').then((rate) => {
    console.log(rate);
});

convertCurrency('IDR', 'USD', 10000).then((rate) => {
    console.log(rate);
});

getCountries('IDR').then((country) => {
    console.log(country);
});

