import styles from './VideoBadge.module.css';

export function VideoBadge({ children, type }) {
    return <div className={[styles.videoBadge, styles[type]].join(' ')}>{children}</div>
}