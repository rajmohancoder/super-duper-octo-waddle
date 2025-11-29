import Link from 'next/link';
import { GraduationCap } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <GraduationCap size={32} />
                <span>EduPlatform</span>
            </Link>

            <nav className={styles.nav}>
                <ul className={styles.navLinks}>
                    <li><Link href="/" className={styles.link}>Home</Link></li>
                    <li><Link href="/about" className={styles.link}>About Us</Link></li>
                    <li><Link href="/contact" className={styles.link}>Contact</Link></li>
                </ul>
                <Link href="/sign-up">
                    <button className={styles.cta}>Get Started</button>
                </Link>
            </nav>
        </header>
    );
}
