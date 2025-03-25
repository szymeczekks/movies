import styles from './Star.module.css';

export function Star({fill, onClick, onMouseEnter, onMouseLeave, classNames}) {
    return <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        width="30" height="30" viewBox="0 0 30 30" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={classNames?.map(c => styles[c]).join(' ')}>
        <defs>
            <linearGradient id={`grad_${fill}`}>
                <stop offset={`${fill}%`} stopColor="#7b61ff"/>
                <stop offset={`${fill}%`} stopColor="#191c33"/>
            </linearGradient>
        </defs>
        <path d="M15 1.5L18.09 11.26L28.18 11.64L21.64 18.97L24.27 28L15 22.77L5.73 28L8.36 18.97L1.82 11.64L11.91 11.26L15 1.5Z"
            fill={`url(#grad_${fill})`} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
    </svg>;
}