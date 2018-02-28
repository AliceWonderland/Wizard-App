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
          <input type="text" name="firstName" id="firstName" defaultValue={this.props.data.user.firstName} onChange={this.props.change} />
          <br />
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" name="lastName" id="lastName" defaultValue={this.props.data.user.lastName} onChange={this.props.change} />
      </div>
    )
  }

})

module.exports = FormStep1;
