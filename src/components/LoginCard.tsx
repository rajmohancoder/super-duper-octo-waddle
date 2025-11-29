"use client";

import { useState } from 'react';
import { User, Lock } from 'lucide-react';
import styles from './LoginCard.module.css';

export default function LoginCard() {
    const [activeTab, setActiveTab] = useState<'student' | 'school'>('student');

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Sign In</h1>
                <p className={styles.subtitle}>Please enter your credentials to proceed.</p>
            </div>

            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'student' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('student')}
                >
                    Student
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'school' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('school')}
                >
                    Teacher
                </button>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formGroup}>
                    <div className={styles.inputWrapper}>
                        <User size={20} className={styles.icon} />
                        <input
                            type="text"
                            placeholder="Login ID"
                            className={styles.input}
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <div className={styles.inputWrapper}>
                        <Lock size={20} className={styles.icon} />
                        <input
                            type="password"
                            placeholder="Password"
                            className={styles.input}
                        />
                    </div>
                </div>

                <button type="submit" className={styles.signInBtn}>
                    Sign In
                </button>
            </form>

            <div className={styles.footer}>
                <a href="/sign-up" className={styles.signupLink}>
                    Don't have an account? Sign up now!
                </a>
            </div>

            <div className={styles.adminContact}>
                If you are facing any difficulties logging in, please contact the administrator at<br />
                <strong>+91 884884884</strong> or <strong>+91 8833349421</strong> for assistance.
            </div>
        </div>
    );
}
