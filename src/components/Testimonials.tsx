import styles from './Testimonials.module.css';

const testimonials = [
    {
        initials: "JD",
        quote: "\"This app has made it so much easier to keep track of my child's progress and communicate with teachers. It's a lifesaver!\"",
        name: "Jane Doe",
        role: "Parent"
    },
    {
        initials: "EW",
        quote: "\"Managing my classroom has never been more efficient. The attendance and communication tools are fantastic.\"",
        name: "Emily White",
        role: "Teacher"
    },
    {
        initials: "JS",
        quote: "\"I like that my child's homework and grades are so easy to see. It helps us stay on track as a family.\"",
        name: "John Smith",
        role: "Parent"
    }
];

export default function Testimonials() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>What Our Community is Saying</h2>
            <div className={styles.grid}>
                {testimonials.map((t, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.avatar}>{t.initials}</div>
                        <p className={styles.quote}>{t.quote}</p>
                        <div>
                            <h4 className={styles.name}>{t.name}</h4>
                            <span className={styles.role}>{t.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
