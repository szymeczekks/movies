import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

import styles from "./Layout.module.css";

import { LanguageContext } from "../../context/LanguageContext";
import { AuthContext } from "../../context/AuthContext";
import { ListContext } from "../../context/ListContext";
import { useEffect, useMemo, useState } from "react";
import { API_KEY, API_URL } from "../../constants/api";
import { useNavigate, useLocation } from "react-router-dom";

export function Layout() {
    const navigate = useNavigate();
    const location = useLocation();
    const [list, setList] = useState([]);
    const [language, setLanguage] = useState("PL");
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);

    function addToList(e, movie) {
        e.preventDefault();
        e.stopPropagation();
        
        if (list.find(element => element.id === movie.id)) return;

        setList((prevList) => [...prevList, movie]);
    }

    function deleteFromList(e, id) {
        e.preventDefault();
        e.stopPropagation();
        const newList = list.filter((element) => element.id !== id);
        setList(newList);
    }

    async function checkAuth() {
        if (isAuth) return true;
        try {
            const request_token = window.localStorage.getItem('request_token');
            if (!request_token) throw 'No request token found';

            const response = await fetch(`${API_URL}/authentication/session/new`, {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                },
                body: JSON.stringify({request_token: request_token})
            });
            const data = await response.json();
            
            if (!data.session_id) {
                throw 'No session id found';
            }
            
            window.localStorage.setItem('session_id', data.session_id);
            setIsAuth(true);
        } catch (err) {
            console.log(err);
            if (err === 'No request token found' && location.pathname !== '/login') {
                navigate('/login');
            }
            return false;
        }
    }
    

    useEffect(() => {
        // checkAuth();
    }, [])

    return <div className={styles.layout}>
        <AuthContext.Provider value={{user, checkAuth, isAuth}}>
            <LanguageContext.Provider value={[language, setLanguage]}>
                <ListContext.Provider value={[list, addToList, deleteFromList]}>
                    <NavBar/>
                    <Outlet />
                </ListContext.Provider>
                <Footer/>
            </LanguageContext.Provider>
        </AuthContext.Provider>
    </div>
}