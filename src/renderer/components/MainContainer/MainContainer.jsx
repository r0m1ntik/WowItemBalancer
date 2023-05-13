import React, { useState, useEffect } from 'react';
import { GetLocaleData } from '../../../shared/services/GetLocaleData.jsx';

function MainContainer({ currentLanguage, setLanguage }) {
    // Переводы
    const data = GetLocaleData({currentLanguage});

    // Табы
    const [tabs, setTabs] = useState([]);
    // Счетчик табов
    const [nextTabId, setNextTabId] = useState(1);
    // Активный таб
    const [activeTabId, setActiveTabId] = useState(0);

    // Добавляем таб
    const addTab = () => {
        // Создаем новый таб
        const newTab = { id: nextTabId, title: `${data.tab} ${nextTabId}`};
        // Добавляем новый таб в массив
        setTabs([...tabs, newTab]);
        // Увеличиваем счетчик
        setNextTabId(nextTabId + 1);
        // Устанавливаем активный таб
        setActiveTabId(newTab.id);
    };

    // Закрываем таб
    const closeTab = (id) => {
        let newActiveTabId = activeTabId;
    
        setTabs(tabs.filter((tab) => {
            if (tab.id === id && tab.id === activeTabId) {
                // Если закрываем активный таб, то активным становится таб слева
                const currentIndex = tabs.findIndex((t) => t.id === id);
                newActiveTabId = currentIndex > 0 ? tabs[currentIndex - 1].id : null;
            }
            return tab.id !== id;
        }));
    
        setActiveTabId(newActiveTabId);
    };

    // При удалении всех табов сбрасываем счетчик
    // useEffect выполняется после каждого рендера
    useEffect(() => {
        if (tabs.length === 0) {
            setNextTabId(1);
        }
    }, [tabs]);

    // Выводим табы
    return (
        <>
            <div className="pane">
                <div className="tab-group">
                    {tabs.map((tab) => (
                        <div className={`tab-item ${tab.id === activeTabId ? 'active' : ''}`} key={tab.id}>
                        <span
                            className="icon icon-cancel icon-close-tab"
                            onClick={() => closeTab(tab.id)}
                        ></span>
                            {tab.title}
                        </div>
                    ))}
                    <div className="tab-item tab-item-fixed" onClick={addTab}>
                        <span className="icon icon-plus"></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainContainer;
