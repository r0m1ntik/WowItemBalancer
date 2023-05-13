import { StrictMode, useState } from 'react';
import * as React from 'react';
import { createRoot } from "react-dom/client";

import Header from './HeaderContainer/HeaderContainer.jsx';
import LeftContainer from './LeftContainer/LeftContainer.jsx';
import MainContainer from './MainContainer/MainContainer.jsx';
import FooterContainer from './FooterContainer/FooterContainer.jsx';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {
    const [currentLanguage, setLanguage] = useState('ru');
    return (
        <StrictMode>
            <Header currentLanguage={currentLanguage} setLanguage={setLanguage}/>
            <div className="window-content">
                <div className="pane-group">
                    <LeftContainer currentLanguage={currentLanguage}/>
                    <MainContainer currentLanguage={currentLanguage} setLanguage={setLanguage}/>
                </div>
            </div>
            <FooterContainer />
        </StrictMode>
    )
}
root.render(
    <App />
);