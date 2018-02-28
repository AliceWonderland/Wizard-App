/** @jsx React.DOM */

var React = require('react');

var FormStep5 = React.createClass({

  render: function () {
    if (this.props.data.currentStep !== 5) {
      return null;
    }
    return (
      <div>
        <p>Success!</p>
      </div>
    )
  }
})

module.exports = FormStep5;
