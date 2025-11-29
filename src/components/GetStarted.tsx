import styles from './GetStarted.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Calendar, MessageSquare, BarChart3, Bell, Users } from 'lucide-react';

export default function GetStarted() {
    const features = [
        {
            icon: Calendar,
            title: 'Attendance Tracking',
            description: 'Monitor student attendance in real-time with instant notifications.'
        },
        {
            icon: BarChart3,
            title: 'Grade Management',
            description: 'Track academic progress and view detailed performance reports.'
        },
        {
            icon: BookOpen,
            title: 'Homework & Assignments',
            description: 'Stay updated on homework, assignments, and submission deadlines.'
        },
        {
            icon: MessageSquare,
            title: 'Teacher Communication',
            description: 'Direct messaging system for seamless parent-teacher interaction.'
        },
        {
            icon: Bell,
            title: 'Instant Notifications',
            description: 'Receive real-time updates about school events and announcements.'
        },
        {
            icon: Users,
            title: 'Community Portal',
            description: 'Connect with other parents and participate in school activities.'
        }
    ];

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Welcome to Our School Portal</h1>
                    <p className={styles.heroSubtitle}>
                        Manage everything from attendance to grades, all in one place.
                        Join our community to stay connected with your student's educational journey.
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="/sign-up" className={styles.primaryButton}>
                            Get Started
                        </Link>
                        <Link href="/" className={styles.secondaryButton}>
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <Image
                        src="/school-illustration.jpg"
                        alt="School Portal Illustration"
                        width={600}
                        height={400}
                        priority
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.features}>
                <h2 className={styles.featuresTitle}>Everything You Need in One Platform</h2>
                <p className={styles.featuresSubtitle}>
                    Our comprehensive school management system brings together all the tools parents need to support their children's education.
                </p>

                <div className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <feature.icon size={32} />
                            </div>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
                <p className={styles.ctaSubtitle}>
                    Create your parent account today and start managing your student's progress.
                </p>
                <Link href="/sign-up" className={styles.ctaButton}>
                    Create Account
                </Link>
            </section>
        </div>
    );
}
