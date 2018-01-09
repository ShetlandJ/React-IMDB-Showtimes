import React from 'react';
import Listings from './Listings'

class ShowTimeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, title: "Disaster Artist", text: "showtimes"},
        {id: 2, title: "It's a Wonderful Life", text: "showtimes"},
        {id: 3, title: "Superbad", text: "showtimes"},
        {id: 4, title: "Supergood", text: "showtimes"},

      ]
    }
  }

  render() {
    return (
      <div className="show-time-box">
        <h1 id="heading">Movie show times:</h1>
        <Listings data={this.state.data} />
      </div>
    )
  }
}

export default ShowTimeBox;
