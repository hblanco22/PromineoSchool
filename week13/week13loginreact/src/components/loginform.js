import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className='form-wrapper'>
                <form>
                    <h3>Log In</h3>

                    <input type='text' name='Chris' style={{display: 'none'}}/>

                    <input type='hidden' name='_next' value=''/>
                    <br></br>

                    <div>
                        <input required type='text' className='userName' name='userName' placeholder='Enter username'/>
                    </div>
                    <br></br>
                    <div>
                        <input required type='password' className='password' name='password' placeholder='Enter password'/>
                    </div>
                    <br></br>
                    <div>
                        <button type='submit' className='btn'>Login</button>
                    </div>

                </form>
            </div>
        )
    }
}