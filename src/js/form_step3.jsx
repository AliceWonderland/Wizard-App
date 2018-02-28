/** @jsx React.DOM */

var React = require('react');

var FormStep3 = React.createClass({
  getInitialState: function(){
    return {
      data: this.props.data
    }
  },

  render: function () {
    if (this.props.data.currentStep !== 3) {
      return null;
    }
    return (
      <div>
        <label htmlFor="age">Age:</label>
        <select name="age" id="age" defaultValue={this.state.data.user.age}>
          <option value="select">Select Age Range</option>
          <option value="17 and under">17 and Under</option>
          <option value="18-24">18-24</option>
          <option value="25-35">25-35</option>
          <option value="36-45">36-45</option>
          <option value="36 or older">36 or older</option>
        </select>

        <label htmlFor="height">Height:</label>
        <input type="text" name="heightFt" id="heightFt" defaultValue={this.state.data.user.heightFt} onChange={this.props.change} /> <input type="text" name="heightIn" id="heightIn" defaultValue={this.state.data.user.heightIn} onChange={this.props.change} />

        <label htmlFor="weight">Weight:</label>
        <input type="text" name="weight" id="weight" defaultValue={this.state.data.user.weight} onChange={this.props.change} />
      </div>
    )
  }
})

module.exports = FormStep3;
