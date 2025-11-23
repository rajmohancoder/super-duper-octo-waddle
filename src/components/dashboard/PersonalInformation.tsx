import React from 'react';
import Image from 'next/image';
import styles from '@/app/dashboard/dashboard.module.css';

const PersonalInformation = () => {
    return (
        <div className={styles.card}>
            <h3 className={styles.cardTitle}>Personal Information</h3>

            <div className={styles.profileHeader}>
                <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                    alt="Ananya Sharma"
                    width={80}
                    height={80}
                    className={styles.profileAvatarLarge}
                />
                <div>
                    <h2 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>Ananya Sharma</h2>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>Class: 10th 'A'</div>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>Roll No: 101</div>
                </div>
            </div>

            <div className={styles.infoGrid}>
                <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Student ID:</span>
                    <span className={styles.infoValue}>S12345</span>
                </div>
                <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Blood Group:</span>
                    <span className={styles.infoValue}>B+</span>
                </div>
                <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>DOB:</span>
                    <span className={styles.infoValue}>15 Aug 2008</span>
                </div>
            </div>
        </div>
    );
};

export default PersonalInformation;
