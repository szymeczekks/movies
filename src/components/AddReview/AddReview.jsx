import styles from './AddReview.module.css';
import { TEXTS } from '../../constants/content';
import { Button } from '../Button/Button';
import { Stars } from '../Stars/Stars';
import { useFetcher } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { LanguageContext } from '../../context/LanguageContext';
import { useContext, useEffect } from 'react';
import { useState } from 'react';

export function AddReview({reviewsLength, userData}) {
    const [language] = useContext(LanguageContext);
    const {isAuth} = useContext(AuthContext);
    const { Form, data } = useFetcher();
    const { id } = useParams();
    const [ formErrors, setFormErrors ] = useState(null);
    const [ rating, setRating ] = useState("");
    const [ content, setContent ] = useState("");
    const [ author, setAuthor ] = useState(userData.name || "");
    const [ email, setEmail ] = useState("");
    const [ consent, setConsent ] = useState(false);

    useEffect(() => {
        if (data && data.errors) {
            setFormErrors(data.errors);
        } else if (data && data.data) {
            setRating("");
            setContent("");
            setAuthor(userData.name || "");
            setEmail("");
            setConsent(false);
            setFormErrors(null);
        }
    }, [data]);

    /* if (!isAuth) {
        return (
            <div className={styles.notLogged}>
                <h2 className={styles.title}>{TEXTS[language].add_review_title_not_logged_in}</h2>
            </div>
        );
    } */

    return (
        <>
            <h2 className={styles.title}>{TEXTS[language].add_review_title}</h2>
            <p className={styles.subtitle}>{TEXTS[language].add_review_subtitle}</p>

            <Form className={styles.form} action='/add-review' method='POST' onClick={(e) => e.stopPropagation()}>
                <input type="hidden" name="id" value={reviewsLength} />
                <input type="hidden" name="movie_id" value={id} />
                <div className={styles.inputWrapper}>
                    <label htmlFor="rating">{TEXTS[language].add_review_rating}</label>
                    <div className={styles.rating}>
                        <input type="hidden" name='rating' id='rating' value={rating} />
                        <Stars key={rating} rating={rating ? rating : "0/6"} type={"edit"} callback={setRating} />
                    </div>
                    {formErrors && formErrors.rating && <p className={styles.error}>{formErrors.rating[language]}</p>}
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="content">{TEXTS[language].add_review_review}*</label>
                    <textarea name="content" id="content" value={content} onChange={(e) => setContent(e.currentTarget.value)}></textarea>
                    {formErrors && formErrors.content && <p className={styles.error}>{formErrors.content[language]}</p>}
                </div>
                <div className={styles.inputRow}>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="author">{TEXTS[language].add_review_name}*</label>
                        <input key={`${reviewsLength}_${userData?.name}`} type="text" name="author" id="author" value={author} onChange={(e) => setAuthor(e.currentTarget.value)} />
                        {formErrors && formErrors.author && <p className={styles.error}>{formErrors.author[language]}</p>}
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="email">Email*</label>
                        <input key={reviewsLength} type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
                        {formErrors && formErrors.email && <p className={styles.error}>{formErrors.email[language]}</p>}
                    </div>
                </div>
                <div className={styles.checkboxWrapper}>
                    <input type="checkbox" name="consent" id="consent" checked={consent} value={consent} onChange={(e) => setConsent(e.currentTarget.checked)} />
                    <label htmlFor="consent">{TEXTS[language].add_review_consent}</label>
                </div>
                <Button>{TEXTS[language].add_review_submit}</Button>
            </Form>
        </>
    );
}