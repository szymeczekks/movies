import { Link } from 'react-router-dom';
import { VideoMeta } from '../VideoMeta/VideoMeta';
import styles from './BlogItem.module.css';

export function BlogItem({ post }) {
    return (
        <article className={styles.blogItem}>
            <Link className={styles.image}>
                <img src={post.image} alt="" />
            </Link>
            <div className={styles.categories}>
                {post.categories.map((category, index) => (
                    <Link key={index}>{category}</Link>
                ))}
            </div>
            <Link className={styles.title}>{post.title}</Link>
            <p className={styles.description}>{post.description}</p>
            <VideoMeta>
                <span>{post.date}</span>
                <Link>{post.author}</Link>
            </VideoMeta>
        </article>
    )
}