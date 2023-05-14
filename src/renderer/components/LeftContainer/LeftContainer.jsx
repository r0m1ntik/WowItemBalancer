import React, { useState } from 'react';
import { Router } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { GetLocaleData } from '../../../shared/services/GetLocaleData.jsx';
import { FindClassImgById } from '../../../shared/constants/FindClassImgById.jsx';
import { FindSpecImgById } from '../../../shared/constants/FindSpecImgById.jsx';
import LeftMenuContainer from './LeftMenuContainer.jsx';

import '../../styles/custom.css'

function SearchContainer({ search }) {
    return (
        <ul className="list-group" id="123">
            <li className="list-group-header">
                <input className="form-control" type="text" placeholder={search} />
            </li>
        </ul>
    )
}

function LeftContainerInformation({ currentLanguage, search, activeComponent, setActiveComponent }) {
    return (
        <>
            <SearchContainer search={search} />
            <LeftMenuContainer currentLanguage={currentLanguage} activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
        </>
    )
}

function ClassItem({ id, name, specs, classColor, activeComponent, setActiveComponent }) {
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

    const handleSpecClick = () => {
        setActiveComponent(id);
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
                        <span className="spec-name" onClick={() => handleSpecClick()}>
                            {spec.name} ({spec.id})
                        </span>
                    </div>
                ))}
            </div>
        )
    };

    return (
        <li
            className={`list-group-item ${isHovered ? 'hovered' : ''}`}
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
            <div className="media-body">
                <span className='class-name'>{name} ({id})</span>
                {isHovered && renderSpecs()}
            </div>
        </li>
    );
}

function LeftContainer({ currentLanguage, activeComponent, setActiveComponent }) {
    const data = GetLocaleData({ currentLanguage });
    return (
        <div className="pane pane-sm sidebar">
            <LeftContainerInformation currentLanguage={currentLanguage} search={data.search} activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
            <ul className="list-group">
                {Object.keys(data.classes).map((classKey) => (
                    <ClassItem key={data.classes[classKey].id} name={data.classes[classKey].name} id={data.classes[classKey].id} specs={data.classes[classKey].specs} classColor={data.classes[classKey].color}
                        activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
                ))}
            </ul>
        </div>
    );
}

export default LeftContainer;
