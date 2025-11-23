import React from 'react';
import styles from '@/app/dashboard/dashboard.module.css';

const FeeDetails = () => {
    return (
        <div className={styles.card}>
            <h3 className={styles.cardTitle}>Fee Details</h3>

            <div className={styles.feeBox}>
                <div style={{ fontSize: '0.9rem', color: '#555' }}>Outstanding Balance</div>
                <div className={styles.feeAmount}>$250.00</div>
                <div style={{ fontSize: '0.8rem', color: '#d32f2f', fontWeight: 500 }}>Due on: 25th Dec 2023</div>
            </div>

            <button className={styles.payButton}>Pay Now</button>
        </div>
    );
};

export default FeeDetails;
