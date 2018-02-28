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
          age: 'select',
          heightFt: 5,
          heightIn: 4,
          weight: 150,
          color: 'select'
        },
        errors: 0
      }
		}
  },

  validate: function(){
    //use next btn to validate
    //do not validate on prev btn
    //using validator in base form to save time

		let currentStep=this.state.data.currentStep;
		let error=this.state.error;

		if(currentStep===1){
			// letters/nums
			var reg = /^[0-9a-zA-Z]+$/;
      var isValidFirst = reg.test(this.state.data.user.firstName);
      var isValidLast = reg.test(this.state.data.user.firstLast);

			if(!isValidFirst || !isValidLast){
        console.log('no')
			}

		}else if(currentStep===2){
			// blank,@,dot
			// use RFC822 email regex

			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			var isValidEmail = reg.test(this.state.data.user.email);

      if(!isValidEmail){
        console.log('no')
      }

		}else if(currentStep===3){
			// not 'select',int

			var reg = /^[0-9]*$/;
      var isValidHeightFt = reg.test(this.state.data.user.heightFt);
      var isValidHeightIn = reg.test(this.state.data.user.heightIn);
      var isValidWeight = reg.test(this.state.data.user.weight);
      var isValidAge=!(this.state.data.user.age==='select');

      if(!isValidHeightFt || !isValidHeightIn || !isValidWeight || !isValidAge){
        console.log('no')
      }
      
		}else if(currentStep==4){
			// not 'select', handle other
      var isValidColor=!(this.state.data.user.color==='select');

      if(!isValidColor){
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
