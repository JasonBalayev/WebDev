import { Link } from "gatsby";
import React from "react";
import Layout from '../pages/components/Layout'
import styles from '..pages/styles/format.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX</p>
          <Link className={styles.btn} to="/Projects">Projects</Link>
        </div>
      </section>
    </Layout>
  );
}