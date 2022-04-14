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

    function enviarTopic(){
        setTopic(() => <Default/>)
    }

    function makeBold(){
        var font =  document.getElementById('conteudo-input-id').style
        if (font.fontWeight != 'bold'  ){
            font.fontWeight = 'bold'
        }else{
            font.fontWeight = 'normal'
        }
    }

    function makeItalic(){
        var font =  document.getElementById('conteudo-input-id').style
        if (font.fontStyle != 'italic'  ){
            font.fontStyle = 'italic'
        }else{
            font.fontStyle = 'normal'
        }
    }

    return(
        <div className='create-new-topic'>
            <p className='create-new-topic-txt1'>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>
            
            <p className='assunto-conteudo-txt'>Assunto</p>
            <input className='assunto-input' placeholder='Defina um tópico sucinto para notificar os autores...'></input>
            
            <p className='assunto-conteudo-txt'>Conteúdo</p>
            <div className='conteudo-content'>
                <textarea id='conteudo-input-id' className='conteudo-input'></textarea>
                <div className='enviar-div'>
                    <img src={require('./ContentImages/bold.png')} onClick={makeBold} />
                    <img src={require('./ContentImages/italic.png')} onClick={makeItalic}/>
                    <button className='enviar-tópico-btn' onClick={enviarTopic}>Enviar</button>
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