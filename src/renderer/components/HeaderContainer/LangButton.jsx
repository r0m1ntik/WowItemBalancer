import { US, RU } from 'country-flag-icons/react/3x2';
import React, { useCallback } from "react";

function GetLanguageButton({ currentLanguage, setLanguage }) {
    /**
     * Создать мемоизированную версию функции handleLanguageToggle. 
     * Это гарантирует, что функция не будет пересоздаваться при каждом рендере, за исключением случаев, когда изменяется зависимость setLanguage. 
     * Это повышает производительность, избегая ненужных рендеров
     */
    const handleLanguageToggle = useCallback(() => {
        setLanguage(prevLanguage => (prevLanguage === 'ru' ? 'en' : 'ru'));
    }, [setLanguage]);

    const isRussian = currentLanguage === 'ru';
    const language = isRussian ? 'Русский' : 'English';
    const FlagComponent = isRussian ? RU : US;

    return (
        <button className="btn btn-default pull-right" onClick={handleLanguageToggle}>
            <span className="lang-btn-header">
                <FlagComponent title={language} className='flag-icon' />
            </span>
            {language}
        </button>
    );
}

export default GetLanguageButton;