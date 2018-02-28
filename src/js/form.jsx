/** @jsx React.DOM */

var React = require('react');

require("css/modules/_form");

var Form = React.createClass({
  getInitialState: function() {
    return {data: [{value: 'selected'}]}
  },

  render: function () {
	return (
		<div className="content form-wizard">
			<h1>Step 1</h1>
			<form action="post">
				<label htmlFor="firstname">First Name:</label>
				<input type="text" name="firstname" id="firstname" />

				<label htmlFor="lastname">Last Name:</label>
				<input type="text" name="lastname" id="lastname" />

				<label htmlFor="email">Email:</label>
				<input type="text" name="email" id="email" />

				<label htmlFor="age">Age:</label>
				<select name="age" id="age" value={this.state.data.value}>
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

				<label htmlFor="color">Favorite Color:</label>
				<select name="color" id="color" value={this.state.data.value}>
					<option value="selected">Select Color</option>
					<option value="Red">Red</option>
					<option value="Orange">Orange</option>
					<option value="Yellow">Yellow</option>
					<option value="Green">Green</option>
					<option value="Blue">Blue</option>
					<option value="Purple">Purple</option>
					<option value="Other">Other</option>
				</select>

				{/*<input type="text" name="color" id="color" />*/}

			</form>
		</div>
	)
  }
})

module.exports = Form;
