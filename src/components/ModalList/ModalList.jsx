import { ROUTES } from "../../constants/routes";
import ARROW_DOWN from '../../assets/arrow-down.svg'
import styles from "./ModalList.module.css";
import { ReactSVG } from "react-svg";

export function ModalList({subcategories = null, className = ''}) {
    const object = subcategories ? subcategories : ROUTES;
    const list = Object.keys(object);
    return <ul className={[styles.modalList, subcategories ? styles.subMenu : '', className].join(' ')}>
        {
            list.map((path) => {
                const subcategories = object[path].subcategories;
                const categoryName = object[path].categoryName;
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