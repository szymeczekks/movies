import { useState } from 'react';
import styles from './FilterBy.module.css';

export function FilterBy({ key, setter, elements, header, name }) {
    const [elementsActive, setElementsActive] = useState([]);

    const onClick = (element) => {
        setElementsActive( prevElements => {
            const result = prevElements.includes(element) ? prevElements.filter(el => el !== element) : [...prevElements, element];
            setter({key: name, value: result});
            return result;
        });
    };

    return (
        <div className={styles.filter}>
            <h2 className={styles.header}>{header}</h2>
            <ul className={styles.list}>
                {elements.map(element => {
                    return <li className={[elementsActive.includes(element.name) ? styles.active : ''].join(' ')} key={element.id} onClick={() => onClick(element.name)}>
                        {element.name}
                    </li>
                })}
            </ul>
        </div>
    );
}