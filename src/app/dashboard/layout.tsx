"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';
import styles from './dashboard.module.css';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className={styles.dashboardContainer}>
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

            {/* Overlay for mobile */}
            <div
                className={`${styles.overlay} ${isSidebarOpen ? styles.visible : ''}`}
                onClick={closeSidebar}
            ></div>

            <div className={styles.mainContent}>
                <Topbar onMenuClick={toggleSidebar} />
                <main className={styles.contentArea}>
                    {children}
                </main>
            </div>
        </div>
    );
}
