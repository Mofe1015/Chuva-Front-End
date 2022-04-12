import React from 'react';
import './Body.css';
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineLanguage, MdArrowDropDown } from "react-icons/md";


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

            <>
                <div className='header-title-small'>
                    <p>
                        SLACA 2019
                    </p>
                </div>
                
                <div className='header-text-cont'>
                    <p className='header-text-cont-p'>Anais do Simpósio Latino Americano de Ciências de Alimentos </p>
                    <p className='header-text-cont-p' style={{fontSize:"1.4vw"}}>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos </p>
                    <p className='header-text-cont-p'>ISSN: 1234-5678</p>
                </div>
            </>

            <>
                <div className='botão-idiomas-small'>
                    <MdOutlineLanguage/>
                </div>

                <div className='botão-idiomas'>    
                    <MdOutlineLanguage/>
                    <p>PT,BR</p>
                    <MdArrowDropDown/>
                </div>
            </>
            


            <div className='login'>
                <div className='login-text'>
                    <p className='welcome-txt'>Bem vindo!</p>
                    <p className='email-txt'>alguem12@galoascience.com</p>
                </div>
                <div className='login-img'>
                    <div className='notification'>2</div>
                    <img src={require('./images/loginimg.png') }></img>
                </div>
                
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
