import React from "react";
import SettingClasses from "../SettingClasses.jsx";
import { GetLocaleData } from "../../../../../../shared/services/GetLocaleData.jsx";
import { getStorageValue } from "../../../../../../config/localStorage.jsx";

const WarriorContainer = () => {
    // Получаем язык из localStorage
    const lang = getStorageValue("language", 'en');
    // Получаем данные для выбранного языка
    const data = GetLocaleData(lang);
    // Получаем название класса и id специализации
    const nameClass = data.classes[0].name;
    const specId = data.classes[0].specs;

    const localStorageName = "warrior";
    // Возвращаем компонент
    return (
        <SettingClasses data={data} lang={lang} nameClass={nameClass} specId={specId} localStorageName={localStorageName} />
    );
};

export default WarriorContainer;
