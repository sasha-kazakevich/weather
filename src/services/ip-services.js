export default class IpServices {
  _apiUrl = 'http://ipinfo.io';
  _token = 'd36c7e139f7f91';

  getIp = async () => {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${this._apiUrl}/json?token=${this._token}`)

    if (!res.ok) {
      throw new Error(`Error ${res.status}`)
    }

    return await res.json();
  }
}