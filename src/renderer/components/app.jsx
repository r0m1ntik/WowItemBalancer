import React, { StrictMode, useEffect, useState } from 'react';
import { createRoot } from "react-dom/client";

import Header from './HeaderContainer/HeaderContainer.jsx';
import LeftContainer from './LeftContainer/LeftContainer.jsx';
import MainContainer from './MainContainer/MainContainer.jsx';
import FooterContainer from './FooterContainer/FooterContainer.jsx';

import WelcomeContainer from './MainContainer/Pages/WelcomeContainer/WelcomeContainer.jsx';
import WarriorContainer from './MainContainer/Pages/Classes/WarriorContainer/WarriorContainer.jsx';
import PaladinContainer from './MainContainer/Pages/Classes/PaladinContainer/PaladinContainer.jsx';
import HunterContainer from './MainContainer/Pages/Classes/HunterContainer/HunterContainer.jsx';
import RogueContainer from './MainContainer/Pages/Classes/RogueContainer/RogueContainer.jsx';
import PriestContainer from './MainContainer/Pages/Classes/PriestContainer/PriestContainer.jsx';
import DeathKnightContainer from './MainContainer/Pages/Classes/DeathKnightContainer/DeathKnightContainer.jsx';
import ShamanContainer from './MainContainer/Pages/Classes/ShamanContainer/ShamanContainer.jsx';
import MageContainer from './MainContainer/Pages/Classes/MageContainer/MageContainer.jsx';
import WarlockContainer from './MainContainer/Pages/Classes/WarlockContainer/WarlockContainer.jsx';
import DruidContainer from './MainContainer/Pages/Classes/DruidContainer/DruidContainer.jsx';
import ErrorContainer from './MainContainer/Pages/Error/ErrorContainer.jsx';
import AboutContainer from './MainContainer/Pages/About/About.jsx';
import DocumentationContainer from './MainContainer/Pages/DocumentationContainer/DocumentationContainer.jsx';
import SettingContainer from './MainContainer/Pages/SettingContainer/SettingContainer.jsx';
import HelpContainer from './MainContainer/Pages/HelpContainer/HelpContainer.jsx';

const App = () => {

    const [currentLanguage, setLanguage] = useState('en');
    const components = [
        { name: 'Welcome', component: WelcomeContainer, titleRU: "Добро пожаловать", titleEN: "Welcome" },                  // 0
        { name: 'Warrior', component: WarriorContainer, titleRU: "Воин", titleEN: "Warrior" },                              // 1
        { name: 'Paladin', component: PaladinContainer, titleRU: "Паладин", titleEN: "Paladin" },                           // 2
        { name: 'Hunter', component: HunterContainer, titleRU: "Охотник", titleEN: "Hunter" },                              // 3
        { name: 'Rogue', component: RogueContainer, titleRU: "Разбойник", titleEN: "Rogue" },                               // 4
        { name: 'Priest', component: PriestContainer, titleRU: "Жрец", titleEN: "Priest" },                                 // 5    
        { name: 'DeathKnight', component: DeathKnightContainer, titleRU: "Рыцарь смерти", titleEN: "Death Knight" },        // 6
        { name: 'Shaman', component: ShamanContainer, titleRU: "Шаман", titleEN: "Shaman" },                                // 7
        { name: 'Mage', component: MageContainer, titleRU: "Маг", titleEN: "Mage" },                                        // 8
        { name: 'Warlock', component: WarlockContainer, titleRU: "Чернокнижник", titleEN: "Warlock" },                      // 9
        { name: 'Error', component: ErrorContainer, titleRU: "Ошибка", titleEN: "Error" },                                  // 10
        { name: 'Druid', component: DruidContainer, titleRU: "Друид", titleEN: "Druid" },                                   // 11
        { name: 'About', component: AboutContainer, titleRU: "О программе", titleEN: "About" },                             // 12
        { name: 'Documentation', component: DocumentationContainer, titleRU: "Документация", titleEN: "Documentation" },    // 13
        { name: 'Setting', component: SettingContainer, titleRU: "Настройки", titleEN: "Setting" },                         // 14
        { name: 'Help', component: HelpContainer, titleRU: "Помощь", titleEN: "Help" }                                      // 15
    ];

    const [activeContainer, setActiveContainer] = useState(0);
    const [activeTab, setActiveTab] = useState(1);
    const [selectedContainer, setSelectedContainer] = useState(0);
    /**
     * Массив с данными о вкладках
     */
    const [tabs, setTabs] = useState([]);

    /**
     * Функция для передачи данных из MainContainer в App
     */
    const mainContainerToApp = (data) => {
        setTabs(data);
    }

    useEffect(() => {
        // DEBUG
        console.log("activeContainer: ", activeContainer, "activeTab: ", activeTab);
        console.log(tabs);
    }, [tabs]);

    const GetActiveContainer = React.memo(components[activeContainer].component);

    return (
        <StrictMode>
            <Header currentLanguage={currentLanguage} setLanguage={setLanguage} />
            <div className="window-content">
                <div className="pane-group">
                    <LeftContainer
                        currentLanguage={currentLanguage}
                        activeContainer={activeContainer}
                        setActiveContainer={setActiveContainer}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        setSelectedContainer={setSelectedContainer}
                        selectedContainer={selectedContainer}
                    />
                    <div className="pane">
                        <MainContainer
                            currentLanguage={currentLanguage}
                            activeContainer={activeContainer} s
                            setActiveContainer={setActiveContainer}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            ruTitle={components[selectedContainer].titleRU}
                            enTitle={components[selectedContainer].titleEN}
                            mainContainerToApp={mainContainerToApp}
                            setSelectedContainer={setSelectedContainer}
                            selectedContainer={selectedContainer}
                        />
                        <GetActiveContainer />
                    </div>
                </div>
            </div>
            <FooterContainer />
        </StrictMode>
    );
};


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);