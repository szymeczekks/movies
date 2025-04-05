import { useContext, useEffect } from 'react';
import { ListSection } from '../../components/ListSection/ListSection';
import { TEXTS } from '../../constants/content';
import styles from './MyList.module.css';
import { ListContext } from '../../context/ListContext';
import { LanguageContext } from '../../context/LanguageContext';
import { DeleteFromListItem } from '../../components/DeleteFromListItem/DeleteFromListItem';

export function MyList() {
    const [list] = useContext(ListContext);
    const [language] = useContext(LanguageContext);

    console.log(list);

    return <div className={styles.myList}>
        <ListSection title={TEXTS[language].my_list}>
            {list.map((movie) => <DeleteFromListItem key={movie.id} movie={movie} />)}
        </ListSection>
    </div>
}