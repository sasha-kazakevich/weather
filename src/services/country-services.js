export default class CountryServices {
  _apiUrl = 'http://country.io/names.json';

  getCountry = async () => {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${this._apiUrl}`);

    return await res.json();
  }
}