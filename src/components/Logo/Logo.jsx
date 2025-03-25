import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export function Logo() {
    return <div className={styles.logo}>
        <Link to='/'>Moovie<sup>TV</sup></Link>
    </div>
}