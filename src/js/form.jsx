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
        value: 'select',
        currentStep: 1,
        user: {
          id: 1,
          firstName: 'Alice',
          lastName: 'Palace',
          email: 'alice@gmail.com',
          age: '17 and under',
          heightFt: 5,
          heightIn: 4,
          weight: 150,
          color: 'Red',
					colorOther:''
        },
        error: ''
      }
		}
  },

  validate: function(){
    //use next btn to validate
    //do not validate on prev btn
    //using validator in base form to save time

		let currentStep=this.state.data.currentStep;
		let errors=this.state.data.errors;

		if(currentStep===1){
			// letters/nums
			var reg = /^[a-zA-Z]+$/;
      var isValidFirst = reg.test(this.state.data.user.firstName);
      var isValidLast = reg.test(this.state.data.user.lastName);

			if(!isValidFirst || !isValidLast){
        console.log('no');
        var error="Please enter a valid name. Name can only contain A-Z.";
        this.setState({data: {...this.state.data, error}});
        return false;
			}

		}else if(currentStep===2){
			// blank,@,dot
			// use RFC822 email regex*

			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			var isValidEmail = reg.test(this.state.data.user.email);

      if(!isValidEmail){
        console.log('no');
        var error="Please enter a valid email. Must contain @ and .";
        this.setState({data: {...this.state.data, error}});
        return false;
      }

		}else if(currentStep===3){
			// not 'select',int

			var reg = /^[0-9]*$/;
      var isValidHeightFt = reg.test(this.state.data.user.heightFt);
      var isValidHeightIn = reg.test(this.state.data.user.heightIn);
      var isValidWeight = reg.test(this.state.data.user.weight);
      var isValidAge=!(this.state.data.user.age==='select');

      if(!isValidHeightFt || !isValidHeightIn || !isValidWeight || !isValidAge){
        console.log('no');
        var field='';
        if(!isValidAge){
          field='age';
        }else if(!isValidHeightFt || !isValidHeightIn){
          field='height. Can only contain integers.';
        }else{
          field='weight. Can only contain integers.';
        }
        var error="Please enter a valid " + field;
        this.setState({data: {...this.state.data, error}});
        return false;
      }
      
		}else if(currentStep==4){
			// not 'select', handle other
      if(this.state.data.user.color==='select' ||
        (this.state.data.user.color==='Other' && this.state.data.user.colorOther==='')){
        console.log('no');

        var error="Please enter a valid color";
        this.setState({data: {...this.state.data, error}});
        return false;
      }
		}else{
			// success
  		console.log('success');
		}

    return true;
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

			if(this.validate()){
        if(currentStep < 5){
          currentStep++;
        }else{
          currentStep = 5;
        }
        var error="";
        this.setState({data: {...this.state.data, ...{currentStep,error}}});
			}

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
				<h4>{this.state.data.error}</h4>
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
