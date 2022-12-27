import React from 'react';
import styles from './Ocean.module.css'
const Ocean = () => {
    return (
        <div className={styles.ocean}>
            <div className={styles.wave} />
            <div className={styles.wave} />
            <div className={styles.wave} />
        </div>
    )
}

export default Ocean
