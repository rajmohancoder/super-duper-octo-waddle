import LoginCard from '@/components/LoginCard';
import styles from '@/components/SignUp.module.css'; // Reusing layout styles
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Login - EduPlatform',
    description: 'Login to your account',
};

export default function LoginPage() {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <div className={styles.leftSection}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/login-side.jpg"
                            alt="Student studying"
                            fill
                            priority
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.welcomeTitle}>Welcome Back to the Portal</h2>
                        <p className={styles.welcomeDesc}>
                            Connecting students and teachers for a brighter future.
                        </p>
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <div className={styles.formContainer}>
                        <LoginCard />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
