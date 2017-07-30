import React,{Component} from 'react'
import {connect} from 'react-redux';

class ApodList extends Component{


  render(){

    return(
      <div>
        <h1>{this.props.apod.map(apod => apod.title )}</h1>
        <img src = {this.props.apod.map(apod => apod.url)} />
        <br/>
        <label>{this.props.apod.map(apod => apod.date )}</label>
        <label>{this.props.apod.map(apod => apod.explanation )}</label>
      </div>
    );
  }
}

function mapStateToProps({apod}){

  return {apod};
}

export default connect(mapStateToProps)(ApodList);
