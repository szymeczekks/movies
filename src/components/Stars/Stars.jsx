import { useState } from 'react';
import { Star } from '../Star/Star';
import styles from './Stars.module.css';


export function Stars({rating, type, callback}) {
    function getPercentage(rate, star) {
        const rateInt = Math.floor(rate);
    
        if (star < rateInt) {
            return 100;
        }
    
        if (star === rateInt) {
            return (rate - rateInt) * 100;
        }
    
        return 0;
    }
    const [ratingValue, setRatingValue] = useState(rating);
    const [ratingClicked, setRatingClicked] = useState(null);
    const [current, max] = ratingValue.split('/').map(Number);

    const events = {
        edit: {
            onClick: (star) => {
                setRatingValue(`${star + 1}/${max}`);
                setRatingClicked(`${star + 1}/${max}`);
                callback(`${star + 1}/${max}`);
            },
            onMouseEnter: function onMouseEnter(star) {
                setRatingValue(`${star + 1}/${max}`);
            },
            onMouseLeave: function onMouseLeave() {
                ratingClicked ? setRatingValue(ratingClicked) : setRatingValue(rating);
            },
            classNames: ['edit'],
        },
        view: {
            onClick: () => {},
            onMouseEnter: () => {},
            onMouseLeave: () => {},
            classNames: ['view'],
        },
    }

    const stars = [];
    for (let i = 0; i < max; i++) {
        const mainColor = getPercentage(current, i);
        stars.push(<Star 
            key={i} 
            fill={mainColor} 
            onClick={() => events[type].onClick(i)} 
            onMouseEnter={() => events[type].onMouseEnter(i)}
            onMouseLeave={events[type].onMouseLeave}
            classNames={events[type].classNames}
        />);
    }

    return <div className={styles.stars}>{stars}</div>;
}