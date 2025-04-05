import { NavLink } from 'react-router-dom';
import { PATHS, TEXTS } from '../../constants/content';
import styles from './GenresList.module.css';
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";

export function GenresList({ genres }) {
    const [language] = useContext(LanguageContext);
    return (
        <div className={styles.genres}>
            <h2 className={styles.header}>{TEXTS[language].categories}</h2>
            <ul className={styles.list}>
                {genres.map(genre => {
                    let categoryPath = '';
                    for (const key of Object.keys(PATHS)) {
                        if (PATHS[key][language] === genre.name[language]) {
                            categoryPath = key;
                            break;
                        }
                    }

                    return <a key={genre.id}>
                        {genre.name[language]}
                    </a>
                })}
            </ul>
        </div>
    );
}