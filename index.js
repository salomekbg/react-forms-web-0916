const React = require('react');

class ControlledInput extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      hi
      // <input type="text" value={this.state.value} onChange={this.handleChange} />
    )
  }
}

module.exports = ControlledInput;
