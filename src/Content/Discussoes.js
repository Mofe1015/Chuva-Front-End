import React from 'react';
import './ContentStyling/Discussoes.css';
import { HiPlus, HiDotsVertical, HiHeart } from "react-icons/hi";
import { FaCheckDouble } from "react-icons/fa";


let newTopic, setNewTopic   
// Expanding topic (functionality)
function expandTopic(evt){
    // getting id of clicked topic 
    var textid = evt.target.id+'-text'
    var id = evt.target.id+'-extended'
    var extendedtopic = document.getElementById(id)
    var extendedtext = document.getElementById(textid)
    
    const collapsetext = 'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...'
    const expandtext = 'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo?'

    // cheking and updating display state of extended topic
    if (extendedtopic.style.display != 'block'){
        extendedtopic.style.display = 'block'
        extendedtext.textContent = expandtext
    }
    else{
        extendedtopic.style.display = 'none'
        extendedtext.textContent = collapsetext
    };
    
};

// Default layout of Top Discussoes Section 1 (JSX)
function DefaultNewTopic(){

    function createNewTopic(){
        setNewTopic(() => <CreateNewTopic/>)
        document.getElementById('new-topic-id').style.display = 'none'
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

//Criar Novo Topicos (JSX)
function CreateNewTopic(){

    function enviarTopic(){
        setNewTopic(() => <DefaultNewTopic/>)
        document.getElementById('new-topic-id').style.display = 'block'
    }

    function makeBold(){
        var font =  document.getElementById('conteudo-input-id').style
        if (font.fontWeight != 'bold'  ){
            font.fontWeight = 'bold'
        }else{
            font.fontWeight = 'normal'
        }
    };

    function makeItalic(){
        var font =  document.getElementById('conteudo-input-id').style
        if (font.fontStyle != 'italic'  ){
            font.fontStyle = 'italic'
        }else{
            font.fontStyle = 'normal'
        }
    };

    return(
        <div className='create-new-topic'>
            <p className='create-new-topic-txt1'>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>        
            <p className='assunto-conteudo-txt'>Assunto</p>
            <input className='assunto-input' placeholder='Defina um tópico sucinto para notificar os autores...'/>
            
            <p className='assunto-conteudo-txt'>Conteúdo</p>
            <div className='conteudo-content'>
                <textarea id='conteudo-input-id' className='conteudo-input'/>
                <div className='enviar-div'>
                    <img src={require('./ContentImages/bold.png')} onClick={makeBold} />
                    <img src={require('./ContentImages/italic.png')} onClick={makeItalic}/>
                    <button className='enviar-tópico-btn' onClick={enviarTopic}>Enviar</button>
                </div>
            </div>
            
        </div>
    )
};

// Topicos extended (JSX)
function TopicsExtended(props){
    
    function ExtendedRectangle1(props){
        return(
            <div className='extended-rectangle1'>
                <div className='rectangle1-header'>
                    <p className='header-name'>{props.name}</p>
                    <p className='header-tittle'>{props.tittle}</p>
                    <FaCheckDouble className='header-check'/>
                </div>
                <div className='rectangle-body'>
                    <p>{props.content}</p>
                    <p>{props.content2}</p>
                </div>
            </div>
        )
    };
    return(
        <div id={props.extendedid} className='topics-extended'>
            <ExtendedRectangle1
                name = {'Adriano da Silva'}
                tittle = {'Autor'}
                content = {'Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão eimpacto de processo formativo situado impacto de processo formativo processo.'}
            />

            <div className='extended-rectangle2'>
                <p className='header-name' >Carlos Henrique Santos</p>
                <div className='rectangle-body'>
                    <p  >Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo. </p>
                    <p>Obrigada pela resposta, muito interessante o seu trabalho!</p>
                </div>
            </div>

            <ExtendedRectangle1
                name = {'Carlos Henrique Santos'}
                tittle = {'Coautor'}
                content = {'Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.'}
                content2 = {'Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.'}
            />

            <ExtendedRectangle1
                name = {'Ana Carolina'}
                tittle = {'Coautor'}
                content = {'Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.'}
            />
        </div>
    )
};

// Topicos (JSX)
function Topics(props){
    return(
        <div className='topics'>
            <div className='topics-default'>
                <p className='topics-txt1'>Assunto da pergunta aparece aqui</p>
                <p className='topics-txt2'>Carlos Henrique Santos</p>
                <p className='topics-txt3' id={props.textid}>
                    Comecinho da pergunta aparece aqui resente 
                    relato inscreve-se no campo da análise da dimensão e impacto 
                    de processo formativo situado impacto de processo formativo processo...
                </p>
                <div className='topics-btm-itms'>
                    <HiDotsVertical className='topics-menu-btn'/>
                    <button className='topics-like-btn'><HiHeart/></button>
                    <p className='topics-btm-itms-txt'>1 like</p>
                    <p className='topics-btm-itms-txt'>1 resposta</p>
                </div>
            </div>
            <TopicsExtended
                extendedid = {props.extendedid}
                textid = {props.textid}
            />   
        </div>
    )
};

//Todo Discussoes (JSX)
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

                     <div className='new-topic-handler' id='new-topic-id'>
                         <div className='new-topic'>
                             <FaCheckDouble/>
                             <p>Aguardando feedback dos autores</p>
                             <p className='new-topic-txt2'>Editar tópico </p>
                         </div>
                        <Topics/>
                    </div>

                    <div className='topic-handler' id='topic1' onClick={expandTopic}>
                        <Topics
                            extendedid = 'topic1-extended'
                            textid = 'topic1-text'
                        />
                    </div>
                    
                    <div className='topic-handler' id='topic2' onClick={expandTopic}>
                        <Topics
                            extendedid = 'topic2-extended'
                            textid = 'topic2-text'
                        />
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default Discussoes;