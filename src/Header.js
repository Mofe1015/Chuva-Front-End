import React from 'react';
import './Styling/Header.css';
import { AiOutlineMenu, AiFillCaretDown } from "react-icons/ai";
import { MdOutlineLanguage, MdArrowDropDown } from "react-icons/md";

function Header(){
    // Show side menu in mobile 
    function showSideMenu(){
        document.getElementById('sidemenuid').style.display = "block"
    }

    function showDetails(){
        var moreDetails = document.getElementById('header-text-cont-small')
        if(moreDetails.style.height == "80px"){        
            moreDetails.style.height ='0px';
            moreDetails.style.marginBottom ='0px';
            document.getElementById('show-details').style.transform ='rotate(-360deg)'; 
        }else{
            moreDetails.style.height ='80px';
            moreDetails.style.marginBottom ='-80px';
            document.getElementById('show-details').style.transform ='rotate(180deg)'; 
        }
        
    }

    return(
        <header className='body-header'>
            
            <div  className='show-side-menu'>
                <AiOutlineMenu className='menu-drop-down' onClick={showSideMenu}/>
            </div>
            
            <>
                <div className='header-title-small' onClick={showDetails}>
                    <p>
                        SLACA 2019
                        <AiFillCaretDown id='show-details'/>
                    </p>
                </div>
                
                <div className='header-text-cont'>
                    <p className='header-text-cont-p'>Anais do Simpósio Latino Americano de Ciências de Alimentos </p>
                    <p className='header-text-cont-p' style={{fontSize:"1.4vw"}}>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos </p>
                    <p className='header-text-cont-p'>ISSN: 1234-5678</p>
                </div>
            </>

            <>

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
        </header>
        
    )
};

export default Header;