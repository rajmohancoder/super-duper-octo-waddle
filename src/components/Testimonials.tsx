'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        initials: "JD",
        quote: "This app has made it so much easier to keep track of my child's progress and communicate with teachers. It's a lifesaver!",
        name: "Jane Doe",
        role: "Parent"
    },
    {
        initials: "EW",
        quote: "Managing my classroom has never been more efficient. The attendance and communication tools are fantastic.",
        name: "Emily White",
        role: "Teacher"
    },
    {
        initials: "JS",
        quote: "I like that my child's homework and grades are so easy to see. It helps us stay on track as a family.",
        name: "John Smith",
        role: "Parent"
    },
    {
        initials: "MJ",
        quote: "The real-time notifications keep me informed about everything happening at school. I never miss important updates.",
        name: "Maria Johnson",
        role: "Parent"
    },
    {
        initials: "RB",
        quote: "As a teacher, this platform has streamlined my workflow significantly. I can focus more on teaching and less on paperwork.",
        name: "Robert Brown",
        role: "Teacher"
    },
    {
        initials: "SK",
        quote: "The mobile app makes it convenient to check my child's progress on the go. Highly recommended for busy parents!",
        name: "Sarah Kim",
        role: "Parent"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(testimonials.length / itemsPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
        }, 5000);

        return () => clearInterval(interval);
    }, [totalPages]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalPages - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    };

    const getCurrentTestimonials = () => {
        const startIndex = currentIndex * itemsPerPage;
        return testimonials.slice(startIndex, startIndex + itemsPerPage);
    };

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>What Our Community is Saying</h2>

            <div className={styles.sliderWrapper}>
                <button
                    className={styles.navButton}
                    onClick={goToPrevious}
                    aria-label="Previous testimonials"
                >
                    <ChevronLeft size={28} />
                </button>

                <div className={styles.grid}>
                    {getCurrentTestimonials().map((t, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.avatar}>{t.initials}</div>
                            <p className={styles.quote}>"{t.quote}"</p>
                            <div>
                                <h4 className={styles.name}>{t.name}</h4>
                                <span className={styles.role}>{t.role}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className={styles.navButton}
                    onClick={goToNext}
                    aria-label="Next testimonials"
                >
                    <ChevronRight size={28} />
                </button>
            </div>

            <div className={styles.indicators}>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to page ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
