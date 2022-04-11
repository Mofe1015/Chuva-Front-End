import React from 'react';
import './SideMenu.css';

function SideMenuTop(){
    return(
        <>
        <div className='Rectangle-239'>
            <p>
                SLACA 2019
            </p>
        </div>
        <div className='dewey4'>
            <img src={require('./images/dewey4.png') }></img>
        </div>
        </>
    );
};
function SideBar(){
    function select(evt){
        
        var clickedId = evt.target.id
        document.getElementById('menuitm1').classList.remove("menu-item-ativado");;
        document.getElementById('menuitm2').classList.remove("menu-item-ativado");;
        document.getElementById('menuitm3').classList.remove("menu-item-ativado");;
        document.getElementById('menuitm4').classList.remove("menu-item-ativado");;
        document.getElementById('menuitm5').classList.remove("menu-item-ativado");;
        document.getElementById('menuitm6').classList.remove("menu-item-ativado");;

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
    <div className="side-menu">
        <SideMenuTop/>
        <SideBar/>
    </div>
  );
};

export default SideMenu;