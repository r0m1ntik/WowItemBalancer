import warrior_arms from '../../assets/icon/specs/Arms_Spec_RoundIcon.webp';
import warrior_fury from '../../assets/icon/specs/Fury_Spec_RoundIcon.webp';
import warrior_protection from '../../assets/icon/specs/WProt_Spec_RoundIcon.webp';
import paladin_holy from '../../assets/icon/specs/PaHoly_Spec_RoundIcon.webp';
import paladin_protection from '../../assets/icon/specs/PProt_Spec_RoundIcon.webp';
import paladin_retribution from '../../assets/icon/specs/Ret_Spec_RoundIcon.webp';
import hunter_beastmastery from '../../assets/icon/specs/BM_Spec_RoundIcon.webp';
import hunter_marksmanship from '../../assets/icon/specs/Marks_Spec_RoundIcon.webp';
import hunter_survival from '../../assets/icon/specs/Surv_Spec_RoundIcon.webp';
import rogue_assassination from '../../assets/icon/specs/Arms_Spec_RoundIcon.webp';
import rogue_outlaw from '../../assets/icon/specs/Comb_Spec_RoundIcon.webp';
import rogue_subtlety from '../../assets/icon/specs/Subt_Spec_RoundIcon.webp';
import priest_discipline from '../../assets/icon/specs/Disc_Spec_RoundIcon.webp';
import priest_holy from '../../assets/icon/specs/PaHoly_Spec_RoundIcon.webp';
import priest_shadow from '../../assets/icon/specs/Shad_Spec_RoundIcon.webp';
import deathknight_blood from '../../assets/icon/specs/Spell_deathknight_bloodpresence.webp';
import deathknight_frost from '../../assets/icon/specs/Spell_deathknight_frostpresence.webp';
import deathknight_unholy from '../../assets/icon/specs/Spell_deathknight_unholypresence.webp';
import shaman_elemental from '../../assets/icon/specs/Elem_Spec_RoundIcon.webp';
import shaman_enhancement from '../../assets/icon/specs/Enh_Spec_RoundIcon.webp';
import shaman_restoration from '../../assets/icon/specs/SResto_Spec_RoundIcon.webp';
import mage_arcane from '../../assets/icon/specs/Arc_Spec_RoundIcon.webp';
import mage_fire from '../../assets/icon/specs/Fire_Spec_RoundIcon.webp';
import mage_frost from '../../assets/icon/specs/Frost_Spec_RoundIcon.webp';
import warlock_affliction from '../../assets/icon/specs/Affl_spec_roundicon.webp';
import warlock_demonology from '../../assets/icon/specs/Demon_Spec_RoundIcon.webp';
import warlock_destruction from '../../assets/icon/specs/Destro_Spec_RoundIcon.webp';
import druid_balance from '../../assets/icon/specs/Bal_Spec_RoundIcon.webp';
import druid_feral from '../../assets/icon/specs/Feral_Spec_RoundIcon.webp';
import druid_restoration from '../../assets/icon/specs/DResto_Spec_RoundIcon.webp';
import none_spec from '../../assets/icon/specs/None_Spec_RoundIcon.webp';
import hybrid_spec from '../../assets/icon/specs/Hybrid_Spec_RoundIcon.webp';


const specImages = {
    71: warrior_arms,
    72: warrior_fury,
    73: warrior_protection,
    65: paladin_holy,
    66: paladin_protection,
    70: paladin_retribution,
    253: hunter_beastmastery,
    254: hunter_marksmanship,
    255: hunter_survival,
    259: rogue_assassination,
    260: rogue_outlaw,
    261: rogue_subtlety,
    256: priest_discipline,
    257: priest_holy,
    258: priest_shadow,
    250: deathknight_blood,
    251: deathknight_frost,
    252: deathknight_unholy,
    262: shaman_elemental,
    263: shaman_enhancement,
    264: shaman_restoration,
    62: mage_arcane,
    63: mage_fire,
    64: mage_frost,
    265: warlock_affliction,
    266: warlock_demonology,
    267: warlock_destruction,
    102: druid_balance,
    103: druid_feral,
    104: druid_restoration,
    0: none_spec,
    999: hybrid_spec
}

export function FindSpecImgById(id) {
    return specImages[id] || none_spec;
}
