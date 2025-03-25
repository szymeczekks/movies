import { Form } from "react-router-dom";
import { ReactSVG } from "react-svg";
import SEARCH_ICON from '../../assets/search-icon.svg'
import styles from "./Search.module.css";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import { TEXTS } from "../../constants/content";

export function Search({className = ''}) {
    const [ language ] = useContext(LanguageContext);

    return <Form className={[styles.searchForm, className].join(' ')}>
        <div className={styles.searchContainer}>
            <input className={styles.search} type="text" />
            <ReactSVG src={SEARCH_ICON}/>
            <p className={styles.tip}>{TEXTS[language].search_tip}</p>
        </div>
    </Form>
}