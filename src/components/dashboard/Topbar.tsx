import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import Image from 'next/image';
import styles from '@/app/dashboard/dashboard.module.css';

interface TopbarProps {
    onMenuClick: () => void;
}

const Topbar = ({ onMenuClick }: TopbarProps) => {
    return (
        <header className={styles.topbar}>
            <button className={styles.menuButton} onClick={onMenuClick}>
                <Menu size={24} />
            </button>

            <div className={styles.searchBar}>
                <Search size={18} color="#999" />
                <input type="text" placeholder="Search..." className={styles.searchInput} />
            </div>

            <div className={styles.topbarActions}>
                <button className={styles.iconButton}>
                    <Bell size={20} />
                </button>
                <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
                    alt="User"
                    width={36}
                    height={36}
                    className={styles.userAvatarMini}
                />
            </div>
        </header>
    );
};

export default Topbar;
