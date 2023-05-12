import { US, RU } from 'country-flag-icons/react/3x2';
import React from "react";

function GetLanguageButton({ currentLanguage, setLanguage }) {
    const isRussian = currentLanguage === 'ru';
    const language = isRussian ? 'Русский' : 'English';
    const FlagComponent = isRussian ? RU : US;

    const handleLanguageToggle = () => {
        setLanguage(isRussian ? 'en' : 'ru');
    };

    return (
        <button className="btn btn-default pull-right" onClick={handleLanguageToggle}>
            <span className="icon icon-text">
                <FlagComponent title={language} />
            </span>
            {language}
        </button>
    );
}

export default GetLanguageButton;
