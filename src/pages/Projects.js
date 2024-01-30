import * as React from "react"
import Layout from "./components/Layout"
import styles from './styles/projects.module.css'

export default function Projects() {
  return (
    <Layout>
      <div className ={styles.portfolio}>
        <h1>About Page</h1>
        <h2>Portfolio</h2>
        <h3>Projects & Websites Made</h3>
      </div>
      </Layout>
  )
}
