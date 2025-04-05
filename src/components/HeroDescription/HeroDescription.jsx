import { TEXTS } from '../../constants/content';
import { Button } from '../Button/Button';
import styles from './HeroDescription.module.css';
import PLAY_ICON from '../../assets/play.svg';
import PLUS_ICON from '../../assets/plus.svg';
import { ReactSVG } from 'react-svg';
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ListContext } from '../../context/ListContext';

export function HeroDescription({movie}) {
    const [language] = useContext(LanguageContext);
    const [list, addToList] = useContext(ListContext);

    const isInList = list.includes(movie.id);

    return <div className={styles.heroDescription}>
        <h2 className={styles.title}>
            {movie.title}
        </h2>
        <p className={styles.description}>
            {movie.overview}
        </p>
        <div className={styles.buttons}>
            <Button to={`movie/${movie.id}`}><ReactSVG src={PLAY_ICON} />{TEXTS[language].watch_now}</Button>
            <Button onClick={(e) => addToList(e, movie)} type={['border-white']}>{isInList ? TEXTS[language].added_to_my_list : <ReactSVG src={PLUS_ICON} />}</Button>
        </div>
    </div>
}