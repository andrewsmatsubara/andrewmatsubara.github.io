'use client'

import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles['app']}>
      <Header />
      <HomePage />
      <About />
      <Portfolio />
      <Resume />
      <Footer />
    </div>
  )
}
