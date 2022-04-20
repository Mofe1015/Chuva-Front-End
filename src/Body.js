import React from 'react';
import './Styling/Body.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


function Body(){
    return(
        <main className='body'>
            <Header/>
            <Content/>
            <Footer />
        </main>
    )
};

export default Body;
