import React from 'react';
import './Body.css';
import { AiOutlineMenu } from "react-icons/ai";

function BodyHeader(){
    // Show side menu in mobile 
    function showSideMenu(){
        document.getElementById('sidemenuid').style.display = "block"
    }
    
    return(
        <div className='body-header'>
            <div  className='show-side-menu'>
                <AiOutlineMenu className='menu-drop-down' onClick={showSideMenu}/>
            </div>
        </div>
        
    )
}

function Body(){
    return(
        <div className='body'>
            <BodyHeader/>
        </div>
    )
};

export default Body;
