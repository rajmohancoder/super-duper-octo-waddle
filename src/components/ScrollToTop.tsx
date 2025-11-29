'use client';

import { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    className={styles.scrollButton}
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className={styles.icon}
                    >
                        <rect x="128" y="32" width="256" height="32" rx="16" ry="16" />
                        <path
                            d="M 144 208 L 256 96 L 368 208"
                            stroke="currentColor"
                            strokeWidth="32"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <line
                            x1="256"
                            y1="96"
                            x2="256"
                            y2="400"
                            stroke="currentColor"
                            strokeWidth="32"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            )}
        </>
    );
}
