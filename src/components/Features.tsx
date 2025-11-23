import {
    CalendarCheck, Bus, Bell,
    TrendingUp, Megaphone, GraduationCap,
    Smartphone, Users, FileText
} from 'lucide-react';
import styles from './Features.module.css';

const features = [
    {
        icon: CalendarCheck,
        color: styles.bgRed,
        title: "Instant Attendance Report",
        desc: "Daily and monthly attendance in minutes through SMS & Mobile App."
    },
    {
        icon: Bus,
        color: styles.bgBlue,
        title: "Bus Location Tracking",
        desc: "Know the exact bus location without waiting at bus stops."
    },
    {
        icon: Bell,
        color: styles.bgYellow,
        title: "Homework Notifications",
        desc: "Daily homework updates to help parents monitor academic performance."
    },
    {
        icon: TrendingUp,
        color: styles.bgGreen,
        title: "Performance Updates",
        desc: "Regular updates about child's performance in tests & exams."
    },
    {
        icon: Megaphone,
        color: styles.bgPurple,
        title: "Announcements",
        desc: "Instant updates on important circulars and school notifications."
    },
    {
        icon: GraduationCap,
        color: styles.bgIndigo,
        title: "Exams & Extra Activities",
        desc: "Access study materials, projects, assignments, and other content."
    },
    {
        icon: Smartphone,
        color: styles.bgTeal,
        title: "Mobile Application",
        desc: "Our smart, intuitive, and easy-to-use mobile application."
    },
    {
        icon: Users,
        color: styles.bgPink,
        title: "Add-ons for School Admin",
        desc: "Includes online registration, accounts, role-based setup, and more."
    },
    {
        icon: FileText,
        color: styles.bgOrange,
        title: "CCE Application",
        desc: "Makes CCE implementation easier with flexible setup options and reports."
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
                    <div key={index} className={styles.feature}>
                        <div className={`${styles.iconWrapper} ${feature.color}`}>
                            <feature.icon size={24} />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDesc}>{feature.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
