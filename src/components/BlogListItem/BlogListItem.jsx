import { Link } from 'react-router-dom';
import { VideoMeta } from '../VideoMeta/VideoMeta';
import styles from './BlogListItem.module.css';

export function BlogListItem({ blog }) {
    return <div className={styles.blog}>
        <Link className={styles.image} to={`/blog/${blog.id}`}>
            <img src={blog.image} alt={blog.title} />
        </Link>
        <div className={styles.content}>
            <Link to={`/blog/${blog.id}`}>
                <h3 className={styles.title}>{blog.title}</h3>
            </Link>
            <p className={styles.description}>{blog.description}</p>
            <VideoMeta type='small'>
                <Link to={`/blog/${blog.id}`}>{blog.date}</Link>
                <Link to={`/blog/${blog.id}`}>{blog.author}</Link>
                <div>
                    {blog.categories.map(category => <Link className={styles.category} key={category} to={`/blog/${blog.id}`}>{category}</Link>)}
                </div>
            </VideoMeta>
        </div>
    </div>
}