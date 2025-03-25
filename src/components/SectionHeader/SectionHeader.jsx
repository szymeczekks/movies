import styles from './SectionHeader.module.css';

export function SectionHeader({ children }) {
    return <h3 className={styles.header}>{children}</h3>
}