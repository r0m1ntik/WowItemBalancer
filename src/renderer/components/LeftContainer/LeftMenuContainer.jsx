import React from 'react';
import { GetLocaleData } from '../../../shared/services/GetLocaleData.jsx';

const menuItems = [
    { id: 12, icon: 'icon-info', label: 'about' },
    { id: 13, icon: 'icon-docs', label: 'documentation' },
    { id: 14, icon: 'icon-cog', label: 'settings' },
    { id: 15, icon: 'icon-help', label: 'help' },
];

function LeftMenuContainer({ currentLanguage, activeComponent, setActiveComponent }) {
    const data = GetLocaleData({ currentLanguage });

    const handleButtonClick = (id) => {
        setActiveComponent(id);
    };

    return (
        <nav className="nav-group">
            <h5 className="nav-group-title">{data.mainMenu}</h5>
            {menuItems.map(item => (
                <span
                    key={item.id}
                    className={`nav-group-item ${activeComponent === item.id ? 'active' : ''}`}
                    onClick={() => handleButtonClick(item.id)}
                >
                    <span className={`icon ${item.icon}`}></span>
                    {data[item.label]}
                </span>
            ))}
        </nav>
    );
}

export default LeftMenuContainer;