import React from 'react';
import './Styling/Content.css';
import TopContent from './Content/TopContent';
import Resumo from './Content/Resumo';


function Content(){
    return(
        <div className='content'>
            <TopContent/>
            <Resumo/>
            
        </div>
    )
}

export default Content;