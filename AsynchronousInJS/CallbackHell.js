'use strict';
const renderCountry = function(data, className = '') {
  const countriesContainer = document.querySelector('.countries');
  const html = `
    <article class='country ${className}'>
      <img class='country__img' src='${data.flag}' />
      <div class='country__data'>
        <h3 class='country__name'>${data.name}</h3>
        <h4 class='country__region'>${data.region}</h4>
        <p class='country__row'><span>👫</span>${(+data.population / 1000000).toFixed(1)} million peoples</p>
        <p class='country__row'><span>🗣️</span>${data.languages[0].name}</p>
        <p class='country__row'><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
document.addEventListener('DOMContentLoaded', function() {
  const getCountryAndNeighbour = function(country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener('load', function() {
      const [data] = JSON.parse(this.responseText);// convert json => obj
      console.log(data);
      //render country 1
      renderCountry(data);
      //get neighbour country (2)
      const neighbour = data.borders?.[0];

      if (!neighbour) return;

      //AJAX call country 2
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
      request2.send();

      request2.addEventListener('load', function() {
        const data2 = JSON.parse(this.responseText);
        renderCountry(data2, 'neighbour');
      });
    });
  };
  getCountryAndNeighbour('vietnam');
});

// more a example for Callback HELL
setTimeout(() => {
  console.log('1s second passed');
  setTimeout(() => {
    console.log('2s second passed');
    setTimeout(() => {
      console.log('3s second passed');
      setTimeout(() => {
        console.log('4s second passed');
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);