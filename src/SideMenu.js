import React from 'react';
import './SideMenu.css';
import { MdCancel } from "react-icons/md";





function SideMenuTop(){
    // Hide side menu in mobile
    function hideSideMenu(){
        document.getElementById('sidemenuid').style.display = "none"
    }
    return(
        <div className='side-menu-top'>  
            <div className='Rectangle-239'>
                <p>
                    SLACA 2019
                </p>
                <MdCancel className='hidesidemenu' onClick={hideSideMenu}/>

            </div>
            <div className='dewey4'>
                <img src={require('./images/dewey4.png') }></img>
            
            </div>
        </div>
    );
};

function SideBar(){
    const [active, setActive] = React.useState("menuitm5")
    
    function select(evt){
        // Getting clicked menu item id
        var clickedId = evt.target.id
        setActive(prevActive => {
            // Deactivating old menu item
            document.getElementById(prevActive).classList.remove("menu-item-ativado");;
            // Setting new clicked menu item id
            return(
               clickedId
        )
        });
        // Activating new clicked menu item 
        document.getElementById(clickedId).classList.add("menu-item-ativado");
    }

    return(
        <div className='side-bar'>
            <div id='menuitm1' className='menu-item-desaivado' onClick={select}>
                <p>Apresentação</p>
            </div>

            <div id='menuitm2' className='menu-item-desaivado' onClick={select}>
                <p>Comitês</p>
            </div>

            <div id='menuitm3' className='menu-item-desaivado' onClick={select}>
                <p>Autores</p>
            </div>

            <div id='menuitm4' className='menu-item-desaivado' onClick={select}>
                <p>Eixos temáticos</p>
            </div>

            <div id='menuitm5' className='menu-item-desaivado menu-item-ativado' onClick={select}>
                <p>Trabalhos</p>
            </div>

            <div id='menuitm6' className='menu-item-desaivado' onClick={select}>
                <p>Contato</p>
            </div>
        </div>
    );
};

function SideMenu() {
  return (
    <>
        <div id='sidemenuid' className="side-menu">
            <SideMenuTop/>
            <SideBar/>
        </div>
    </>
  );
};

export default SideMenu;