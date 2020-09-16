import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BackButton extends Component {
  render() {
    return (
      <section className="item folders">
        <Link to="/"><h2>Go Back</h2></Link>
      </section>
    );
  }
}

export default BackButton;