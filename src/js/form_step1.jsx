/** @jsx React.DOM */

var React = require('react');

var FormStep1 = React.createClass({
  getInitialState: function(){
    return {
      data: this.props.data
    }
  },
  render: function () {
    if (this.props.data.currentStep !== 1) {
      return null;
    }
    return (
      <div>
          <label htmlFor="firstname">First Name:</label>
          <input type="text" name="firstName" id="firstName" defaultValue="First" onChange={this.props.change} />

          <label htmlFor="lastname">Last Name:</label>
          <input type="text" name="lastName" id="lastName" defaultValue="Last" onChange={this.props.change} />
      </div>
    )
  }

})

module.exports = FormStep1;
