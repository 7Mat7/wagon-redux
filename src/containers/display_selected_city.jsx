import React, { Component } from 'react';
import { connect } from 'react-redux';


class DisplaySelectedCity extends Component {
  render() {

    if (this.props.selectedCity) {      return (
        <div className=".active-city">
          <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`} alt="" />

          <h3>{this.props.selectedCity.name}</h3>
        </div>
      );
    }
    return null
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(DisplaySelectedCity);
