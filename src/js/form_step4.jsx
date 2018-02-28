/** @jsx React.DOM */

var React = require('react');

var FormStep4 = React.createClass({
  getInitialState: function(){
    return {
      data: this.props.data
    }
  },

  render: function () {
    if (this.props.data.currentStep !== 4) {
      return null;
    }
    return (
      <div>
        <label htmlFor="color">Favorite Color:</label>
        <select name="color" id="color" defaultValue={this.props.data.user.color} onChange={this.props.change}>
          <option value="select">Select Color</option>
          <option value="Red">Red</option>
          <option value="Orange">Orange</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Purple">Purple</option>
          <option value="Other">Other</option>
        </select>
        <br />

        {
          this.props.data.user.color==='Other' &&
          <input type="text" name="colorOther" id="colorOther" defaultValue={this.props.data.user.colorOther} onChange={this.props.change} />
        }
      </div>
    )
  }
})

module.exports = FormStep4;
