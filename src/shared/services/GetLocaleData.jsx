const dataRu = require('../constants/localisation/ru.json');
const dataEn = require('../constants/localisation/en.json');

export const GetLocaleData = (currentLanguage) => {
    switch (currentLanguage) {
        case 'en':
            return dataEn;
        case 'ru':
        default:
            return dataRu;
    }
}
