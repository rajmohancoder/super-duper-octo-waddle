import LoginCard from './LoginCard';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Streamline School Operations, Connect Your Community
                </h1>
                <p className={styles.subtitle}>
                    Simplifying school management for staff, students, and parents with one integrated, modern platform.
                </p>
                <button className={styles.exploreBtn}>
                    Explore Features
                </button>
            </div>

            <div className={styles.loginWrapper}>
                <LoginCard />
            </div>
        </section>
    );
}
