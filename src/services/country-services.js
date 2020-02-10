import getServices from './services-helper';

const CountryServices = () => {
  const _apiUrl = 'http://country.io/names.json'
  const _url = `https://cors-anywhere.herokuapp.com/${_apiUrl}`;

  return getServices(_url);
}

export default CountryServices;