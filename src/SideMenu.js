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
    return(
        <div className='side-bar'>
            <div className='menu-item-desaivado'>
                <p>Apresentação</p>
            </div>

            <div className='menu-item-desaivado'>
                <p>Comitês</p>
            </div>

            <div className='menu-item-desaivado'>
                <p>Autores</p>
            </div>

            <div className='menu-item-desaivado'>
                <p>Eixos temáticos</p>
            </div>

            <div className='menu-item-desaivado'>
                <p>Trabalhos</p>
            </div>

            <div className='menu-item-desaivado'>
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