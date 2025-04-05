import { Link } from 'react-router-dom';
import { TEXTS } from '../../constants/content';
import { translateGenres } from '../../functions/translateGenres';
import { VideoMeta } from '../VideoMeta/VideoMeta';
import styles from './TopList.module.css';
import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";

export function TopList({ movies }) {
    const [ language ] = useContext(LanguageContext);
    const count = movies.length;
    return (
        <div className={styles.topList}>
            <h2 className={styles.header}>Top {count} {TEXTS[language].movies}</h2>
            <ul className={styles.list}>
                {movies.map((movie, index) => {
                    const genres = translateGenres(movie.genre_ids);
                    return <li key={movie.id}>
                        <div className={styles.index}>{index + 1}</div>
                        <div className={styles.content}>
                            <Link to={`/movie/${movie.id}`} className={styles.image}>
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                            </Link>
                            <div>
                                <p className={styles.date}>{movie.release_date}</p>
                                <Link to={`/movie/${movie.id}`}><p className={styles.title}>{movie.title}</p></Link>
                                <VideoMeta type='small'>
                                    { genres.map(genre => { return <Link key={genre} >{genre}</Link>}) }
                                </VideoMeta>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    );
}