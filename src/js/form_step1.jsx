/** @jsx React.DOM */

var React = require('react');

var FormStep1 = React.createClass({
  validate: function(){
    //validate in here
    //use next btn to validate?
    //do not validate on prev btn

    e.preventDefault();
    let value = this.state.value;
    if (value === 'car') {
      this.props.next(states.CAR);
    } else if (value === 'boat') {
      this.props.next(states.BOAT);
    } else {
      // this.setState({
      //   errors: ['Please choose a vehicle type']
      // });
    }
  },
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
