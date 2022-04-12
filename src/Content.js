import React from 'react';
import './Styling/Content.css';


function TopContent(){
    return(
        <div className='topcontent'>
            mofe
        </div>
    )
}
function Content(){
    return(
        <div className='content'>
            <TopContent/>
        </div>
    )
}

export default Content;