import { ROUTES } from "../../constants/routes";
import ARROW_DOWN from '../../assets/arrow-down.svg'
import styles from "./ModalList.module.css";
import { ReactSVG } from "react-svg";
import { LanguageContext } from "../../context/languageContext";
import { useContext } from "react";

export function ModalList({subcategories = null, className = ''}) {
    const [language] = useContext(LanguageContext);
    const object = subcategories ? subcategories : ROUTES;
    const list = Object.keys(object);
    return <ul className={[styles.modalList, subcategories ? styles.subMenu : '', className].join(' ')}>
        {
            list.map((path) => {
                const subcategories = object[path].subcategories;
                const categoryName = object[path].categoryName[language];
                return <li key={path}>
                    <a onClick={(e) => {
                        if (className !== 'inNav') {
                            e.preventDefault();
                            e.currentTarget.closest('li').classList.toggle('active');
                        }
                    }} href={path}>{categoryName} {subcategories && <ReactSVG className={styles.arrow} src={ARROW_DOWN}/>}</a>
                    {subcategories && <ModalList subcategories={subcategories}/>}
                </li>
            })
        }
    </ul>
}