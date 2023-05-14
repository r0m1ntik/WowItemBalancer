import React, { StrictMode, useState } from 'react';
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

const components = [
    { name: 'Welcome', component: WelcomeContainer },
    { name: 'Warrior', component: WarriorContainer },
    { name: 'Paladin', component: PaladinContainer },
    { name: 'Hunter', component: HunterContainer },
    { name: 'Rogue', component: RogueContainer },
    { name: 'Priest', component: PriestContainer },
    { name: 'DeathKnight', component: DeathKnightContainer },
    { name: 'Shaman', component: ShamanContainer },
    { name: 'Mage', component: MageContainer },
    { name: 'Warlock', component: WarlockContainer },
    { name: 'Error', component: ErrorContainer },
    { name: 'Druid', component: DruidContainer },
    { name: 'About', component: AboutContainer },
    { name: 'Documentation', component: DocumentationContainer },
    { name: 'Setting', component: SettingContainer },
    { name: 'Help', component: HelpContainer }
];

const App = () => {
    const [currentLanguage, setLanguage] = useState('en');
    const [activeComponent, setActiveComponent] = useState(0);

    const changeComponent = (index) => {
        setActiveComponent(index);
    };

    const ActiveComponent = components[activeComponent].component;

    return (
        <StrictMode>
            <Header currentLanguage={currentLanguage} setLanguage={setLanguage} />
            <div className="window-content">
                <div className="pane-group">
                    <LeftContainer currentLanguage={currentLanguage} activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
                    <div className="pane">
                        <MainContainer currentLanguage={currentLanguage} setLanguage={setLanguage} activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
                        <ActiveComponent />
                    </div>
                </div>
            </div>
            <FooterContainer />
        </StrictMode>
    );
};


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <App />
);