'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './AnnouncementsEvents.module.css';

const eventImages = [
    '/events-side-image.jpg',
    '/event-image-1.jpg',
    '/event-image-2.jpg',
    '/event-image-3.jpg'
];

export default function AnnouncementsEvents() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % eventImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Announcements Column */}
                <div>
                    <h2 className={styles.columnTitle}>School Announcements</h2>

                    <div className={styles.announcement}>
                        <div className={styles.annHeader}>
                            <h3 className={styles.annTitle}>Annual Sports Day</h3>
                            <span className={styles.annDate}>Oct 25, 2024</span>
                        </div>
                        <p className={styles.annDesc}>
                            Get ready for a day of fun and competition! All students are encouraged to participate. Parents are welcome to cheer.
                        </p>
                        <Link href="#" className={styles.readMore}>Read More</Link>
                    </div>

                    <div className={styles.announcement}>
                        <div className={styles.annHeader}>
                            <h3 className={styles.annTitle}>Parent-Teacher Meetings</h3>
                            <span className={styles.annDate}>Nov 3-5, 2024</span>
                        </div>
                        <p className={styles.annDesc}>
                            Please book your slots to discuss your child's progress with their respective teachers. Bookings are open on the portal.
                        </p>
                        <Link href="#" className={styles.readMore}>Read More</Link>
                    </div>
                </div>

                {/* Events Column */}
                <div>
                    <h2 className={styles.columnTitle}>Upcoming Events</h2>
                    <div className={styles.eventsCard}>
                        <div className={styles.eventsContent}>
                            <div className={styles.eventsList}>
                                <div className={styles.event}>
                                    <div className={styles.dateBadge}>
                                        <span className={styles.month}>OCT</span>
                                        <span className={styles.day}>28</span>
                                    </div>
                                    <div className={styles.eventInfo}>
                                        <h4>Science Fair</h4>
                                        <span className={styles.eventLocation}>School Auditorium</span>
                                    </div>
                                </div>

                                <div className={styles.event}>
                                    <div className={styles.dateBadge}>
                                        <span className={styles.month}>NOV</span>
                                        <span className={styles.day}>12</span>
                                    </div>
                                    <div className={styles.eventInfo}>
                                        <h4>Music Concert</h4>
                                        <span className={styles.eventLocation}>Community Hall</span>
                                    </div>
                                </div>

                                <div className={styles.event}>
                                    <div className={styles.dateBadge}>
                                        <span className={styles.month}>DEC</span>
                                        <span className={styles.day}>03</span>
                                    </div>
                                    <div className={styles.eventInfo}>
                                        <h4>Art Exhibition</h4>
                                        <span className={styles.eventLocation}>Art Room</span>
                                    </div>
                                </div>

                                <div className={styles.event}>
                                    <div className={styles.dateBadge}>
                                        <span className={styles.month}>DEC</span>
                                        <span className={styles.day}>20</span>
                                    </div>
                                    <div className={styles.eventInfo}>
                                        <h4>Winter Carnival</h4>
                                        <span className={styles.eventLocation}>School Grounds</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.eventImageCarousel}>
                                {eventImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.carouselSlide} ${index === currentImageIndex ? styles.active : ''
                                            }`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`School Event ${index + 1}`}
                                            width={300}
                                            height={400}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Link href="#" className={styles.viewCalendar}>View Full Calendar</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
