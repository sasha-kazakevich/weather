import getServices from './services-helper'

let ipServices = () => {
  const _apiUrl = 'http://ipinfo.io'
  const _token = 'd36c7e139f7f91'

  const _url = `https://cors-anywhere.herokuapp.com/${_apiUrl}/json?token=${_token}`

  return getServices(_url)
}

export default ipServices