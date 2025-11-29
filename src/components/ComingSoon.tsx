import Header from './Header';
import Footer from './Footer';
import styles from './ComingSoon.module.css';

export default function ComingSoon() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Coming Soon</h1>
                <p className={styles.message}>We are working hard to bring you this feature. Stay tuned!</p>
            </main>
            <Footer />
        </div>
    );
}
