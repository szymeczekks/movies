import { Link } from 'react-router-dom';
import { IMAGES } from '../../constants/api';
import { translateGenres } from '../../functions/translateGenres';
import styles from './MoviePreviewItem.module.css';
import { VideoMeta } from '../VideoMeta/VideoMeta';
import { VideoBadge } from '../VideoBadge/VideoBadge';
import { useRef, useState } from 'react';
import { Button } from '../Button/Button';
import { TEXTS } from '../../constants/content';
import { ReactSVG } from 'react-svg';
import INFO_ICON from '../../assets/info.svg';
import BOOKMARK_ICON from '../../assets/bookmark.svg';
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ListContext } from '../../context/ListContext';

export function MoviePreviewItem({ movie }) {
    const [ language ] = useContext(LanguageContext);
    const [list, addToList] = useContext(ListContext);
    const [previewShow, setPreviewShow] = useState(false);
    const genres = translateGenres(movie.genre_ids);
    const movieRef = useRef(null);
    let enterTimeout = null;

    function handleMouseEnter() {
        enterTimeout = setTimeout(() => {
            const movieRect = movieRef.current.getBoundingClientRect();
            const preview = movieRef.current.querySelector(`.${styles.preview}`);
            const previewRect = preview.getBoundingClientRect();
            const isOffScreenRight = movieRect.right + (movieRect.width / 2) > movieRef.current.closest('.swiper').getBoundingClientRect().right;
            const isOffScreenLeft = movieRect.left - (movieRect.width / 2) < movieRef.current.closest('.swiper').getBoundingClientRect().left;
            console.log('isOffScreenRight', isOffScreenRight);
            console.log('isOffScreenLeft', isOffScreenLeft);
            if (isOffScreenRight) {
                preview.style.left = 'unset';
                preview.style.right = '0px';
            } else if (isOffScreenLeft) {
                preview.style.left = '100%';
                preview.style.right = 'unset';
            } else {
                preview.style.left = `50%`;
                preview.style.right = 'unset';
            }
            setPreviewShow(true);
        }, 500);
    }

    function handleMouseLeave () {
        clearTimeout(enterTimeout);
        setPreviewShow(false);
    }
    
    return <div ref={movieRef} className={styles.movie} onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
        <div className={styles.image}>
            <Link to={`/movie/${movie.id}`}>
                <img src={`${IMAGES.secure_base_url}w780/${movie.backdrop_path}`} alt={movie.title}/>
            </Link>
        </div>
        <Link to={`/movie/${movie.id}`} className={styles.title}>{movie.title}</Link>
        <Link to={`/movie/${movie.id}`}>
            <VideoMeta type='small'>
                <span>{movie.release_date.split('-')[0]}</span>
                <span>170 minut</span>
                <VideoBadge type='small'>TV-MA</VideoBadge>
            </VideoMeta>
        </Link>
        <div className={[styles.preview, previewShow ? styles.active : ''].join(' ')}>
            <div className={styles.previewMovie}>
                {movie.videos[0] && previewShow ? <iframe src={`https://www.youtube.com/embed/${movie.videos[0].key}?autoplay=1&controls=0&modestbranding=0&loop=1`} allow='autoplay' title="YouTube video player"></iframe> : <img src={`${IMAGES.secure_base_url}w780/${movie.backdrop_path}`} alt={movie.title}/>}
            </div>
            <div className={styles.previewContent}>
                <Link to={`/movie/${movie.id}`} className={styles.title}>{movie.title}</Link>
                <VideoMeta type='small'>
                    <span>{movie.release_date.split('-')[0]}</span>
                    <span>170 minut</span>
                    <VideoBadge type='small'>TV-MA</VideoBadge>
                </VideoMeta>
                <VideoMeta type='small'>
                    { genres.map(genre => { return <span key={genre}><Link>{genre}</Link></span>}) }
                </VideoMeta>
                <div className={styles.buttons}>
                    <Button type={['small']}>{TEXTS[language].see_details} <ReactSVG src={INFO_ICON}/> </Button>
                    <Button type={['small', 'gray']} onClick={(e) => addToList(e, movie)}>{TEXTS[language].watch_later} <ReactSVG src={BOOKMARK_ICON}/></Button>
                </div>
            </div>
        </div>
    </div>
}