import React from 'react';
import './Styling/Body.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';



function Body(){
    return(
        <body className='body'>
            <Header/>
            <Content/>
            <Footer />
        </body>
    )
};

export default Body;
