import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://627e7dde271f386ceff943b2.mockapi.io/resourceData`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, firstName, lastName, middleName,addressOne, addressTwo, checkbox, checkbox2 } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Middle Name', middleName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Address', addressOne);
        localStorage.setItem('City, State', addressTwo);
        localStorage.setItem('Checkbox Value', checkbox)
        localStorage.setItem('Checkbox2 Value', checkbox2)
    }

    const getData = () => {
        axios.get(`https://627e7dde271f386ceff943b2.mockapi.io/resourceData`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://627e7dde271f386ceff943b2.mockapi.io/resourceData/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <h2>Current User List</h2>

            <Table singleLine >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Middle Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>City, State</Table.HeaderCell>                        
                        <Table.HeaderCell>Terms</Table.HeaderCell>
                        <Table.HeaderCell>Handbook</Table.HeaderCell>
                        <Table.HeaderCell>Edit</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.middleName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.addressOne}</Table.Cell> 
                                <Table.Cell>{data.addressTwo}</Table.Cell>                                 
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Table.Cell>{data.checkbox2 ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}>Edit</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
