import React from 'react';
import './Logout.css';
import logoutPic from '../../../src/assets/logout.jpg';
const Logout = (props) => {
    return(
        <div>
            <img id="logout" 
                src={logoutPic} 
                alt="Power Button" 
                onClick={props.clearSession} />
        </div>
    )
}
export default Logout