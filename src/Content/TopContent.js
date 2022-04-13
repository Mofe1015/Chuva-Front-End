import React from 'react';
import './ContentStyling/TopContent.css';
import { IoMdDownload } from "react-icons/io";
import { MdStar } from "react-icons/md";

function TopContent(){
    return(
        <div className='top-content'>
            <div className='video-content'>
                <div className='video-content-txt'>
                    <p>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </p>
                </div>
                
                <div className='video'>
                    <img className='video-img' src={require('../images/dewey1.png') }></img>
                    <img className='video-overlay' src={require('../images/vídeooverlay.png') }></img>
                    <div className='video-details'>
                        <p className='video-details-top'>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </p>
                        <div className='video-details-btm' >
                            <img className='video-details-btm-img' src={require('../images/image.png') }></img>
                            <div className='video-details-btm-txt-cont'>
                                <p className='video-details-btm-txt1'>Beatriz Christiane Melo</p>
                                <p className='video-details-btm-txt2'>FCA / Universidade Estadual de Campinas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='details-download-div'>
                <div className='details-download-btns-div'>

                    <button className='download-btn'>
                        <IoMdDownload className='download-icon'/>
                        <p>Download</p>
                    </button>

                    <button className='star-btn'>
                        <MdStar/>
                    </button>

                    <button className='joi-btn'>
                        <img src={require('../images/doi.png') }></img>
                    </button>
                </div>

                <p className='citação'>COMO CITAR ESSE TRABALHO?</p>

                <div className='detalhes'>
                    <div className='detalhes-header'>
                        Detalhes
                    </div>
                    <div className='detalhes-body'>
                        <p className='detalhes-body-txt'>Tipo de Apresentação: <strong>Pôster</strong></p>
                        <p className='detalhes-body-txt'>Eixo temático: <strong>Alimentação e saúde (AS)</strong></p>
                        <p className='detalhes-body-txt'>Palavras-chaves <strong>Alimentos funcionais, alimentação escolar.</strong></p>
                        
                        <p className='detalhes-body-txt' style={{fontSize : "15px", marginTop: "50px"}}><strong>Autores</strong></p>
                        <p className='detalhes-body-txt' style={{fontSize : "15px", marginTop: "0px"}}>Galileo Galilei¹</p>
                        <p className='detalhes-body-txt' style={{fontSize : "15px", marginTop: "0px"}}>Berta Lange de Morretes²</p>
                        <p className='detalhes-body-txt' style={{fontSize : "15px", marginTop: "0px"}}>Isaac Newton³</p>
                        <p className='detalhes-body-txt' style={{fontSize : "15px", marginTop: "0px"}}>Cesar Lattes¹</p>
                        <p className='detalhes-body-txt' style={{fontSize : "15px", marginTop: "0px"}}>Stephen Hawking⁴</p>
                       
                        <ul className='detalhes-body-txt-schools'>
                            <p className='detalhes-body-txt' style={{fontSize : "13px", marginTop: "50px"}}>¹Universidade Estadual de Campinas</p>
                            <p className='detalhes-body-txt' style={{fontSize : "13px", marginTop: "0px"}}>²Universidade de São Paulo</p>
                            <p className='detalhes-body-txt' style={{fontSize : "13px", marginTop: "0px"}}>³Instituto Nacional de Pesquisas Espaciais</p>
                            <p className='detalhes-body-txt' style={{fontSize : "13px", marginBottom: "0px"}}>⁴Universidade Federal do Rio de Janeiro</p>
                        </ul>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
};
export default TopContent;