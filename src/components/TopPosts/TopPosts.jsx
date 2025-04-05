import { Link } from 'react-router-dom';
import { TEXTS } from '../../constants/content';
import styles from './TopPosts.module.css';
import { LanguageContext } from "../../context/languageContext";
import { useContext } from "react";

export function TopPosts({posts}) {
    const [ language ] = useContext(LanguageContext);
    
    return(
        <div className={styles.topPosts}>
            <h2>{TEXTS[language].popular_posts}</h2>
            <ul>
                {posts.map(post => (
                    <li className={styles.post} key={post.id}>
                        <Link className={styles.image}>
                            <img src={post.image} alt="" />
                        </Link>
                        <div className={styles.content}>
                            <Link className={styles.title}>
                                <h3>{post.title}</h3>
                            </Link>
                            <p>{post.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}