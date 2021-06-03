import React from 'react';
import './Navbar.css';
import piePic from '../../assets/download.jpg';
import Logout from '../Logout/Logout';

const Navbar = (props) => {
    console.log(props);
    return(
        <div>
            <nav>
                <img id='piePic' src={piePic} alt='pie'/>
                <h1>Pie Pie Pie Pie Pie Pie Pie Pie Pie Pie Pie Pie Pie Pie Pie Pie PiePie Pie Pie Pie Pie PiePie Pie Pie Pie Pie Pie Pie Pie Pie Pie Pie Pie Pie Pie Pie Pie Pie Pie Pie Pie </h1>
                <Logout clearSession={props.clearSession}/>
            </nav>
        </div>
    )
}

export default Navbar