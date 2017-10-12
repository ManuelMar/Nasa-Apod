import React, { Component } from 'react';
import { connect } from 'react-redux';

class ApodList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMore: false
    };
  }

  toggleShow = () => {
    this.setState(prevState => {
      return {
        showMore: !prevState.showMore
      };
    });
  };

  renderData() {
    return (
      <div className="img-data">
        <label>
          {this.props.apod.map(apod => apod.explanation)}
        </label>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>
          {this.props.apod.map(apod => apod.date)}:<br />{' '}
          {this.props.apod.map(apod => apod.title)}{' '}
        </h1>
        <div className="contain">
          <img
            onClick={this.toggleShow}
            src={this.props.apod.map(apod => apod.url)}
            className="image"
          />
          <div className="middle">
            <div className="texty">
              {this.state.showMore ? 'Hide Description' : 'Show Description'}
            </div>
          </div>
        </div>

        <br />
        {this.state.showMore ? this.renderData() : null}
      </div>
    );
  }
}

function mapStateToProps({ apod }) {
  return { apod };
}

export default connect(mapStateToProps)(ApodList);

/*
<a onClick={this.toggleShow}>
  {this.state.showMore ? 'Show Less' : 'Show More'}
</a>
*/
