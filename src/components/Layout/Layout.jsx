import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

import styles from "./Layout.module.css";

import { LanguageContext } from "../../context/languageContext";
import { useState } from "react";

export function Layout() {
    const [language, setLanguage] = useState("PL");


    return <div className={styles.layout}>
        <LanguageContext.Provider value={[language, setLanguage]}>
            <NavBar/>
            <Outlet />
            <Footer/>
        </LanguageContext.Provider>
    </div>
}