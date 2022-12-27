import React, {MutableRefObject, useEffect, useState} from 'react'
import { useMediaQuery } from '@material-ui/core';
import {Menu, Clear} from "@mui/icons-material";
import styles from "./Nav.module.css"
import global_styles from "../../styles/Home.module.css"

export const Nav = ({ref_array}: {ref_array: {name: string, ref: MutableRefObject<any>}[]}) => {
    const [show_side_nav, set_show_side_nav] = useState<boolean>(false)
    const is_mobile = useMediaQuery('(max-width: 800px)')

    const handle_click = (ref: MutableRefObject<any>) => () => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }

    const handle_side_nav_click = (name: string) => () => {
        let ref_ = ref_array.filter(ref => ref.name === name)[0].ref
        show_nav()
        handle_click(ref_)()
    }

    const show_nav = () => {
        set_show_side_nav(!show_side_nav)
    }

    return (
        <>
            <div className={styles.nav}>
                <div className={styles.list} style={{justifyContent: is_mobile ? "end" : "space-between"}}>
                    {
                        is_mobile? (
                            <Menu onClick={show_nav} />
                        ) :
                            (
                                <>
                                    <div onClick={handle_click(ref_array.filter(ref => ref.name === "about")[0].ref)} className={`${global_styles.subtitle_2}`}>About Me</div>
                                    <div onClick={handle_click(ref_array.filter(ref => ref.name === "work")[0].ref)} className={`${global_styles.subtitle_2}`}>Work</div>
                                    <div onClick={handle_click(ref_array.filter(ref => ref.name === "project")[0].ref)} className={`${global_styles.subtitle_2}`}>Projects</div>
                                    <div onClick={handle_click(ref_array.filter(ref => ref.name === "contact")[0].ref)} className={`${global_styles.subtitle_2}`}>Contact</div>
                                </>
                            )
                    }
                </div>
            </div>
            {
                show_side_nav && (
                    <div className={styles.sideNavContainer}>
                        <div className={styles.sideNav}>
                            <div style={{height: "4vh", width: "100%", padding: "1vh", display: "flex", justifyContent: "space-between"}}>
                                <span className={`${global_styles.title_1} ${global_styles.font_light_heavy}`}>JPV</span>
                                <Clear fontSize="large" onClick={show_nav} />
                            </div>
                            <div className={styles.sideNavLinkContainer}>
                                <div onClick={handle_side_nav_click("about")} style={{textDecoration: "underline"}} className={`${global_styles.subtitle_2} ${global_styles.font_light_heavy}`}>01. About Me</div>
                                <div onClick={handle_side_nav_click("work")} style={{textDecoration: "underline"}} className={`${global_styles.subtitle_2}  ${global_styles.font_light_heavy}`}>02. Work</div>
                                <div onClick={handle_side_nav_click("project")} style={{textDecoration: "underline"}} className={`${global_styles.subtitle_2}  ${global_styles.font_light_heavy}`}>03. Projects</div>
                                <div onClick={handle_side_nav_click("contact")} style={{textDecoration: "underline"}} className={`${global_styles.subtitle_2}  ${global_styles.font_light_heavy}`}>04. Contact</div>
                            </div>
                        </div>
                        <div style={{width: "50vw", height: "50vh"}} onClick={show_nav}/>
                    </div>
                )
            }
        </>
    )
}
