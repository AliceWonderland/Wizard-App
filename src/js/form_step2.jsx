/** @jsx React.DOM */

var React = require('react');

var FormStep2 = React.createClass({

  render: function () {
    if (this.props.data.currentStep !== 2) {
      return null;
    }
    return (
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" defaultValue="me@gmail.com" />
      </div>
    )
  }
})

module.exports = FormStep2;
