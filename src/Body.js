import React from 'react';
import './Styling/Body.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


function Body(){
    return(
        <div className='body'>
            <Header/>
            <Content/>
            <Footer />
        </div>
    )
};

export default Body;
