import React from 'react';
import styles from "./Rain.module.css"

const Rain = ({drops_count} : {drops_count: number}) => {
    const drops = []
    for(let i = 0; i < drops_count; i++) {
        const position = Math.floor(Math.random() * 100) + 1
        const delay = Math.floor(Math.random() * 10) + 1
        const duration = Math.floor(Math.random() * 5) + Math.random() + 0.4
        const z_position = Math.floor(Math.random() * 10) + 3
        const height = Math.floor(Math.random() * 7) + 1
        const drop = <span
            key={`rain drop ${i} ${position}`}
            style={{
                left: `${position}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                zIndex: z_position,
                height: `${height}vh`
            }}
        />
        drops.push(drop)
    }
    return <div className={styles.rain}>{drops}</div>
}

export default Rain
