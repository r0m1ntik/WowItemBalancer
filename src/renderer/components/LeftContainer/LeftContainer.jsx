import React from "react";
import { GetLocaleData } from '../../../shared/services/GetLocaleData.jsx';
import { findClassImgById } from '../../../shared/constants/findClassImgById.jsx';

function ClassItem({ id, name })
{
    return (
        <li className="list-group-item" id={name+id}>
        <img className="img-circle media-object pull-left" src={findClassImgById(id)} alt={name} width="24" height="24" />
        <div className="media-body">
            <strong>{name}</strong>
        </div>
    </li>
    )
}

function LeftContainer({currentLanguage}) {
    const data = GetLocaleData({currentLanguage});
    return (
        <div className="pane pane-sm sidebar">
            <ul className="list-group">
                <li className="list-group-header">
                    <input className="form-control" type="text" placeholder={data.search} />
                </li>
                {Object.keys(data.classes).map((classKey) => (
                    <ClassItem key={data.classes[classKey].id} name={data.classes[classKey].name} id={data.classes[classKey].id}/>
                ))}
            </ul>
        </div>
    )
}

export default LeftContainer;