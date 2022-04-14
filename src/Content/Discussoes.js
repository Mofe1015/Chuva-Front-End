import React from 'react';
import './ContentStyling/Discussoes.css';
import { HiPlus } from "react-icons/hi";


function Discussoes(){
    return(
        <div className='discussoes'>
            <div className='discussoes-header'>
                Discussões
            </div>
            <div className='discussoes-body'>
                <div className='discus-body-sect1'>

                    <p className='discus-body-sect1-txt1'>Compartilhe suas ideias ou dúvidas com os autores!</p>

                    <div className='discus-body-sect1-imgs'>
                            <img className='img' src={require('./ContentImages/img01.png') }></img>
                        
                            <img className='img' src={require('./ContentImages/img02.png') }></img>
                        
                            <img className='img' src={require('./ContentImages/img03.png') }></img>
                    </div>

                    <div className='discus-body-sect1-txt2'>
                        <p>Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!</p>
                    </div>

                    <button className='criar-tópico-btn'>
                        <HiPlus className='plusicon'/>
                        <p>criar tópico</p>
                    </button>

                </div>
            </div>
            
        </div>
    )
};

export default Discussoes;