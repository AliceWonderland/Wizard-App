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
          firstName: 'alice',
          lastName: 'chuang',
          email: 'alice@gmail.com',
          age: 'alice',
          heightFt: 5,
          heightIn: 4,
          weight: 150,
          color: 'red'
        }
      }
		}
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
      this.setState({data: {...this.data, currentStep}});

		}else if(e.target.value==='Next'){

			if(currentStep < 5){
        currentStep++;
			}else{
        currentStep = 5;
			}
			this.setState({data: {...this.data, currentStep}});

		}else{

		}
  },

  render: function () {
  	let data=this.state.data;
		return (
			<div className="content form-wizard">
				<h1>Step 1</h1>

				<form action="post">

					<FormStep1 data={data} afterValid={(e) => this.handleClick(e)} />
					<FormStep2 data={data} afterValid={(e) => this.handleClick(e)} />
					<FormStep3 data={data} afterValid={(e) => this.handleClick(e)} />
					<FormStep4 data={data} afterValid={(e) => this.handleClick(e)} />
					<FormStep5 data={data} afterValid={(e) => this.handleClick(e)} />

          {
            data.currentStep > 1
              ? <input type="button" value="Prev" onClick={(e) => this.handleClick(e)} />
              : null
          }

          {
            data.currentStep < 5
              ? <input type="button" value="Next" onClick={(e) => this.handleClick(e)} />
              : null
          }

				</form>

			</div>
		)
	}
})

module.exports = Form;
