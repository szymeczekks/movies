import styles from './PageHeader.module.css';

export function PageHeader({ children }) {
    return (
        <header className={styles.header}>
            {children}
        </header>
    );
}