import React from "react"
import global_styles from "../../styles/Home.module.css"
import styles from "./GetInTouch.module.css"
import {GitHub} from "@mui/icons-material";
import {LinkedIn} from "@mui/icons-material";
import {Instagram} from "@mui/icons-material";

export const GetInTouch = ({forward_ref}) => {
    return (
        <div ref={forward_ref} className={styles.container} >
            <p className={`${global_styles.big_title_1} ${styles.title}`}>Get In Touch</p>
            <a href='mailto:pablvvera@gmail.com' className={`${global_styles.title_1} ${styles.button}`}>Say Hello</a>
            <div className={styles.links_container}>
                <a>
                    <GitHub className={global_styles.icon} fontSize="large" />
                </a>
                <a>
                    <LinkedIn className={global_styles.icon} fontSize="large" />
                </a>
                <a>
                    <Instagram className={global_styles.icon} fontSize="large" />
                </a>
            </div>
        </div>
    )
}