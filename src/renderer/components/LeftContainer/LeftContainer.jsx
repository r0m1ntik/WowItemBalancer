import React, { useState } from 'react';

import { GetLocaleData } from '../../../shared/services/GetLocaleData.jsx';
import { FindClassImgById } from '../../../shared/constants/FindClassImgById.jsx';
import { FindSpecImgById } from '../../../shared/constants/FindSpecImgById.jsx';

import '../../styles/custom.css'

const menuItems = [
    { id: 12, icon: 'icon-info', label: 'about' },
    { id: 13, icon: 'icon-docs', label: 'documentation' },
    { id: 14, icon: 'icon-cog', label: 'settings' },
    { id: 15, icon: 'icon-help', label: 'help' },
];

function SearchContainer({ search }) {
    return (
        <ul className="list-group">
            <li className="list-group-header">
                <input className="form-control" type="text" placeholder={search} />
            </li>
        </ul>
    )
}

function ClassItem({ id, name, specs, classColor, activeContainer, setActiveContainer, activeTab, setActiveTab, setSelectedContainer, selectedContainer }) {
    // Состояние
    const [isHovered, setIsHovered] = useState(false);

    // Обработчики событий
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // Обработчики событий 
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        setSelectedContainer(id);
    };

    const renderSpecs = () => {
        return (
            <div className="specs-container">
                {specs.map((spec, index) => (
                    <div key={index} className="spec-item">
                        <img
                            className="img-circle spec-icon pull-left"
                            src={FindSpecImgById(spec.id)}
                            alt={spec.name}
                            width="16"
                            height="16"
                        />
                        <span className="spec-name">
                            {spec.name} ({spec.id})
                        </span>
                    </div>
                ))
                }
            </div>
        )
    };

    return (
        <li
            className={`list-group-item ${isHovered || selectedContainer === id ? 'hovered' : ''}`}
            style={{
                borderRight: `4px solid ${classColor}`
            }}
            id={name + id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                className="img-circle media-object pull-left"
                src={FindClassImgById(id)}
                alt={name}
                width="18"
                height="18"
            />
            <div className="media-body" onClick={() => handleClick()}>
                <span className='class-name'>{name} ({id})</span>
                {isHovered && renderSpecs()}
            </div>
        </li>
    );
}

function LeftContainer({ currentLanguage, activeContainer, setActiveContainer, activeTab, setActiveTab, setSelectedContainer, selectedContainer }) {
    const data = GetLocaleData(currentLanguage);
    const handleButtonClick = (id) => {
        setSelectedContainer(id);
    };
    return (
        <div className="pane pane-sm sidebar">
            <SearchContainer search={data.search} />
            <nav className="nav-group">
                <h5 className="nav-group-title">{data.mainMenu}</h5>
                {menuItems.map(item => (
                    <span
                        key={item.id}
                        className={`nav-group-item ${selectedContainer === item.id ? 'active' : ''}`}
                        onClick={() => handleButtonClick(item.id)}
                    >
                        <span className={`icon ${item.icon}`}></span>
                        {data[item.label]}
                    </span>
                ))}
            </nav>
            <ul className="list-group">
                {Object.keys(data.classes).map((classKey) => (
                    <ClassItem key={data.classes[classKey].id} name={data.classes[classKey].name} id={data.classes[classKey].id} specs={data.classes[classKey].specs} classColor={data.classes[classKey].color}
                        activeContainer={activeContainer} setActiveContainer={setActiveContainer} activeTab={activeTab} setActiveTab={setActiveTab} setSelectedContainer={setSelectedContainer} selectedContainer={selectedContainer} />
                ))}
            </ul>
        </div>
    );
}

export default LeftContainer;
