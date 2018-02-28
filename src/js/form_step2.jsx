/** @jsx React.DOM */

var React = require('react');

var FormStep2 = React.createClass({
  getInitialState: function(){
    return {
      data: this.props.data
    }
  },
  render: function () {
    if (this.props.data.currentStep !== 2) {
      return null;
    }
    return (
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" defaultValue={this.props.data.user.email} onChange={this.props.change} />
      </div>
    )
  }
})

module.exports = FormStep2;
