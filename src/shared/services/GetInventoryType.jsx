import React from "react";
import { GetLocaleData } from "./GetLocaleData.jsx";
import { getStorageValue } from "../../config/localStorage.jsx";

export const GetInventoryType = () => {

    const data = GetLocaleData(getStorageValue('language' || 'en'));
    const InventoryType = [
        {
            "name": data.HEAD,
            "id": 1,
        },
        {
            "name": data.SHOULDER,
            "id": 3,
        },
        {
            "name": data.CHEST,
            "id": 5,
        },
        {
            "name": data.LEGS,
            "id": 7,
        },
        {
            "name": data.HANDS,
            "id": 10,
        }
    ];

    return (InventoryType);
}
