import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export function Button({onClick, children, className = '', type = [], to}) {
    if (to) {
        return <Link to={to} className={[styles.button, className, ...type.map(clas => styles[clas])].join(' ')} >
            {children}
        </Link>
    }

    return <button className={[styles.button, className, ...type.map(clas => styles[clas])].join(' ')} onClick={onClick}>
        {children}
    </button>
}