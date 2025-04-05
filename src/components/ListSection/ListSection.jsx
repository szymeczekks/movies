import { ReactSVG } from 'react-svg';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import styles from './ListSection.module.css';
import ARROW_DOWN from '../../assets/arrow-down.svg';
import { Link } from 'react-router-dom';
import { TEXTS } from '../../constants/content';
import { HorizontalCarousel } from '../HorizontalCarousel/HorizontalCarousel';
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export function ListSection({children, title, subtitle = null, slidesPerView = 'auto', breakpoints = {}}) {
    const [language] = useContext(LanguageContext);

    return <section className={['wrapper', styles.list].join(' ')}>
        <div className={styles.top}>
            <SectionHeader>{title}</SectionHeader>
            <Link className={styles.seeAll} to="/movies">{TEXTS[language].see_all}<ReactSVG src={ARROW_DOWN}  className={styles.arrow}/></Link>
        </div>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <HorizontalCarousel slidesPerView={slidesPerView} breakpoints={breakpoints} >
            {children}
        </HorizontalCarousel>
    </section>
}