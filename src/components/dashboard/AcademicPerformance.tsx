import React from 'react';
import styles from '@/app/dashboard/dashboard.module.css';

const AcademicPerformance = () => {
    const subjects = [
        { name: 'Mathematics', score: 92 },
        { name: 'Science', score: 95 },
        { name: 'English', score: 88 },
        { name: 'History', score: 90 },
    ];

    return (
        <div className={styles.card}>
            <h3 className={styles.cardTitle}>Academic Performance</h3>
            <div className={styles.academicContainer}>
                <div className={styles.gpaBox}>
                    <span>Overall GPA</span>
                    <span className={styles.gpaValue}>4.8</span>
                    <span style={{ fontSize: '0.8rem', color: '#666' }}>out of 5.0</span>
                </div>

                <div className={styles.subjectsList}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 10, color: '#555' }}>Subject-wise Performance</div>
                    {subjects.map((subject) => (
                        <div key={subject.name} className={styles.subjectRow}>
                            <span className={styles.subjectName}>{subject.name}</span>
                            <div className={styles.progressBarContainer}>
                                <div
                                    className={styles.progressBarFill}
                                    style={{ width: `${subject.score}%` }}
                                ></div>
                            </div>
                            <span className={styles.subjectScore}>{subject.score}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AcademicPerformance;
