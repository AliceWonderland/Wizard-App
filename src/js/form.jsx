/** @jsx React.DOM */

var React = require('react');
var FormStep1 = require('./form_step1.jsx');
var FormStep2 = require('./form_step2.jsx');
var FormStep3 = require('./form_step3.jsx');
var FormStep4 = require('./form_step4.jsx');
var FormStep5 = require('./form_step5.jsx');

require("css/modules/_form");

var Form = React.createClass({
  getInitialState: function(){
    return {
			data: {
        value: 'selected',
        currentStep: 1,
        user: {
          id: 1,
          firstName: 'First',
          lastName: 'Last',
          email: 'alice@gmail.com',
          age: 32,
          heightFt: 5,
          heightIn: 4,
          weight: 150,
          color: 'red'
        },
        errors: 0
      }
		}
  },

  validate: function(){
    //use next btn to validate
    //do not validate on prev btn
    //using validator in base form to save time

		let currentStep=this.state.currentStep;
		let error=this.state.error;

		if(currentStep===1){
			// blank and str
			if(this.state.data.user.firstName==='' || this.state.data.user.lastName===''){
        console.log('no')
			}
		}else if(currentStep===2){
			// blank,@,dot
      if(this.state.data.user.email===''){
        console.log('no')
      }
		}else if(currentStep===3){
			// not 'select',int
      if(this.state.data.user.email===''){
        console.log('no')
      }
		}else if(currentStep==4){
			// not 'select', handle other
      if(this.state.data.user.email===''){
        console.log('no')
      }
		}else{
			// success
  		console.log('success')
		}

    // let value = this.state.value;
    // if (value === 'car') {
    //   this.props.next(states.CAR);
    // } else if (value === 'boat') {
    //   this.props.next(states.BOAT);
    // } else {
    //   // this.setState({
    //   //   errors: ['Please choose a vehicle type']
    //   // });
    // }
  },

  handleClick: function(e){
    e.preventDefault();
    let currentStep = this.state.data.currentStep;

    if(e.target.value==='Prev'){

      if(currentStep >= 2){
        currentStep--;
      }else{
        currentStep = 1;
      }
      this.setState({data: {...this.state.data, currentStep}});

		}else if(e.target.value==='Next'){

    	this.validate();

			if(currentStep < 5){
        currentStep++;
			}else{
        currentStep = 5;
			}
			this.setState({data: {...this.state.data, currentStep}});

		}else{

		}
  },

	handleChange: function(e){
    let obj={[e.target.id]:e.target.value};
    let user={...this.state.data.user, ...obj};
    this.setState({data: {...this.state.data, ...{user:user}}});
	},

  render: function () {
  	let data=this.state.data;
    console.log('render state',data);
		return (
			<div className="content form-wizard">
				<h1>Step {data.currentStep}</h1>

				<form action="post">
					<FormStep1 data={data} change={(e) => this.handleChange(e)} />
					<FormStep2 data={data} change={(e) => this.handleChange(e)} />
					<FormStep3 data={data} change={(e) => this.handleChange(e)} />
					<FormStep4 data={data} change={(e) => this.handleChange(e)} />
					<FormStep5 data={data} change={(e) => this.handleChange(e)} />

					<input type="button" value="Prev" onClick={(e) => this.handleClick(e)} disabled={(data.currentStep > 1)? '':'disabled'} />

					<input type="button" value="Next" onClick={(e) => this.handleClick(e)} disabled={(data.currentStep < 5)? '':'disabled'} />
				</form>
			</div>
		)
	}
})

module.exports = Form;
