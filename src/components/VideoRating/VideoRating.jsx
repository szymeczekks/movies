import { ReactSVG } from 'react-svg';
import styles from './VideoRating.module.css';
import STAR_ICON from '../../assets/star.svg';

export function VideoRating({children}) {
    return <div className={styles.videoRating}><ReactSVG src={STAR_ICON}/>{children}</div>
}