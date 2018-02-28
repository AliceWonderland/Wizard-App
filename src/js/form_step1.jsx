/** @jsx React.DOM */

var React = require('react');

var FormStep1 = React.createClass({

  render: function () {
    if (this.props.data.currentStep !== 1) {
      return null;
    }
    return (
      <div>
          <label htmlFor="firstname">First Name:</label>
          <input type="text" name="firstname" id="firstname" defaultValue="First" />

          <label htmlFor="lastname">Last Name:</label>
          <input type="text" name="lastname" id="lastname" defaultValue="Last" />
      </div>
    )
  }

})

module.exports = FormStep1;
