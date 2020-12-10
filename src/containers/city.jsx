import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.item);
  }

  render() {
    let classes = "list-group-item";
    if (this.props.item === this.props.selectedCity) {
      classes += "selected-city";
    }

    return (
      <div className={classes} onClick={this.handleClick}>
        {this.props.item.name}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(City);
