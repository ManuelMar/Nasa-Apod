import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchApod } from '../actions/index';
import { SingleDatePicker, isInclusivelyAfterDay } from 'react-dates';
import moment from 'moment';

const today = moment().add(1, 'day');

// add Info about NASA and Title

// logo at https://www.nasa.gov/images/content/256358main_Symbols2-xltn.jpg

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      date: today,
      focused: false
    };

    // bind all functions

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.props.fetchApod('');
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    //console.log(this.state.date);
    //console.log(this.state.date.format('YYYY-MM-DD'));
    this.props.fetchApod(this.state.date.format('YYYY-MM-DD'));
    //this.setState({ date: today });
  }

  onDateChange(date) {
    this.setState({ date });
  }

  /*<input
    placeholder = "Get NASA Astronomy Picture for any date"
    className = "form-control"
    onChange={this.onInputChange}>
  </input>
  */

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <img
            className="input-group-logo"
            src="https://www.nasa.gov/images/content/256358main_Symbols2-xltn.jpg"
          />
          <SingleDatePicker
            date={this.state.date} // momentPropTypes.momentObj or null
            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            isOutsideRange={day => isInclusivelyAfterDay(day, today)}
            placeholder={'Get the NASA APOD for any date'}
          />

          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchApod }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
