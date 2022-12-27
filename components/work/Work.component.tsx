import React, { useState} from 'react';
import styles from "./Work.module.css"
import global_styles from "../../styles/Home.module.css"


const companies = ["PrestoSport", "Accenture", "Neoris", "Freelancer"]

const companies_data = [
    {
        name: "PrestoSport",
        work_title: "Full Stack Engineer",
        timeline: "December 2020 - November 2022",
        achievements: [
            "Versatile. Since I was the main engineer working on the product I needed to work on all parts of the application, from the fronted to the multiple API’s on the backed. Working with many different technologies such as Laravel, ffmpeg, React, Yoga GraphQl, Node.js, docker, etc",
            "Implemented multiple complex features on canvas and fabric.js",
            "Designed/Built and expanded multiple API’s",
            "Implemented a Single-sign on functionality",
            "Integrations with Stripe, Twillio, and multiple others API’s",
            "Upgraded the Prisma version on one of the API",
            "Worked in an Agile Team"
        ],
        technologies: ["React.js", "JavaScript", "CSS", "MUI", "PHP",
            "Laravel", "Yoga Graphql", "Python", "fabric.js", "node.js", "express.js",
            "ffmpeg", "MySql", "AWS Lambda", "Docker", "git", "bitbucker", "Jira", "Stripe"
        ]
    },
    {
        name: "Accenture",
        work_title: "Full Stack Engineer",
        timeline: "November 2019 - March 2021",
        achievements: [
            "I was the regional technical leader of the application.",
            "Worked on an agile team",
            "Expanded and designed an API in C#",
            "Built multiple Python Scripts",
            "Maintained and expanded the Front-End of the application"
        ],
        technologies: ["React.js", "JavaScript", "C#","CSS", "SQL Server", "Python",
            "ASP.NET MVC", ".NET Core" , "git", "Azure Pipelines", "Agile"]
    },
    {
        name: "Neoris",
        work_title: "Front End Engineer",
        timeline: "February 2019 - October 2019",
        achievements: [
            "Worked on an agile team",
            "Expanded an API in C#",
            "Used extensively SQL",
            "Fixed multiple bugs in JavaScript/CSS and added new functionality to the frontend"
        ],
        technologies: ["JavaScript", "C#","CSS", "SQL Server", "ASP.NET MVC"]
    },
    {
        name: "Freelancer",
        work_title: "Front End Engineer",
        timeline: "March 2017 - October 2017",
        achievements: [
            "My first steps on the programming world :)",
            "Helped multiple business get their website",
        ],
        technologies: ["JavaScript", "CSS", "HTML5"]
    }
]

export const Work = ({forward_ref} : {forward_ref: any}) => {

    const [selected_company, select_company] = useState<number>(0)
    const [highlight_movement, set_highlight_movement] = useState<number>(0)
    const company = companies_data[selected_company]

    if (typeof window !== "undefined") {
        let highlight_movement_ = window.innerWidth > 750? 20 : 22.5

        window.addEventListener("resize", () => {
            highlight_movement_ = window.innerWidth > 750? 20 : 22.5
            if (highlight_movement_ !== highlight_movement) set_highlight_movement(highlight_movement_)
        })

        if (highlight_movement !== highlight_movement_) {
            set_highlight_movement(highlight_movement_)
        }
    }

    return (
        <div style={{marginTop: "30vh", display: "flex", flexDirection:"column"}}>
            <div ref={forward_ref}/>
            <span className={`${global_styles.title_1} ${global_styles.font_light_1}`} style={{alignSelf: "center", paddingTop: "10vh"}}>Experience</span>
            <div className={styles.work_container} style={{paddingTop: "10vh"}}>
                <div className={styles.companies_button_container}>
                    {
                        companies.map((value: string, index: number) =>
                            <button key={`${index} company`} className={`${styles.company_button}`} onClick={() => select_company(index)}>
                                {value}
                            </button>
                        )
                    }
                </div>
                <div
                    className={styles.companies_highlight}
                    style={{transform:`translateX(${selected_company * highlight_movement}vw)`}}
                />
                <div className={styles.work_data_container}>
                    <p className={`${styles.work_title} ${global_styles.title_2}`}>{company.work_title} @{company.name}</p>
                    <p className={`${global_styles.font_light_1} ${global_styles.subtitle_2}`}>{company.timeline}</p>
                    <div style={{margin: "0px 10px"}}>
                        {company.achievements.map(
                            (value:string, index: number) =>
                                <p key={`${index} achievement`}
                                   className={`${global_styles.font_light_1} 
                                   ${global_styles.subtitle_1}`}>
                                    <span style={{marginRight: "3px", color: "white"}}>&#10148; </span>
                                       {value}
                                </p>
                        )}
                        <div className={`${global_styles.tag_container_1} ${styles.technologies_container}`}>
                            {company.technologies.map(
                                (value:string, index: number) => <span key={`${index} technology`} className={global_styles.tag_1}>{value}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
