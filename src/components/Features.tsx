import {
    CalendarCheck, Bus, Bell,
    TrendingUp, Megaphone, GraduationCap,
    Smartphone, Users, FileText
} from 'lucide-react';
import Link from 'next/link';
import styles from './Features.module.css';

const features = [
    {
        icon: CalendarCheck,
        color: styles.bgRed,
        title: "Instant Attendance Report",
        desc: "Daily and monthly attendance in minutes through SMS & Mobile App.",
        link: "/instance-report"
    },
    {
        icon: Bus,
        color: styles.bgBlue,
        title: "Bus Location Tracking",
        desc: "Know the exact bus location without waiting at bus stops.",
        link: "/bus-location-tracking"
    },
    {
        icon: Bell,
        color: styles.bgYellow,
        title: "Homework Notifications",
        desc: "Daily homework updates to help parents monitor academic performance.",
        link: "/homework-notifications"
    },
    {
        icon: TrendingUp,
        color: styles.bgGreen,
        title: "Performance Updates",
        desc: "Regular updates about child's performance in tests & exams.",
        link: "/performance-updates"
    },
    {
        icon: Megaphone,
        color: styles.bgPurple,
        title: "Announcements",
        desc: "Instant updates on important circulars and school notifications.",
        link: "/announcements"
    },
    {
        icon: GraduationCap,
        color: styles.bgIndigo,
        title: "Exams & Extra Activities",
        desc: "Access study materials, projects, assignments, and other content.",
        link: "/exams-extra-activities"
    },
    {
        icon: Smartphone,
        color: styles.bgTeal,
        title: "Mobile Application",
        desc: "Our smart, intuitive, and easy-to-use mobile application.",
        link: "/mobile-application"
    },
    {
        icon: Users,
        color: styles.bgPink,
        title: "Add-ons for School Admin",
        desc: "Includes online registration, accounts, role-based setup, and more.",
        link: "/add-ons-for-school-admin"
    },
    {
        icon: FileText,
        color: styles.bgOrange,
        title: "CCE Application",
        desc: "Makes CCE implementation easier with flexible setup options and reports.",
        link: "/cce-application"
    }
];

export default function Features() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Our Smart Features</h2>
            <p className={styles.subheading}>
                Everything you need to manage your school is now in one place, accessible from anywhere.
            </p>

            <div className={styles.grid}>
                {features.map((feature, index) => (
                    <Link key={index} href={feature.link} className={styles.featureLink}>
                        <div className={styles.feature}>
                            <div className={`${styles.iconWrapper} ${feature.color}`}>
                                <feature.icon size={24} />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDesc}>{feature.desc}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
