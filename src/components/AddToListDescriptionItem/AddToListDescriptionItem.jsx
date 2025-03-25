import styles from './AddToListDescriptionItem.module.css';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../constants/api';
import { VideoMeta } from '../VideoMeta/VideoMeta';
import { TEXTS } from '../../constants/content';
import { Button } from '../Button/Button';
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";

export function AddToListDescriptionItem({movie}) {
    const [language] = useContext(LanguageContext);
    return <div className={styles.movie}>
        <div className={styles.image}>
            <img src={`${IMAGES.secure_base_url}w342/${movie.poster_path}`} alt={movie.title}/>
        </div>
        <Link to={`/movie/${movie.id}`} className={styles.title}>{movie.title}</Link>
        <div className={styles.description}>
            <Link to={`/movie/${movie.id}`} className={styles.title}>{movie.title}</Link>
            <VideoMeta type='small'>
                <span>{movie.release_date.split('-')[0]}</span>
                <span>170 minut</span>
            </VideoMeta>
            <p className={styles.overview}>{movie.overview}</p>
            <Button type={['small', 'border-white']}>+ {TEXTS[language].add_to_my_list}</Button>
        </div>
    </div>
}