'use client'

import About from "./pages/about/about";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/homepage/homepage";
import Portfolio from "./pages/portfolio/portfolio";
import Resume from "./pages/resume/resume";
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
