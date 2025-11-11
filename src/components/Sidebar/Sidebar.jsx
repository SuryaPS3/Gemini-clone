import React, {useContext, useState} from 'react';
import './Sidebar.css';
import {assets} from '../../assets/assets.js';
import { Context } from '../../context/context.jsx';
const Sidebar = () =>{
    //state variables 
    const [extended, setExtended] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { prevPrompts, setRecentPrompt, setShowResult, setResultData, setLoading, loadConversation } = useContext(Context);

    const newChat = () => {
        setShowResult(false);
        setResultData("");
        setRecentPrompt("");
        setLoading(false);
    }
    return (
        <>
            {mobileMenuOpen && <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}></div>}
            <div className={`sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                <div className="top">
                <img 
                    onClick={() => {
                        setExtended(!extended);
                        setMobileMenuOpen(!mobileMenuOpen);
                    }} 
                    className="menu" 
                    src={assets.menu_icon} 
                    alt="Logo" 
                />
            
            <div onClick={newChat} className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extended?<p>New Chat</p>:null}
            </div>
            {extended?
            <div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompts.map((prompt, index) => {
                    return (
                        <div 
                            key={index} 
                            onClick={() => loadConversation(prompt)} 
                            className="recent-entry"
                        >
                            <img src={assets.message_icon} alt="" />
                            <p>{prompt.slice(0, 18)} ...</p>
                        </div>
                    )
                })}
                
            </div>
            :null}   
              </div>
            
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended?<p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended?<p>Settings</p>:null}
                </div>
            </div>
        </div>
        </>
    )
}

export default Sidebar;