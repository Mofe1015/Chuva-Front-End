import React from 'react';
import './Styling/Content.css';
import TopContent from './Content/TopContent';
import Resumo from './Content/Resumo';
import Discussoes from './Content/Discussoes';


function Content(){
    return(
        <div className='content'>
            <TopContent/>
            <Resumo/>
            <Discussoes/>
        </div>
    )
};

export default Content;