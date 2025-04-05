import { ROUTES } from '../../constants/routes.js';
import { NavLink } from "react-router-dom";
import styles from "./NavList.module.css";
import ARROW_DOWN from '../../assets/arrow-down.svg'
import { ReactSVG } from "react-svg";
import { LanguageContext } from '../../context/languageContext';
import { useContext } from 'react';

export function NavList({subcategories = null, className = ''}) {
    const [language] = useContext(LanguageContext);
    const object = subcategories ? subcategories : ROUTES;
    const list = Object.keys(object);
    return <ul className={[styles.navList, !subcategories ? styles.main : '', className].join(' ')}>
        {
            list.map((path) => {
                const subcategories = object[path].subcategories;
                const categoryName = object[path].categoryName[language];
                return <li key={path}>
                    <NavLink onClick={(e) => {
                        if (className !== 'inNav') {
                            e.preventDefault();
                            e.currentTarget.closest('li').classList.toggle(styles.active);
                        }
                    }} to={path}>{categoryName} {subcategories && <ReactSVG src={ARROW_DOWN}/>}</NavLink>
                    {subcategories && <NavList subcategories={subcategories}/>}
                </li>
            })
        }
    </ul>
}