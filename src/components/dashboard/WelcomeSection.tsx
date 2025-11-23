import React from 'react';
import styles from '@/app/dashboard/dashboard.module.css';

const WelcomeSection = () => {
    return (
        <div className={styles.welcomeSection}>
            <h1 className={styles.welcomeTitle}>Welcome back, Ananya!</h1>
            <p className={styles.welcomeSubtitle}>Here's a summary of your school dashboard.</p>
        </div>
    );
};

export default WelcomeSection;
