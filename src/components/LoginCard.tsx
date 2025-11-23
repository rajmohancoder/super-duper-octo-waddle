"use client";

import { useState } from 'react';
import { User, Lock } from 'lucide-react';
import styles from './LoginCard.module.css';

export default function LoginCard() {
    const [activeTab, setActiveTab] = useState<'student' | 'school'>('student');

    return (
        <div className={styles.card}>
            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'student' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('student')}
                >
                    Student Login
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'school' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('school')}
                >
                    School Login
                </button>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formGroup}>
                    <div className={styles.inputWrapper}>
                        <User size={18} className={styles.icon} />
                        <input
                            type="text"
                            placeholder="Login Id"
                            className={styles.input}
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <div className={styles.inputWrapper}>
                        <Lock size={18} className={styles.icon} />
                        <input
                            type="password"
                            placeholder="Password"
                            className={styles.input}
                        />
                    </div>
                </div>

                <button type="submit" className={styles.signInBtn}>
                    SIGN IN
                </button>
            </form>

            <div className={styles.notice}>
                <strong>Important Notice:</strong> We are glad to share that all accounts have been migrated to newer version. For any clarification please contact your account manager.
            </div>
        </div>
    );
}
