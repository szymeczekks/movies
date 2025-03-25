import styles from './Review.module.css';
import AVATAR from '../../assets/jack.jpg';
import { Stars } from '../Stars/Stars';

function dateFormatted(date) {
    const dateObj = new Date(date);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return dateObj.toLocaleDateString('pl-PL', options);
}

export function Review({review}) {
    return <div className={styles.review}>
        <div className={styles.avatar}>
            <img src={AVATAR} alt="avatar" />
        </div>
        <div className={styles.content}>
            <div className={styles.header}>
                <div className={styles.rating}><Stars rating={review.rating} type="view"/></div>
                <p className={styles.author}>{review.author}</p>
                <p className={styles.date}>{dateFormatted(review.date)}</p>
            </div>
            <p>{review.content}</p>
        </div>
    </div>
}