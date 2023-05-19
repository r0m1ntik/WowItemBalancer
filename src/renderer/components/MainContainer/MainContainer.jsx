import React, { useState, useEffect, useMemo } from 'react';

function MainContainer({ currentLanguage, activeContainer, setActiveContainer, ruTitle, enTitle, mainContainerToApp, selectedContainer, setSelectedContainer }) {

    const [tabs, setTabs] = useState([{ id: 1, nameRU: ruTitle, nameEN: enTitle, container: activeContainer }]);
    const [nextTabId, setNextTabId] = useState(2);
    const [activeTabId, setActiveTabId] = useState(1);

    const addTab = () => {
        const newTabId = nextTabId;
        const newTab = {
            id: newTabId,
            nameRU: ruTitle,
            nameEN: enTitle,
            container: selectedContainer,
        };
        setTabs((prevTabs) => [...prevTabs, newTab]);
        setNextTabId((prevNextTabId) => prevNextTabId + 1);
        setActiveTabId(newTabId);
        setSelectedContainer(0);
    };

    // Закрываем таб
    const closeTab = (tabID) => {
        setTabs((prevTabs) => {
            const updatedTabs = prevTabs.filter((tab) => tab.id !== tabID).map((tab, index) => ({
                ...tab,
                id: index + 1, // Réattribuer les identifiants des onglets
            }));
            setActiveTabId(updatedTabs.length);
            return updatedTabs;
        });
    };

    /**
     * Effect to update the active container when the tabs change
     * and to update the active tab when the active container changes
     */
    useEffect(() => {
        if (tabs.length === 1) {
            setNextTabId(2);
            setActiveTabId(1)
            setActiveContainer(0);
        } else if (tabs.length > 0) {
            setActiveContainer(tabs[tabs.length - 1].container);
        }
        mainContainerToApp(tabs);
    }, [tabs]);

    const handleClick = (container, tabID) => {
        setActiveTabId(tabID);
        setActiveContainer(container);
    };

    // Function to update the names of the tabs based on the current language
    const updateTabNames = () => {
        const updatedTabs = tabs.map((tab) => {
            return {
                ...tab,
                name: currentLanguage === 'ru' ? tab.nameRU : tab.nameEN,
            };
        });
        setTabs(updatedTabs);
    };

    useMemo(() => {
        updateTabNames();
    }, [currentLanguage]);

    useEffect(() => {
        updateTabNames();
    }, [currentLanguage]);

    return (
        <div className="tab-group">
            {tabs.map((tab) => (
                <div className={`tab-item ${tab.id === activeTabId ? 'active' : ''}`} key={tab.id} onClick={() => handleClick(tab.container, tab.id)}>
                    {tab.container !== 0 ? <span
                        className="icon icon-cancel icon-close-tab"
                        onClick={() => closeTab(tab.id)}
                    ></span> : null}
                    {currentLanguage === 'ru' ? tab.nameRU : tab.nameEN}
                </div>
            ))}
            {selectedContainer != 0 ?
                <div className="tab-item tab-item-fixed" onClick={() => addTab()}>
                    <span className="icon icon-plus"></span>
                </div>
                : null}
        </div>
    );
}

export default MainContainer;