import { useEffect } from 'react';
import styles from './homepage.module.scss';
import Image from 'next/image';

export default function HomePage() {
  const size: number = 50;

  useEffect(() => {
    typeWriter();
  }, []);

  return (
    <section className={styles['homepage']} id='homepage'>
      <nav>
        <a href='https://github.com/andrewsmatsubara' target='_blank'>
          <Image src='/images/github.png' alt='github-image' width={size} height={size}/>
        </a>
        <a href='https://www.linkedin.com/in/andrews-matsubara/' target='_blank'>
          <Image src='/images/linkedin.png' alt='linkedin-image' width={size} height={size}/>
        </a>
      </nav>
      <div className={styles['welcome-text-container']}>
        <p id='welcome-text' className={styles['welcome-text']}></p>
      </div>
    </section>
  );
}

function typeWriter() {
  type();
}

function type() {
  let speed: number = 100;

  if (textIndex < introductionText.length) {
    document.getElementById("welcome-text")!.innerHTML += introductionText.charAt(textIndex);

    textIndex++;

    setTimeout(type, speed);
  } else {
    setTimeout(() => {
      typeWriter();
    
      if (textIndex === introductionText.length) {
        textIndex = 0;

        document.getElementById("welcome-text")!.innerHTML = '';
      }
    }, 2000);
  }
}

const introductionText: string = 'Hi there! My name is Andrews and I\'m a web developer :) Welcome to my website!';
let textIndex: number = 0;
