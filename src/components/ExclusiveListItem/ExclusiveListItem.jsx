import { Link } from 'react-router-dom';
import styles from './ExclusiveListItem.module.css';
import { VideoMeta } from '../VideoMeta/VideoMeta';
import { TEXTS } from '../../constants/content';
import { dateToAgo } from '../../functions/dateToAgo';
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export function ExclusiveListItem({blog}) {
    const [language] = useContext(LanguageContext);

    const ago = dateToAgo(blog.date);

    return <article className={styles.exclusiveListItem}>
        <Link className={styles.image}>
            <img src={blog.image} alt={blog.title}/>
        </Link>
        <Link className={styles.title}>{blog.title}</Link>
        <VideoMeta type='small'>
            <p>{blog.views} {TEXTS[language].views}</p>
            <p>{ago}</p>
        </VideoMeta>
    </article>
}