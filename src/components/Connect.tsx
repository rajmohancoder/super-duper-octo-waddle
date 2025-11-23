import styles from './Connect.module.css';

export default function Connect() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Connect with Teachers</h2>
                    <p className={styles.desc}>
                        Have a question or need to discuss something? Our direct messaging system makes parent-teacher communication simple and effective.
                    </p>
                    <button className={styles.messageBtn}>Send a Message</button>
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
    );
}
