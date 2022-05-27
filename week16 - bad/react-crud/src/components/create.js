import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Create() {
    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState(''); 
    const [addressOne, setAddressOne] = useState('');
    const [addressTwo, setAddressTwo] = useState('');   
    const [checkbox, setCheckbox] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    console.log(checkbox)
    console.log(checkbox2)
    const postData = () => {
        axios.post(`https://627e7dde271f386ceff943b2.mockapi.io/resourceData`, {
            firstName,
            middleName,
            lastName, 
            addressOne,
            addressTwo,           
            checkbox,
            checkbox2
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <h2>Add New User</h2>

            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Middle Name</label>
                    <input placeholder='Middle Name' onChange={(e) => setMiddleName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Address</label>
                    <input placeholder='Address' onChange={(e) => setAddressOne(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>City, State</label>
                    <input placeholder='City, State' onChange={(e) => setAddressTwo(e.target.value)}/>
                </Form.Field>
                
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Employee Handbook issued' onChange={(e) => setCheckbox2(!checkbox2)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}