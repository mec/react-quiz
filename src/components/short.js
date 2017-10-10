import React from 'react';

class Short extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onValueChange(event, this.props.uid);
  }

  render() {
    return (
      <input type="text" defaultValue={this.props.value} onChange={this.handleChange} />
    );
  }
}

export default Short;
