import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import { VideoMeta } from '../VideoMeta/VideoMeta';
import { VideoBadge } from '../VideoBadge/VideoBadge';
import { VideoRating } from '../VideoRating/VideoRating';
import { VideoDescription } from '../VideoDescription/VideoDescription';
import { Button } from '../Button/Button';
import PLAY_ICON from '../../assets/play.svg';
import BOOKMARK_ICON from '../../assets/bookmark.svg';
import { ReactSVG } from 'react-svg';
import { IMAGES } from '../../constants/api';
import { useEffect, useState } from 'react';
import { TEXTS } from '../../constants/content';
import { translateGenres } from '../../functions/translateGenres';
import { LanguageContext } from '../../context/LanguageContext';
import { useContext } from 'react';
import { ListContext } from '../../context/ListContext';



export function Hero({movie, isActive}) {
    const [filmActive, setFilmActive] = useState(false);
    const [language] = useContext(LanguageContext);
    const [list, addToList] = useContext(ListContext);

    // function addToList(id) {
    //     if (list.includes(id)) return;

    //     setList(prevList => [...prevList, id]);
    // }

    useEffect(() => {
        let filmTimeout;
        if (isActive && !filmActive) {
            filmTimeout = setTimeout(() => {
                setFilmActive(true);
            }, 1250);
        }
    
        if (!isActive && filmActive) {
            setFilmActive(false);
        }
        return () => clearTimeout(filmTimeout);
    }, [isActive, filmActive]);

    const genres = translateGenres(movie.genre_ids);

    return <div className={styles.hero}>
        {!isActive || isActive && !filmActive || !movie.videos[0] ? <img className={styles.heroImage} src={`${IMAGES.secure_base_url}original/${movie.backdrop_path}`} alt="" /> : <iframe src={`https://www.youtube.com/embed/${movie.videos[0].key}?autoplay=1&controls=0&modestbranding=0&loop=1`} allow='autoplay' title="YouTube video player"></iframe>}
        <div className={styles.heroContent}>
            <div className="wrapper">
                <div className={styles.heroGenres}>
                    { genres.map(genre => { return <span key={genre}><Link>{genre}</Link><span>, </span></span>}) }
                </div>
                <Link to={`/movie/${movie.id}`} className={styles.heroTitle}><h1>{movie.title}</h1></Link>
                <VideoMeta>
                    <VideoRating>{movie.vote_average.toFixed(1)}</VideoRating>
                    <span>{movie.release_date.split('-')[0]}</span>
                    <span>170 minut</span>
                    <VideoBadge>TV-MA</VideoBadge>
                </VideoMeta>
                <VideoDescription>{movie.overview}</VideoDescription>
                <div className={styles.heroButtons}>
                    <Button to={`/movie/${movie.id}`}>{TEXTS[language].watch_now} <ReactSVG src={PLAY_ICON} /></Button>
                    <a onClick={(e) => addToList(e, movie)}>{TEXTS[language].watch_later} <ReactSVG src={BOOKMARK_ICON} /></a>
                </div>
            </div>
        </div>
    </div>
}