'use strict';
const countriesContainer = document.querySelector('.countries');
const renderCountry = function(data, className = '') {

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
const renderError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getPosition = function() {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function() {
  try {
    //Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=147389878537136806273x5371 `);
    if (!resGeo.ok) throw new Error(`Problem getting location data!`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    //Country data
    const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();
    renderCountry(data[0]);
  } catch (err) {
    console.log(`${err.message}`);
    renderError(`💥 ${err.message}`);
  }

};
whereAmI();
whereAmI();
whereAmI();
console.log('FIRST');

