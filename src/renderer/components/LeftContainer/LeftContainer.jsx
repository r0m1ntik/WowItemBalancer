import React, { useState } from 'react';
import { GetLocaleData } from '../../../shared/services/GetLocaleData.jsx';
import { FindClassImgById } from '../../../shared/constants/FindClassImgById.jsx';
import { FindSpecImgById } from '../../../shared/constants/FindSpecImgById.jsx';

import '../../styles/custom.css'

function SearchContainer({search}) {
    return (
        <ul className="list-group" id="123">     
            <li className="list-group-header">
                <input className="form-control" type="text" placeholder={search} />
            </li>
        </ul>
    )
}

function LeftConainerButtonMenu({ currentLanguage }) {
    const data = GetLocaleData({currentLanguage});
    return (
        <nav className="nav-group">
            <h5 className="nav-group-title">{data.mainMenu}</h5>
            <span className="nav-group-item">
                <span className="icon icon-info"></span>
                {data.about}
            </span>            
            <a className="nav-group-item active">
                <span className="icon icon-docs"></span>
                {data.documentation}
            </a>
            <span className="nav-group-item">
                <span className="icon icon-cog"></span>
                {data.settings}
            </span>            
            <span className="nav-group-item">
                <span className="icon icon-help"></span>
                {data.help}
            </span>
        </nav>
    )
}

function LeftContainerInformation({ currentLanguage, search }) {
    return (
        <>
            <SearchContainer search={search} />
            <LeftConainerButtonMenu currentLanguage={currentLanguage} />
        </>
    )
}

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
                width="18"
                height="18"
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
            <LeftContainerInformation currentLanguage={currentLanguage} search={data.search} />     
            <ul className="list-group">
                {Object.keys(data.classes).map((classKey) => (
                <ClassItem key={data.classes[classKey].id} name={data.classes[classKey].name} id={data.classes[classKey].id} specs={data.classes[classKey].specs} />
                ))}
            </ul>
        </div>
    );
}

export default LeftContainer;
