import React from "react";
import styles from "./Project.module.css"
import global_styles from "../../styles/Home.module.css"
import {GitHub} from "@mui/icons-material";

const projects = [
    {
        title: "Personal Portfolio v1",
        description: "I needed a new cool resume, so I created this Portfolio :)",
        technologies: ["Next.js", "React", "TypeScript", "CSS"]
    },
    {
        title: "CMS API",
        description: "I had free time and I was curious about how a CMS worked so I decided to make a simple one",
        technologies: ["express.js", "TypeScript", "TypeORM", "MySQl"]
    },
    {
        title: "Covid Map",
        description: "I wanted to experiment with React hooks so I decided to make a global interactive map. It's not my best work, but I'm proud of it.",
        technologies: ["React", "JavaScript", "CSS", "MapBox"]
    }
]


export const Project = ({forward_ref}) => {
    return (
        <div style={{marginTop: "20vh"}}>
            <div ref={forward_ref}/>
            <div className={styles.container}>
                <span key="Project Title" style={{alignSelf: "center", marginBottom: "10vh"}} className={`${global_styles.title_1} ${global_styles.font_light_1}`}>Some Things I’ve Built</span>
                <div className={styles.projectsContainer}>
                    {projects.map(project => {
                        return (
                            <div className={styles.projectContainer} key={`div ${project.title}`}>
                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                    <span key={`project: ${project.title}`} className={`${global_styles.font_light_1} ${global_styles.title_2}`}>{project.title}</span>
                                    <a style={{marginRight: "10px"}} href="https://mui.com/material-ui/icons/" target="_blank" rel="noopener noreferrer">
                                        <GitHub className={global_styles.icon} fontSize="medium" />
                                    </a>
                                </div>
                                <p className={`${global_styles.subtitle_2} ${global_styles.font_light_1}`}>{project.description}</p>
                                <div className={global_styles.tag_container_1}>
                                    {project.technologies.map(tech => <span className={global_styles.tag_1}>{tech}</span>)}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
