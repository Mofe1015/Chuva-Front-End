import React from 'react';
import './ContentStyling/Discussoes.css';
import { HiPlus } from "react-icons/hi";

let newTopic, setNewTopic

function DefaultNewTopic(){

    function createNewTopic(){
        setNewTopic(() => <CreateNewTopic/>)
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

function CreateNewTopic(){

    function enviarTopic(){
        setNewTopic(() => <DefaultNewTopic/>)
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

function Topics(){
    return(
        <div className='topics'>
           <p className='topics-txt1'>Assunto da pergunta aparece aqui</p>
           <p className='topics-txt2'>Carlos Henrique Santos</p>
           <p className='topics-txt3'>
                Comecinho da pergunta aparece aqui resente 
                relato inscreve-se no campo da análise da dimensão e impacto 
                de processo formativo situado impacto de processo formativo processo...
            </p>
            <div className='topics-btm-itms'>
                mofe
            </div>

        </div>
    )
}
function Discussoes(){

    [newTopic, setNewTopic] = React.useState(<DefaultNewTopic/>)
    return(
        <div className='discussoes'>

            <div className='discussoes-header'>
                Discussões
            </div>

            <div className='discussoes-body'>
                <div className='discus-body-sect1'>
                    {newTopic}
                </div>
                <div className='discus-body-sect2'>
                    <Topics/>
                    <Topics/>
                </div>
            </div>
            
        </div>
    )
};

export default Discussoes;