import React from 'react';
import styles from '@/app/dashboard/dashboard.module.css';

const Attendance = () => {
    return (
        <div className={styles.card}>
            <h3 className={styles.cardTitle}>Attendance</h3>

            <div className={styles.attendanceChart}>
                {/* Simple SVG Circle Chart */}
                <div style={{ position: 'relative', width: 150, height: 150 }}>
                    <svg width="150" height="150" viewBox="0 0 150 150">
                        <circle cx="75" cy="75" r="60" fill="none" stroke="#eee" strokeWidth="10" />
                        <circle
                            cx="75"
                            cy="75"
                            r="60"
                            fill="none"
                            stroke="#00c853"
                            strokeWidth="10"
                            strokeDasharray="377"
                            strokeDashoffset="15"
                            transform="rotate(-90 75 75)"
                            strokeLinecap="round"
                        />
                    </svg>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#333' }}>96%</div>
                        <div style={{ fontSize: '0.8rem', color: '#666' }}>Present</div>
                    </div>
                </div>

                <div className={styles.attendanceStats}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue} style={{ color: '#333' }}>180</span>
                        <span className={styles.statLabel}>Total Days</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue} style={{ color: '#ff5252' }}>7</span>
                        <span className={styles.statLabel}>Absent</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendance;
