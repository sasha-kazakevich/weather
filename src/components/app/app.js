import React, {Component} from 'react'
import Weather from '../weather'

import ipService from '../../services/ip-services'
import countryService from '../../services/country-services'

export default class App extends Component {

  render() {

    return (
      <Weather getIp={ipService} getCountry={countryService}/>
    )
  }
}