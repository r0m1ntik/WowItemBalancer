import React, { useState } from 'react';
import { GetLocaleData } from '../../../shared/services/GetLocaleData.jsx';
import { FindClassImgById } from '../../../shared/constants/FindClassImgById.jsx';
import { FindSpecImgById } from '../../../shared/constants/FindSpecImgById.jsx';

import '../../styles/custom.css'

function ClassItem({ id, name, specs }) {
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
                ))}
            </div>
        )
    };   

    return (
        <li
            className={`list-group-item ${isHovered ? 'hovered' : ''}`}
            id={name + id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                className="img-circle media-object pull-left"
                src={FindClassImgById(id)}
                alt={name}
                width="24"
                height="24"
            />
            <div className="media-body">
                <strong>{name}</strong>
                {isHovered && renderSpecs()}
            </div>
        </li>
    );
}

function LeftContainer({ currentLanguage }) {
    const data = GetLocaleData({ currentLanguage });
    return (
        <div className="pane pane-sm sidebar">
            <ul className="list-group">
                <li className="list-group-header">
                    <input className="form-control" type="text" placeholder={data.search} />
                </li>
                {Object.keys(data.classes).map((classKey) => (
                <ClassItem key={data.classes[classKey].id} name={data.classes[classKey].name} id={data.classes[classKey].id} specs={data.classes[classKey].specs} />
                ))}
            </ul>
        </div>
    );
}

export default LeftContainer;
