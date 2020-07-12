import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import './PatientForm.css';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]


class FormExampleSubcomponentControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
       <div className="border"> 
           <Form>
            <Form.Group widths='equal'>
            <Form.Input fluid label='First name' placeholder='First name' />
            <Form.Input fluid label='Last name' placeholder='Last name' />
           
            <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
          />
            </Form.Group>
            
            <Form.Group widths='equal'>
            <Form.Input fluid label='First name' placeholder='First name' />
            <Form.Input fluid label='Last name' placeholder='Last name' />
            </Form.Group>
            
            <Form.TextArea label='About' placeholder='Tell us more about you...' />
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Form.Button>Submit</Form.Button>
        </Form>
       </div> 
    )
  }
}

export default FormExampleSubcomponentControl;
