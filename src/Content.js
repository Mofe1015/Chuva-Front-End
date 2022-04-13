import React from 'react';
import './Styling/Content.css';
import { IoMdDownload } from "react-icons/io";
import { MdStar } from "react-icons/md";
import TopContent from './Content/TopContent';


function Content(){
    return(
        <div className='content'>
            <TopContent/>
        </div>
    )
}

export default Content;