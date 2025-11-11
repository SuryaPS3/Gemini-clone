import React, { useContext } from 'react';
import './Main.css';
import {assets} from '../../assets/assets';
import { Context } from '../../context/context';

const Main = () => {
    const { 
        onSent, 
        recentPrompt, 
        showResult, 
        loading, 
        resultData, 
        input, 
        setInput 
    } = useContext(Context);

    const toggleMobileMenu = () => {
        // This will trigger the sidebar menu from the main component
        const menuButton = document.querySelector('.sidebar .menu');
        if (menuButton) {
            menuButton.click();
        }
    };
    return (
        <div className="main">
            <div className="nav">
                <div className="nav-left">
                    <img 
                        className="mobile-menu-btn" 
                        onClick={toggleMobileMenu} 
                        src={assets.menu_icon} 
                        alt="Menu" 
                    />
                    <p>Gemini</p>
                </div>
                <img src={assets.user_icon} alt="User" />
            </div>
            <div className="main-container">
                {!showResult ? (
                    <>
                        <div className="greet">
                            <p>
                                <span>
                                    Welcome Surya!
                                </span>
                            </p>
                            <p><span>How can I assist you today?</span></p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest something about routines</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                        
                            <div className="card">
                                <p>Suggest something about routines</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                        
                            <div className="card">
                                <p>Suggest something about routines</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                        
                            <div className="card">
                                <p>Suggest something about routines</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="User" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{__html: resultData}}></p>
                            )}
                        </div>
                    </div>
                )}
                <div className="main-bottom">
                    <div className="search-box">
                        <input 
                            onChange={(e) => setInput(e.target.value)} 
                            value={input} 
                            type="text" 
                            placeholder="Type your message here..."
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && input) {
                                    onSent();
                                }
                            }}
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img 
                                onClick={() => input ? onSent() : null} 
                                src={assets.send_icon} 
                                alt="" 
                                style={{ cursor: input ? 'pointer' : 'default' }}
                            />
                        </div>
                    </div>
                    <p className="info">
                        Gemini is an AI-powered assistant that helps you with a variety of tasks, from answering questions to generating content.                     </p>
                </div>
            </div>
        </div>
    )
}

export default Main;