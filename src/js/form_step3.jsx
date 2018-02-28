/** @jsx React.DOM */

var React = require('react');

var FormStep3 = React.createClass({

  render: function () {
    if (this.props.data.currentStep !== 3) {
      return null;
    }
    return (
      <div>
        <label htmlFor="age">Age:</label>
        <select name="age" id="age" defaultValue={this.props.data.value}>
          <option value="selected">Select Age Range</option>
          <option value="17 and under">17 and Under</option>
          <option value="18-24">18-24</option>
          <option value="25-35">25-35</option>
          <option value="36-45">36-45</option>
          <option value="36 or older">36 or older</option>
        </select>

        <label htmlFor="height">Height:</label>
        <input type="text" name="feet" id="feet" /> <input type="text" name="inches" id="inches" />

        <label htmlFor="weight">Weight:</label>
        <input type="text" name="weight" id="weight" />
      </div>
    )
  }
})

module.exports = FormStep3;
