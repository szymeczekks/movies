import { Link } from 'react-router-dom';
import styles from './ArtistsListItem.module.css';

export function ArtistsListItem({ artist }) {
    return <div className={styles.artist}>
        <Link className={styles.image}>
            <img src={artist.image} alt={artist.name} />
        </Link>
        <Link className={styles.name}>
            <h3>{artist.name}</h3>
        </Link>
    </div>
}