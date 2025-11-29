import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Ready to Transform Your School's Experience?</h2>
            <p className={styles.subtext}>
                Join hundreds of schools embracing a smarter, more connected way of managing day-to-day operations. Get started today.
            </p>
            <Link href="/sign-up">
                <button className={styles.button}>Get Started Now</button>
            </Link>
        </section>
    );
}
