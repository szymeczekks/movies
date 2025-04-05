import { ReactSVG } from 'react-svg';
import { TEXTS } from '../../constants/content';
import ARROW_ICON from '../../assets/arrow-down.svg';
import styles from './FilterSelect.module.css';
import { useState, useRef } from 'react';
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";

export function FilterSelect({ elements, setter, label, type, name }) {
    const [language] = useContext(LanguageContext);
    const [isActive, setIsActive] = useState(false);
    const [filteredElements, setFilteredElements] = useState(elements);
    const [elementsActive, setElementsActive] = useState([]);
    const blockToggleRef = useRef(null);

    const onClick = (element) => {
        setElementsActive( prevElements => {
            const result = type === 'sort' ? element : prevElements.includes(element) ? prevElements.filter(el => el !== element) : [...prevElements, element];
            setter({key: name, value: result});
            return result;
        });
    };

    const handleClick = (event) => {
        if (blockToggleRef.current && blockToggleRef.current !== event.target) {
            setIsActive(!isActive);
        } else if (!blockToggleRef.current) {
            setIsActive(!isActive);
        }
    };

    const onSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        const filteredElements = elements.filter((element) => element.name.toLowerCase().includes(searchValue));
        setFilteredElements(filteredElements);
    };

    return (
        <div className={[styles.filterSelect, isActive ? styles.active : ''].join(' ')} onClick={(e) => handleClick(e)}>
            {label}
            <ReactSVG src={ARROW_ICON} />
            
            <div className={styles.dropdown}>
                {type === 'search' && <input ref={blockToggleRef} type="text" placeholder={TEXTS[language].search} onChange={onSearch}/>}
                <ul>
                    {/* <li>{label}</li> */}
                    {filteredElements.map( element => (
                        <li className={[elementsActive.includes(element.id) ? styles.active : ''].join(' ')} key={element.id} onClick={() => onClick(element.id)}>{element.name[language]}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}