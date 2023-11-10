'use client'

import styles from './page.module.css'
import axios from 'axios'

export default function Home() {
  async function cookie() {
    await axios.get('http://localhost:8080/cookie', { withCredentials: true })
    console.log(document.cookie)
  }

  async function cookieTest() {
    await axios.get('http://localhost:8080/cookie-test', { withCredentials: true })
    console.log(document.cookie)
  }

  return (
    <main className={styles.main}>
      <button onClick={cookie}>get cookie</button>
      <button onClick={cookieTest}>test cookie</button>
    </main>
  )
}
