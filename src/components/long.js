import React from 'react';

class Long extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onValueChange(event, this.props.uid);
  }

  render() {
    return (
      <textarea onChange={this.handleChange}>{this.props.value}</textarea>
    );
  }
}

export default Long;
