import Link from 'next/link';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoSection}>
                    <div className={styles.logo}>
                        <GraduationCap size={32} />
                        <span>EduPlatform</span>
                    </div>
                    <div className={styles.contactInfo}>
                        <p>Karas - 32424, 34730</p>
                        <p>Student's Helpline - 87334 24701</p>
                        <p>info@eduplatform.com</p>
                    </div>
                    <div className={styles.socials}>
                        <Link href="#" className={styles.socialIcon}><Facebook size={18} /></Link>
                        <Link href="#" className={styles.socialIcon}><Twitter size={18} /></Link>
                        <Link href="#" className={styles.socialIcon}><Instagram size={18} /></Link>
                    </div>
                </div>

                <div className={styles.column}>
                    <ul>
                        <li><Link href="#">Features</Link></li>
                        <li><Link href="#">Company</Link></li>
                        <li><Link href="#">Contact Us</Link></li>
                        <li><Link href="#">Request Demo</Link></li>
                        <li><Link href="#">Sitemap</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <ul>
                        <li><Link href="#">CBSE Report Card</Link></li>
                        <li><Link href="#">Library Management Software</Link></li>
                        <li><Link href="#">School Admission Software</Link></li>
                        <li><Link href="#">Parents Communication</Link></li>
                        <li><Link href="#">Bus Location Tracking</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <ul>
                        <li><Link href="#">Student Information System</Link></li>
                        <li><Link href="#">School Account Software</Link></li>
                        <li><Link href="#">School Timetable Software</Link></li>
                        <li><Link href="#">Student Attendance Software</Link></li>
                        <li><Link href="#">School Examination Software</Link></li>
                    </ul>
                </div>
            </div>

            <div className={styles.copyright}>
                © 2024 EduPlatform. All Rights Reserved.
            </div>
        </footer>
    );
}
