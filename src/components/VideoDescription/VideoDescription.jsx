import styles from './VideoDescription.module.css';

export function VideoDescription({children}) {
    return <div className={styles.videoDescription}>{children}</div>
}