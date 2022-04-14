import React from 'react';
import './ContentStyling/Discussoes.css';
import { HiPlus } from "react-icons/hi";

let Topic, setTopic

function Default(){
    function createNewTopic(){
        setTopic(() => <CreateTopic/>)
    }
    return(
        <>
            <p className='discus-body-sect1-txt1'>Compartilhe suas ideias ou dúvidas com os autores!</p>

            <div className='discus-body-sect1-imgs'>
                    <img className='img' src={require('./ContentImages/img01.png') }></img>
                
                    <img className='img' src={require('./ContentImages/img02.png') }></img>
                
                    <img className='img' src={require('./ContentImages/img03.png') }></img>
            </div>

            <div className='discus-body-sect1-txt2'>
                <p>Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!</p>
            </div>

            <button className='criar-tópico-btn' onClick={createNewTopic}>
                <HiPlus className='plusicon'/>
                <p>criar tópico</p>
            </button>

        </>
    )
};

function CreateTopic(){
    return(
        <div className='create-new-topic'>
            <p className='create-new-topic-txt1'>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>
            
            <p className='assunto-conteudo-txt'>Assunto</p>
            <input className='assunto-input' placeholder='Defina um tópico sucinto para notificar os autores...'></input>
            
            <p className='assunto-conteudo-txt'>Conteúdo</p>
            <div className='conteudo-content'>
                <textarea className='conteudo-input'></textarea>
                <div className='enviar-div'>
                    <img src={require('./ContentImages/bold.png') }></img>
                    <img src={require('./ContentImages/italic.png') }></img>
                    <button className='enviar-tópico-btn'>Enviar</button>
                </div>
            </div>
            
        </div>
    )
}

function Discussoes(){
    [Topic, setTopic] = React.useState(<Default/>)
    return(
        <div className='discussoes'>
            <div className='discussoes-header'>
                Discussões
            </div>
            <div className='discussoes-body'>
                <div className='discus-body-sect1'>
                    {Topic}
                </div>
            </div>
            
        </div>
    )
};

export default Discussoes;