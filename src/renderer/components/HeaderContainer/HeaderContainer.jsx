import React from 'react';
import HeaderMenu from './HeaderMenu.jsx';
import GetLanguageButton from './LangButton.jsx';

function Header({ currentLanguage, setLanguage }) {
    return (
        <>
        <header className="toolbar toolbar-header">
            <h1 className="title"></h1>
            <div className="toolbar-actions">
                <HeaderMenu currentLanguage={currentLanguage} />
                <GetLanguageButton currentLanguage={currentLanguage} setLanguage={setLanguage} />
            </div>
        </header>
    </>
    );
}

export default Header;
