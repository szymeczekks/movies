import styles from './VideoMeta.module.css';

export function VideoMeta({ children, type = 'normal' }) {
    return <div className={[styles.videoMeta, styles[type]].join(' ')}>{children}</div>;
}