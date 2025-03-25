import styles from './Button.module.css'

export function Button({onClick, children, className = '', type = []}) {
    return <button className={[styles.button, className, ...type.map(clas => styles[clas])].join(' ')} onClick={onClick}>{children}</button>
}