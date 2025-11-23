import React from 'react';
import styles from '@/app/dashboard/dashboard.module.css';

const Timetable = () => {
    const schedule = [
        { time: '09:00 - 10:00', subject: 'Mathematics', room: 'Room 201', color: '#4285F4' },
        { time: '10:00 - 11:00', subject: 'Science', room: 'Lab 3', color: '#34A853' },
        { time: '11:00 - 12:00', subject: 'English', room: 'Room 105', color: '#FBBC05' },
    ];

    return (
        <div className={styles.card}>
            <h3 className={styles.cardTitle}>Today's Timetable</h3>
            <div className={styles.timetableList}>
                {schedule.map((item, index) => (
                    <div key={index} className={styles.timetableItem}>
                        <div className={styles.timeSlot}>
                            {item.time.split(' - ').map((t, i) => (
                                <div key={i}>{t}</div>
                            ))}
                        </div>
                        <div
                            className={styles.classIndicator}
                            style={{ backgroundColor: item.color }}
                        ></div>
                        <div className={styles.classDetails}>
                            <h4>{item.subject}</h4>
                            <p>{item.room}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timetable;
