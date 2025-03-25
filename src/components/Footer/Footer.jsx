import styles from './Footer.module.css';

export function Footer() {
    return <footer className={styles.footer}>
        <div className="wrapper">
            <p>Copyright © {new Date().getFullYear()} MoovieTV. All rights reserved.</p>
        </div>
    </footer>
}