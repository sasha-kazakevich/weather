import React, {Component} from 'react';

export default class Weather extends Component {

  state = {
    city: 'city',
    country: 'country',
    date: '00 00 00'
  }

  componentDidMount() {
    const { getIp, getCountry } = this.props;

    getIp()
    .then((data) => {
      this.setState({city: data.city})
      return data.country
      })
    .then(countryCode => {
      getCountry().then(listCountry => 
      this.setState({country: listCountry[countryCode]}))
    })

    setInterval(this.formatDate.bind(this), 1000);
  }

  formatDate() {
    const options = {weekday: 'short', day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric', hour12: false};
    const date = new Date();
    
    this.setState({date: date.toLocaleString('en-US',options)})
  }

  render() {
    const {city,country,date} = this.state;

    return(
      <div className="today">
        <div>{city} <span>{country}</span></div>
        <div>{date}</div>
      </div>
    )
  }
}