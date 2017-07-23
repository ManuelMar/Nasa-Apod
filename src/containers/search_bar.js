import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchApod} from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {
      term : ''
    };

    // bind all functions

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.props.fetchApod("");
  }

  onInputChange(event){
    this.setState({term : event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchApod(this.state.term);
    this.setState({term : ''});
  }

  render(){
    return (
      <form onSubmit = {this.onFormSubmit} className="input-group">
        <input
          placeholder = "Get NASA Astronomy Picture for any date"
          className = "form-control"
          onChange={this.onInputChange}>
        </input>
        <span className = "input-group-btn">
          <button type = "submit" className = "btn btn-secondary">
            Submit
          </button>
        </span>

      </form>

    );
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchApod},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);
