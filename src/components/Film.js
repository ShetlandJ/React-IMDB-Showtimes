import React from 'react';
import styles from '../styles.css';

class Film extends React.Component {
  render() {
    return(
      <div className="film">
      {this.props.children}
    </div>

    )
  }
}

export default Film;
