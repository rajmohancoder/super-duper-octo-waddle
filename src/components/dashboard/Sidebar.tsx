import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutDashboard, BookOpen, CreditCard, Calendar, Clock, User, Settings, LogOut, GraduationCap, X } from 'lucide-react';
import styles from '@/app/dashboard/dashboard.module.css';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    return (
        <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <div className={styles.logo} style={{ justifyContent: 'space-between', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 32, height: 32, background: '#007bff', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                        <GraduationCap size={20} />
                    </div>
                    <span>Springfield High</span>
                </div>

                <button
                    onClick={onClose}
                    className={styles.mobileCloseBtn}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#555' }}
                >
                    <X size={24} />
                </button>
            </div>

            <div className={styles.userProfileMini}>
                <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
                    alt="User"
                    width={40}
                    height={40}
                    className={styles.userAvatarMini}
                />
                <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Ananya Sharma</div>
                    <div style={{ fontSize: '0.8rem', color: '#666' }}>Student</div>
                </div>
            </div>

            <nav className={styles.navMenu}>
                <Link href="/dashboard" className={`${styles.navItem} ${styles.active}`}>
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </Link>
                <Link href="/dashboard/academics" className={styles.navItem}>
                    <BookOpen size={20} />
                    <span>Academics</span>
                </Link>
                <Link href="/dashboard/fees" className={styles.navItem}>
                    <CreditCard size={20} />
                    <span>Fees</span>
                </Link>
                <Link href="/dashboard/attendance" className={styles.navItem}>
                    <Calendar size={20} />
                    <span>Attendance</span>
                </Link>
                <Link href="/dashboard/timetable" className={styles.navItem}>
                    <Clock size={20} />
                    <span>Timetable</span>
                </Link>
                <Link href="/dashboard/profile" className={styles.navItem}>
                    <User size={20} />
                    <span>Profile</span>
                </Link>
            </nav>

            <div className={styles.logout}>
                <Link href="/settings" className={styles.navItem}>
                    <Settings size={20} />
                    <span>Settings</span>
                </Link>
                <button className={styles.navItem} style={{ border: 'none', background: 'none', width: '100%', cursor: 'pointer' }}>
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
