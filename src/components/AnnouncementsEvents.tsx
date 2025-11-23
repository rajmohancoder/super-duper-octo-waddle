import Link from 'next/link';
import styles from './AnnouncementsEvents.module.css';

export default function AnnouncementsEvents() {
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

                        <Link href="#" className={styles.viewCalendar}>View Full Calendar</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
