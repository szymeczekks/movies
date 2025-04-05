import { ReactSVG } from 'react-svg';
import styles from './VideoOnClick.module.css';
import PLAY_ICON from '../../assets/play.svg';
import { TEXTS } from '../../constants/content';
import { useState } from 'react';
import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";

export function VideoOnClick({ video, thumb }) {
    const [ language ] = useContext(LanguageContext);
    const [videoPlay, setVideoPlay] = useState(null);

    return <div className={styles.video}>
        {videoPlay ? <iframe className={styles.video} src={`https://www.youtube.com/embed/${video.key}?autoplay=1`} title={video.name} /> : 
        <img className={styles.video} src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`} alt={video.name} /> }
        
        {(!thumb && !videoPlay) && 
        <div className={styles.watch} onClick={() => setVideoPlay(true)}>
            <ReactSVG src={PLAY_ICON} />
            <span>{TEXTS[language].watch_trailer}!</span>
        </div>}
    </div>
}