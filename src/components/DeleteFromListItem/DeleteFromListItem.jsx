import { Link } from 'react-router-dom';
import { IMAGES } from '../../constants/api';
import { translateGenres } from '../../functions/translateGenres';
import styles from './DeleteFromListItem.module.css';
import { VideoMeta } from '../VideoMeta/VideoMeta';
import { VideoBadge } from '../VideoBadge/VideoBadge';
import { ReactSVG } from 'react-svg';
import PLAY_ICON from '../../assets/play.svg';
import { TEXTS } from '../../constants/content';
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ListContext } from '../../context/ListContext';

export function DeleteFromListItem({movie}) {
    const [language] = useContext(LanguageContext);
    const [list, addToList, deleteFromList] = useContext(ListContext);
    const genres = translateGenres(movie.genre_ids);

    const isInList = list.includes(movie.id);

    return (
        <div className={styles.movie}>
            <div className={styles.image}>
                <Link to={`/movie/${movie.id}`}>
                    <img src={`${IMAGES.secure_base_url}w342/${movie.poster_path}`} alt={movie.title}/>
                    <ReactSVG src={PLAY_ICON} className={styles.play}/>
                    <button onClick={(e) => deleteFromList(e, movie.id)} className={[styles.button, isInList ? styles.active : ''].join(' ')}>{TEXTS[language].delete_from_list}</button>
                </Link>
            </div>
            <Link to={`/movie/${movie.id}`} className={styles.title}>{movie.title}</Link>
            <VideoMeta type='small'>
                <span>{movie.release_date.split('-')[0]}</span>
                <span>170 minut</span>
                <VideoBadge type='small'>TV-MA</VideoBadge>
            </VideoMeta>
            <VideoMeta type='small'>
                { genres.map(genre => { return <span key={genre}><Link>{genre}</Link></span>}) }
            </VideoMeta>
        </div>
    );
}