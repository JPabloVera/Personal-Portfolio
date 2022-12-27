import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Background} from "../components/background/Background.component";
import {Paragraph} from "../components/introduction/Indroduction.component";
import {AboutMe} from "../components/about_me/AboutMe";
import {Work} from "../components/work/Work.component";
import {Project} from "../components/projects/Project.component";
import {GetInTouch} from "../components/get_in_touch/GetInTouch.component";
import {Nav} from "../components/nav/Nav.component";
import React, {MutableRefObject, useEffect, useRef} from "react";

export default function Home() {

  const paragraph_lines = [
      {
          text: "Hi, my name is",
          style: "subtitle_0"
      },
      {
          text: "J. Pablo Vera",
          style: "title_0"
      },
      {
          text: "I build things for the web",
          style: "title_1"
      },
  ]

  const about_me_ref = useRef(null)
  const work_ref = useRef(null)
  const project_ref = useRef(null)
  const get_in_touch_ref = useRef(null)

  return (
    <div className={styles.container}>
      <Head>
        <title>J. Pablo Vera</title>
        <meta name="description" content="J. Pablo Vera portfolio" />
      </Head>
      <div style={{maxHeight: "90vh"}}>
          <Background />
          <Nav ref_array={[{name: "about", ref:about_me_ref}, {name: "work",ref:work_ref}, {name: "project", ref: project_ref}, {name: "contact", ref: get_in_touch_ref}]} />
          <main className={styles.main}>
            <Paragraph />
            <AboutMe forward_ref={about_me_ref} />
            <Work forward_ref={work_ref} />
            <Project forward_ref={project_ref} />
            <GetInTouch forward_ref={get_in_touch_ref}/>
          </main>
      </div>
    </div>
  )
}
