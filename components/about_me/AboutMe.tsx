import React from 'react';
import {Paragraph} from "../introduction/Indroduction.component";
import styles from "./AboutMe.module.css"
import global_styles from "../../styles/Home.module.css"

const skill_list = [
    {
        title: "Languages",
        values: ["JavaScript (ES6+)","TypeScript", "CSS" , "HTML" , "C#", "Python", "SQL", "PHP"]
    },
    {
        title: "Libraries",
        values: ["React.js", "fabric.js", "MUI", "Prisma", "TypeORM", "ffmpeg", "Redux", "MapBox", "Jest", "Selenium"]
    },
    {
        title: "Framework",
        values: ["Next.js", ".NET Core", "Laravel", "Lumen", "NodeJS", "GraphQl"]
    },
    {
        title: "Other",
        values: ["PostgreSQl" ,"Git", "ESLint", "MySQL", "WebStorm", "Agile", "Docker"]
    },
]

export const AboutMe = ({forward_ref} : {forward_ref: any}) => {

    const skillTitle = `${global_styles.title_1} ${global_styles.font_light_1} ${styles.title}`
    const skillColumTitleFont = `${global_styles.subtitle_1} ${global_styles.font_light_heavy} ${styles.skillColumnTitle}`
    const skillValueFont = `${global_styles.subtitle_2} ${global_styles.font_light_1} ${styles.skillColumnValue}`
    const textFont = `${global_styles.subtitle_1} ${global_styles.font_light_extra} ${styles.text}`
    const aboutMeTitle = `${global_styles.title_1} ${global_styles.font_light_1} ${styles.title}`

    return (
        <>
            <div style={{marginBottom: "10vh"}} ref={forward_ref}></div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <span className={aboutMeTitle}>ABOUT ME</span>
                <div style={{display: "flex"}}>
                    <div className={styles.container}>
                        <p className={textFont}>
                            Hello, I’m from Argentina and my name is Juan Pablo, I love creating things that live on the internet. I’m a software engineer specialized in creating (and occasionally designing) exceptional digital experiences. I’ve had the privilege of working at a small software agency, a big corporate software company and lastly in an incredible startup. My main focus these days is building exceptional digital experiences with React, but I also love to try new technologies or work on things that I didn’t knew. Outside of work, I love to travel, play football, video games, books and watching movies
                        </p>
                    </div>
                </div>
                <div className={styles.skillContainer}>
                    <p className={skillTitle}>SKILLS</p>
                    <div className={styles.skillColumnContainer}>
                        {skill_list.map(value => {
                            return (
                                <div key={`container ${value.title}`} className={styles.skillColumn}>
                                    <span className={skillColumTitleFont}>{value.title}</span>
                                    <div className={styles.skillValueColumn}>
                                        {value.values.map(val =>
                                            <span className={skillValueFont} key={val}>
                                                {val}
                                            </span>)}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
