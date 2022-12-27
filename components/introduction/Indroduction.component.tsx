import React from 'react';
import styles from "./Introduction.module.css"

export const Paragraph = () => {
    return (
        <div className={styles.intro_container}>
            <p className={styles.subtitle_0}>Hi, my name is</p>
            <p className={styles.title_0}>J. Pablo Vera</p>
            <p className={styles.title_1}>I build things for the web</p>
        </div>
    )
}

