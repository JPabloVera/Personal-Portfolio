import React, {MutableRefObject} from 'react'
import { useMediaQuery } from '@material-ui/core';
import styles from "./Nav.module.css"
import global_styles from "../../styles/Home.module.css"

export const Nav = ({ref_array}: {ref_array: {name: string, ref: MutableRefObject<any>}[]}) => {
    const is_mobile = useMediaQuery('(max-width: 801px)')

    const handle_click = (ref: MutableRefObject<any>) => () => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <>
            <div className={styles.nav}>
                <div className={styles.list} style={{justifyContent: is_mobile ? "end" : "space-between"}}>
                    {
                        !is_mobile &&
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
        </>
    )
}
