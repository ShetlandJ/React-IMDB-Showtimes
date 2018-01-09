import React from 'react';
import Film from './Film';

class Listings extends React.Component {
  render() {
  const filmNodes = this.props.data.map(film => {
    return (
      <Film key={film.id}>
        <div className="title">{film.title}</div>
        <div className="showtimes-text"><a href="http://www.getwellgamers.org.uk">{film.text}</a>
        </div>
      </Film>
    )
  })

    return(
      <div className="film-list">
        {filmNodes}
      </div>
    )
  }
}

export default Listings;
