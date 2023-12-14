import { useEffect } from 'react';
import styles from './about.module.scss';

export default function About() {
  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return(
    <main className={styles['about']} id='about'>
      <div className={styles['about-container']}>
        <div className={styles['written-about-container']}>
          <h3 className={styles['about-h1']}>{aboutH3}</h3>
          <p className={styles['about-paragraph']}>
            {aboutParagraph}
          </p>
        </div>
        <div className={styles['profile-image']}></div>
      </div>
    </main>
  );
}

function handleScroll(): void {
  const writtenAboutContainer: HTMLElement | null = document.querySelector(`.${styles['written-about-container']}`);
  const profileImage: HTMLElement | null = document.querySelector(`.${styles['profile-image']}`);
  const aboutElement: HTMLElement | null = document.querySelector(`.${styles['about']}`);
  
  if (writtenAboutContainer && profileImage && aboutElement) {
    const scrollPosition: number = window.scrollY;
    const windowHeight: number = window.innerHeight;
    const aboutRect: DOMRect = aboutElement.getBoundingClientRect();
    const isAboutRectVisible: boolean = (aboutRect.top <= windowHeight * 1.5 && aboutRect.top >= 0);

    if (isAboutRectVisible) {
      const distance: number = scrollPosition / 3;
      
      writtenAboutContainer.style.transform = `translateX(-${distance}px)`;
      profileImage.style.transform = `translateX(${distance}px)`;
      writtenAboutContainer.style.opacity = `${scrollPosition / window.innerHeight}`;
    }
  }
};

const aboutH3: string = '\"Technology, Geography, Music, Football, Games and... frogs\"';

const aboutParagraph: string = 'Hello! My name is Andrews, I currently work at Geopixel as a software engineer. I have a bachelor\'s degree in geography from the University of São Paulo. For those who wants to know me, I could call myself as a passionate about technology, games and music. GIS development enthusiast. In my free time, I follow football from all over the world and look for useless facts. Oh, and I love frogs.';
