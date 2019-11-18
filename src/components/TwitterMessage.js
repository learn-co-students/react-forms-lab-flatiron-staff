import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      message: '',
      counter: this.props.maxChars, 
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      counter: this.props.maxChars - e.target.value.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={this.state.message} onChange={this.handleChange} />
        <p>{this.state.counter} remaining characters.</p>
      </div>
    );
  }
}

export default TwitterMessage;
