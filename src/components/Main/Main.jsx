import React from 'react';
import './Main.css';
import {assets} from '../../assets/assets';
const Main = () => {
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
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
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder="Type your message here..." />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
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