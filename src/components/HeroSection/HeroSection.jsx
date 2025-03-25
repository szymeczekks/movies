import { IMAGES } from '../../constants/api';
import styles from './HeroSection.module.css';

export function HeroSection({background, children}) {
  return (
    <section className={styles.heroSection} style={{backgroundImage: `url(${background})`}}>
        <div className="wrapper">
            {children}
        </div>
    </section>
  );
}