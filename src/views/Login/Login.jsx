import styles from './Login.module.css';

import { Form } from 'react-router-dom';
import { useContext } from 'react';
import { TEXTS } from '../../constants/content';
import { Button } from '../../components/Button/Button';
import { LanguageContext } from '../../context/LanguageContext';
import { AuthContext } from '../../context/AuthContext';

export function Login() {
    const [language] = useContext(LanguageContext);
    const {isAuth} = useContext(AuthContext);

    if (isAuth) {
        return (
            <div className={styles.container}>
                <h2>{TEXTS[language].alreadyLoggedIn}</h2>
            </div>
        )
    }

    return (
        <Form method="POST" action="/login" className={styles.form}>
            <h2 className={styles.title}>{TEXTS[language].login}</h2>
            <Button>{TEXTS[language].login}</Button>
        </Form>
    )
}