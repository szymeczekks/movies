import { TEXTS } from '../../constants/content';
import { Button } from '../Button/Button';
import styles from './HeroDescription.module.css';
import PLAY_ICON from '../../assets/play.svg';
import PLUS_ICON from '../../assets/plus.svg';
import { ReactSVG } from 'react-svg';
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";

export function HeroDescription({movie}) {
    const [language] = useContext(LanguageContext);
    return <div className={styles.heroDescription}>
        <h2 className={styles.title}>
            {movie.title}
        </h2>
        <p className={styles.description}>
            {movie.overview}
        </p>
        <div className={styles.buttons}>
            <Button><ReactSVG src={PLAY_ICON} />{TEXTS[language].watch_now}</Button>
            <Button type={['border-white']}><ReactSVG src={PLUS_ICON} /></Button>
        </div>
    </div>
}