import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (

            <div className='nav-wrapper'>
                <ul className='nav-links'>
                    <li className='nav-item'><a href="../../public/index.html">Home</a></li>
                    <li className='nav-item'><a href="../../public/index.html">About</a></li>
                    <li className='nav-item'><a href="../../public/index.html">Contact</a></li>
                    
                </ul>
            </div>

        )
    }
}