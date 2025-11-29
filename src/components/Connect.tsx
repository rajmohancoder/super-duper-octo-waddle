'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import styles from './Connect.module.css';

export default function Connect() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Close modal immediately
        setIsModalOpen(false);

        // Show toast notification
        setShowToast(true);

        // Auto-hide toast after 5 seconds
        setTimeout(() => {
            setShowToast(false);
        }, 5000);
    };

    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Connect with Teachers</h2>
                        <p className={styles.desc}>
                            Have a question or need to discuss something? Our direct messaging system makes parent-teacher communication simple and effective.
                        </p>
                        <button
                            className={styles.messageBtn}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Send a Message
                        </button>
                    </div>

                    <div className={styles.chatWidget}>
                        <div className={styles.chatHeader}>
                            <div className={styles.avatar}>EW</div>
                            <div className={styles.teacherInfo}>
                                <h4>Emily White</h4>
                                <span>Math Teacher</span>
                            </div>
                        </div>

                        <div className={styles.message}>
                            Hello! Just checking in on John's progress with the latest assignment.
                        </div>

                        <div className={styles.reply}>
                            Hi Emily, thanks for reaching out! I'll make sure he completes it tonight.
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal Dialog */}
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
                    <div className={styles.modalDialog} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <div className={styles.modalTitleWrapper}>
                                <span className={styles.modalIcon}>✉</span>
                                <h3 className={styles.modalTitle}>Connect with Teachers</h3>
                            </div>
                            <button
                                className={styles.closeButton}
                                onClick={() => setIsModalOpen(false)}
                                aria-label="Close dialog"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <form className={styles.modalForm} onSubmit={handleSubmit}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="parentName">Parent Name</label>
                                    <input
                                        type="text"
                                        id="parentName"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="studentName">Student Name</label>
                                    <input
                                        type="text"
                                        id="studentName"
                                        placeholder="Enter student's full name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="class">Class</label>
                                    <select id="class" required>
                                        <option value="">e.g., Grade 5</option>
                                        <option value="1">1st</option>
                                        <option value="2">2nd</option>
                                        <option value="3">3rd</option>
                                        <option value="4">4th</option>
                                        <option value="5">5th</option>
                                        <option value="6">6th</option>
                                        <option value="7">7th</option>
                                        <option value="8">8th</option>
                                        <option value="9">9th</option>
                                        <option value="10">10th</option>
                                        <option value="11">11th</option>
                                        <option value="12">12th</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="section">Section</label>
                                    <select id="section" required>
                                        <option value="">e.g., Section A</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject">Subject</label>
                                <select id="subject" required>
                                    <option value="">e.g., Mathematics</option>
                                    <option value="mathematics">Mathematics</option>
                                    <option value="science">Science</option>
                                    <option value="english">English</option>
                                    <option value="social-studies">Social Studies</option>
                                    <option value="hindi">Hindi</option>
                                    <option value="computer-science">Computer Science</option>
                                    <option value="physical-education">Physical Education</option>
                                    <option value="art">Art</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="Type your message here..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Toast Notification */}
            {showToast && (
                <div className={styles.toast}>
                    <div className={styles.toastContent}>
                        <span className={styles.toastIcon}>✓</span>
                        <div>
                            <strong>Success!</strong>
                            <p>Your message has been sent successfully. We will get back to you soon.</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
