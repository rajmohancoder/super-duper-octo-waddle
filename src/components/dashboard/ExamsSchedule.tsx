"use client";
import React, { useState } from 'react';
import styles from '@/app/dashboard/dashboard.module.css';

const ExamsSchedule = () => {
    const [activeTab, setActiveTab] = useState('Term I');

    const examsData = {
        'Term I': [
            { subject: 'Mathematics', date: '15 Sep 2023', score: '92%' },
            { subject: 'Science', date: '18 Sep 2023', score: '95%' },
            { subject: 'English', date: '20 Sep 2023', score: '88%' },
            { subject: 'History', date: '22 Sep 2023', score: '90%' },
        ],
        'Term II': [
            { subject: 'Mathematics', date: '15 Dec 2023', score: 'TBD' },
            { subject: 'Science', date: '18 Dec 2023', score: 'TBD' },
            { subject: 'English', date: '20 Dec 2023', score: 'TBD' },
            { subject: 'History', date: '22 Dec 2023', score: 'TBD' },
        ],
        'Term III': [
            { subject: 'Mathematics', date: '15 Mar 2024', score: 'TBD' },
            { subject: 'Science', date: '18 Mar 2024', score: 'TBD' },
            { subject: 'English', date: '20 Mar 2024', score: 'TBD' },
            { subject: 'History', date: '22 Mar 2024', score: 'TBD' },
        ],
    };

    return (
        <div className={styles.card}>
            <h3 className={styles.cardTitle}>Exams Schedule</h3>

            <div className={styles.tabsContainer}>
                {Object.keys(examsData).map((term) => (
                    <button
                        key={term}
                        className={`${styles.tab} ${activeTab === term ? styles.active : ''}`}
                        onClick={() => setActiveTab(term)}
                    >
                        {term}
                    </button>
                ))}
            </div>

            <div className={styles.examsGrid}>
                {examsData[activeTab as keyof typeof examsData].map((exam, index) => (
                    <div key={index} className={styles.examCard}>
                        <h4 className={styles.examSubject}>{exam.subject}</h4>
                        <p className={styles.examDate}>{exam.date}</p>
                        <p className={styles.examScore}>{exam.score}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExamsSchedule;
