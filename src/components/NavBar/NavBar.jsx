import styles from './NavBar.module.css';
import { NavList } from '../NavList/NavList.jsx';
import { Search } from '../Search/Search.jsx';
import { Button } from '../Button/Button.jsx';
import { Logo } from '../Logo/Logo.jsx';
import { NavIcons } from '../NavIcons/NavIcons.jsx';
import { TEXTS } from '../../constants/content.js';
import { useEffect, useState } from 'react';
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";

export function NavBar() {
    const [ language ] = useContext(LanguageContext);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <nav className={`${styles.navMoving} ${scrolled ? styles.scrolled : ''}`}>
        <div className='wrapper'>
            <div className={styles.nav}>
                <Logo/>
                <NavList className="inNav" />
                <Search className="inNav"/>
                <NavIcons/>
                <Button className='inNav' onClick={() => {}}>{TEXTS[language].subscribe}</Button>
            </div>
        </div>
    </nav>
}