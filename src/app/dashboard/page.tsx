import React from 'react';
import WelcomeSection from '@/components/dashboard/WelcomeSection';
import AcademicPerformance from '@/components/dashboard/AcademicPerformance';
import PersonalInformation from '@/components/dashboard/PersonalInformation';
import Timetable from '@/components/dashboard/Timetable';
import Attendance from '@/components/dashboard/Attendance';
import FeeDetails from '@/components/dashboard/FeeDetails';
import styles from './dashboard.module.css';

export default function DashboardPage() {
    return (
        <div>
            <WelcomeSection />

            <div className={styles.dashboardGrid}>
                <div className={styles.leftColumn}>
                    <AcademicPerformance />
                    <Timetable />
                </div>

                <div className={styles.rightColumn}>
                    <PersonalInformation />
                    <Attendance />
                    <FeeDetails />
                </div>
            </div>
        </div>
    );
}
