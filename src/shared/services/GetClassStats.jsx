import React from "react";
import { GetLocaleData } from "./GetLocaleData.jsx";
import { getStorageValue } from "../../config/localStorage.jsx";

export const GetClassStats = (specId) => {

    const data = GetLocaleData(getStorageValue('language' || 'en'));
    const stat_type = [
        {
            "name": data.ITEM_MOD_AGILITY, // "Agility"
            "id": 3,
            "mainStat": true,
            "allowedSpecs": [253, 254, 255, 259, 260, 261, 263, 103]
        },
        {
            "name": data.ITEM_MOD_STRENGTH, // "Strength"
            "id": 4,
            "mainStat": true,
            "allowedSpecs": [71, 72, 73, 66, 70, 250, 251, 252]
        },
        {
            "name": data.ITEM_MOD_INTELLECT,    // "Intellect"
            "id": 5,
            "mainStat": true,
            "allowedSpecs": [65, 253, 254, 255, 256, 257, 258, 262, 263, 264, 62, 63, 64, 265, 266, 267, 102, 104]
        },
        {
            "name": data.ITEM_MOD_SPIRIT, // "Spirit"
            "id": 6,
            "mainStat": true,
            "allowedSpecs": [256, 257, 258, 63, 102, 104]
        },
        {
            "name": data.ITEM_MOD_STAMINA,  // "Stamina"
            "id": 7,
            "mainStat": true,
            "allowedSpecs": [71, 72, 73, 65, 66, 70, 256, 257, 258, 250, 251, 252, 262, 263, 264, 62, 63, 64, 265, 266, 267, 102, 103, 104]
        },
        {
            "name": data.ITEM_MOD_DEFENSE_SKILL_RATING,   // "Defense"
            "id": 12,
            "mainStat": false,
            "allowedSpecs": [73, 66, 250, 251, 252]
        },
        {
            "name": data.ITEM_MOD_DODGE_RATING,   // "Dodge"
            "id": 13,
            "mainStat": false,
            "allowedSpecs": [73, 66, 250, 251, 252]
        },
        {
            "name": data.ITEM_MOD_PARRY_RATING,   // "Parry"
            "id": 14,
            "mainStat": false,
            "allowedSpecs": [73, 66, 250, 251, 252]
        },
        {
            "name": data.ITEM_MOD_BLOCK_RATING,   // "Block"
            "id": 15,
            "mainStat": false,
            "allowedSpecs": [73, 66, 250, 251, 252]
        },
        {
            "name": data.ITEM_MOD_HIT_RATING,   // "Hit"
            "id": 31,
            "mainStat": false,
            "allowedSpecs": [71, 72, 73, 66, 253, 254, 255, 259, 260, 261, 256, 257, 258, 250, 251, 252, 262, 263, 264, 62, 63, 64, 265, 266, 267, 102, 103, 104]
        },
        {
            "name": data.ITEM_MOD_CRIT_RATING,   // "Critical Strike"
            "id": 32,
            "mainStat": false,
            "allowedSpecs": [71, 72, 65, 66, 70, 253, 254, 255, 259, 260, 261, 256, 257, 258, 250, 251, 252, 262, 263, 264, 62, 63, 64, 265, 266, 267, 102, 103, 104]
        },
        {
            "name": data.ITEM_MOD_RESILIENCE_RATING,   // "PvP Resilience"
            "id": 35,
            "mainStat": false,
            "allowedSpecs": [71, 72, 73, 65, 66, 70, 253, 254, 255, 259, 260, 261, 256, 257, 258, 250, 251, 252, 262, 263, 264, 62, 63, 64, 265, 266, 267, 102, 103, 104]
        },
        {
            "name": data.ITEM_MOD_HASTE_RATING,   // "Haste"
            "id": 36,
            "mainStat": false,
            "allowedSpecs": [65, 70, 71, 70, 253, 254, 255, 259, 260, 261, 256, 257, 258, 250, 251, 252, 262, 263, 264, 62, 63, 64, 265, 266, 267, 102, 103, 104]
        },
        {
            "name": data.ITEM_MOD_EXPERTISE_RATING,   // "Expertise"
            "id": 37,
            "mainStat": false,
            "allowedSpecs": [71, 72, 73, 66, 70, 259, 260, 261, 250, 251, 252, 263, 103]
        },
        {
            "name": data.ITEM_MOD_ATTACK_POWER,   // "Attack Power"
            "id": 38,
            "mainStat": true,
            "allowedSpecs": [253, 254, 255, 259, 260, 261, 263, 103]
        },
        {
            "name": data.ITEM_MOD_MANA_REGENERATION,   // "Mana Regeneration"
            "id": 43,
            "mainStat": false,
            "allowedSpecs": [65, 256, 257, 258, 262, 264, 62, 63, 64, 102, 104]
        },
        {
            "name": data.ITEM_MOD_ARMOR_PENETRATION_RATING,   // "Armor Penetration"
            "id": 44,
            "mainStat": false,
            "allowedSpecs": [71, 72, 253, 254, 255, 259, 260, 261, 250, 251, 252, 263, 103]
        },
        {
            "name": data.ITEM_MOD_SPELL_POWER,   // "Spell Power"
            "id": 45,
            "mainStat": true,
            "allowedSpecs": [65, 256, 257, 258, 262, 264, 62, 63, 64, 265, 266, 267, 102, 104]
        }
    ];

    // Получить список названий статов, доступных для спека
    const getAllowedSpecsNames = (specId) => {
        const filtered = stat_type.filter(stat => stat.allowedSpecs.includes(Number(specId))).map(stat => ({ id: stat.id, name: stat.name }));
        return filtered;
    };

    return (
        getAllowedSpecsNames(specId)
    );
}
