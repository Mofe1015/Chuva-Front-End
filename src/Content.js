import React from 'react';
import './Styling/Content.css';


function TopContent(){
    return(
        <div className='top-content'>
            <div className='video-content'>
                <div className='video-content-txt'>
                    <p>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </p>
                </div>
                
                <div className='video'>
                    <img className='video-img' src={require('./images/dewey1.png') }></img>
                    <img className='video-overlay' src={require('./images/vídeooverlay.png') }></img>
                    <div className='video-details'>
                        <p className='video-details-top'>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </p>
                        <div className='video-details-btm' >
                            <img className='video-details-btm-img' src={require('./images/image.png') }></img>
                            <div className='video-details-btm-txt-cont'>
                                <p className='video-details-btm-txt1'>Beatriz Christiane Melo</p>
                                <p className='video-details-btm-txt2'>FCA / Universidade Estadual de Campinas</p>
                            </div>
                        </div>
                    </div>
                </div>
  
            </div>
            <div className='details-download-div'>
                details download
            </div>
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