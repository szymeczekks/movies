import styles from './ReviewsWrapper.module.css';

import { AddReview } from '../AddReview/AddReview';
import { Reviews } from '../Reviews/Reviews';
import { TEXTS } from '../../constants/content';

import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";

export function ReviewsWrapper({ reviews, userData }) {
    const [ language ] = useContext(LanguageContext);

    return <>
        <AddReview reviewsLength={reviews.length} userData={userData} />
        {reviews.length > 0 ? <Reviews reviews={reviews}/> : <p className={styles.noReviews}>{TEXTS[language].no_reviews}</p>}
    </>
    
}