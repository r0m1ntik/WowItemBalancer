import warrior from '../../assets/icon/classes/warrior.webp';
import paladin from '../../assets/icon/classes/paladin.webp';
import hunter from '../../assets/icon/classes/hunter.webp';
import rogue from '../../assets/icon/classes/rogue.webp';
import priest from '../../assets/icon/classes/priest.webp';
import deathknight from '../../assets/icon/classes/deathknight.webp';
import shaman from '../../assets/icon/classes/shaman.webp';
import mage from '../../assets/icon/classes/mage.webp';
import warlock from '../../assets/icon/classes/warlock.webp';
import druid from '../../assets/icon/classes/druid.webp';
import unknown from '../../assets/icon/classes/unknown.webp';

const classImages = {
    1: warrior,
    2: paladin,
    3: hunter,
    4: rogue,
    5: priest,
    6: deathknight,
    7: shaman,
    8: mage,
    9: warlock,
    11: druid,
};

export function FindClassImgById(id) {
    return classImages[id] || unknown;
}
