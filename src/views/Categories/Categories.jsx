import styles from './Categories.module.css';

import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { TEXTS } from '../../constants/content';

export function Categories() {
    return (
        <div className='wrapper'>
            <div className={styles.category}>
                <PageHeader>{TEXTS.PL.movies}</PageHeader>
                <Breadcrumbs/>
            </div>
        </div>
    );
}