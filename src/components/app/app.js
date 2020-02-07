import React, {Component} from 'react';
import Weather from '../weather';

import ipService from '../../services/ip-services';
import countryService from '../../services/country-services';

export default class App extends Component {

  ip = new ipService();
  country = new countryService();

  render() {

    return (
      <Weather getIp={this.ip.getIp} getCountry={this.country.getCountry}/>
    )
  }
}