'use client'

import About from "./pages/about/about";
import Header from "./components/Header/Header";
import HomePage from "./pages/homepage/homepage";
import Portfolio from "./pages/portfolio/portfolio";
import Resume from "./pages/resume/resume";
import styles from './page.module.scss';
import { CSSProperties, useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState<string>('hidden');

  useEffect(() => {
    const onPageLoad = () => {
      setVisible('visible');
    };
    
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      
      return () => window.removeEventListener('load', onPageLoad);
    }
  });

  return (
    <div className={styles['app']} style={{visibility: visible as CSSProperties['visibility']}}>
      <Header />
      <HomePage />
      <About />
      <Portfolio />
      <Resume />
    </div>
  )
}
