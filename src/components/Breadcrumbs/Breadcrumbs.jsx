import { ReactSVG } from 'react-svg';
import styles from './Breadcrumbs.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import ARROW_ICON from '../../assets/arrow-down.svg';
import { PATHS } from '../../constants/content';
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";

export function Breadcrumbs() {
    const [language] = useContext(LanguageContext);
    const location = useLocation();
    let currentLink = '';

    const breadcrumbs = location.pathname.split('/')
    .filter(Boolean);

    console.log(breadcrumbs);

    return (
        <div className={styles.breadcrumbs}>
            {breadcrumbs.map((breadcrumb, index) => {
                currentLink += `/${breadcrumb}`;

                return (
                    <NavLink key={breadcrumb} end to={currentLink}>
                        {PATHS[breadcrumb][language]} 
                        <ReactSVG src={ARROW_ICON}/>
                    </NavLink>
                )
            })}
        </div>
    );
}