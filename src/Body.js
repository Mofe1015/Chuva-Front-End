import React from 'react';
import './Body.css';
import Header from './Header';
import Content from './Content';




function Body(){
    return(
        <div className='body'>
            <Header/>
            <Content/>
        </div>
    )
};

export default Body;
