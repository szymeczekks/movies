import { TEXTS } from '../../constants/content';
import { Button } from '../Button/Button';
import styles from './MoviePoster.module.css';
import DOWNLOAD_ICON from '../../assets/download.svg';
import PLUS_ICON from '../../assets/plus.svg';
import SHARE_ICON from '../../assets/share.svg';
import LIKE_ICON from '../../assets/like.svg';
import { ReactSVG } from 'react-svg';
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import { ListContext } from '../../context/ListContext';

export function MoviePoster({ movie }) {
    const [ language ] = useContext(LanguageContext);
    const [list, addToList] = useContext(ListContext);

    const isInList = list.includes(movie.id);

    return (
        <div className={styles.poster}>
            <div className={styles.image}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className={styles.social}>
                <Button type={['x-small','gray']}>{TEXTS[language].likes} <ReactSVG src={LIKE_ICON}/></Button>
                <Button type={['x-small','gray']}>{TEXTS[language].share} <ReactSVG src={SHARE_ICON}/></Button>
                <Button onClick={(e) => addToList(e, movie)} type={['x-small','gray']}>{isInList ? TEXTS[language].added_to_my_list : <>{TEXTS[language].add_to_my_list} <ReactSVG src={PLUS_ICON}/></>} </Button>
            </div>
            <Button type={['gray']}>{TEXTS[language].download_video} <ReactSVG src={DOWNLOAD_ICON}/></Button>
        </div>
    );
}