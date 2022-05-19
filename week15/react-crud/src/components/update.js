import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setMiddleName(localStorage.getItem('Middle Name'));
        setLastName(localStorage.getItem('Last Name'));        
        setCheckbox(localStorage.getItem('Checkbox Value'));
        setCheckbox2(localStorage.getItem('Checkbox2 Value'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://627e7dde271f386ceff943b2.mockapi.io/resourceData/${id}`, {
            firstName,
            middleName,
            lastName,            
            checkbox,
            checkbox2
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <h2>Update Current User</h2>
            <Form className="create-form">

                <Form.Field>

                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Middle Name</label>
                    <input placeholder='Middle Name' value={middleName} onChange={(e) => setMiddleName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={() => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Employee Handbook issued' checked={checkbox2} onChange={() => setCheckbox2(!checkbox2)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}
