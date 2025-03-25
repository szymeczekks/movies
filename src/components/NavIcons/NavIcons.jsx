import styles from "./NavIcons.module.css";
import USER_ICON from '../../assets/user.svg';
import GLOBE_ICON from '../../assets/globe.svg';
import ARROW_DOWN from '../../assets/arrow-down.svg';
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { useState } from "react";
import { createPortal } from "react-dom";
import { LANGUAGES } from "../../constants/content";
import { ModalMenu } from "../ModalMenu/ModalMenu";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";

export function NavIcons() {
    const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);
    const [isModalShown, setIsModalShown] = useState(false);
    const [language, setLanguage] = useContext(LanguageContext);
    const modal = createPortal(<ModalMenu onClose={() => setIsModalShown(false)}/>, document.body);

    return <div className={styles.navIcons}>
        <div className={[styles.language,isLanguagesOpen && styles.active].join(' ')} onClick={() => setIsLanguagesOpen(prev => !prev)}>
            <ReactSVG src={GLOBE_ICON} />
            <span>{language}</span>
            <ReactSVG src={ARROW_DOWN}  className={styles.arrow}/>
            <ul className={styles.languageList}>
                {LANGUAGES.map((lang) => <li onClick={() => setLanguage(lang)} key={lang}>{lang}</li>)}
            </ul>
        </div>
        <Link to="/login">
            <ReactSVG src={USER_ICON} className={styles.userIcon} />
        </Link>
        <div className={styles.burger} onClick={() => {setIsModalShown(true)}}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        {isModalShown && modal}
    </div>;
}