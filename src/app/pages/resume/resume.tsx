import Image from 'next/image';
import styles from './resume.module.scss';

export default function Resume() {
  return (
    <section className={styles['resume']} id='resume'>
      <main>
        <h3>Thanks for visiting!</h3>
        <p>Just in case you want to contact me, feel free to access my Github and Linkedin at the homepage!</p>
        <p>And if you want to check out my resume click on the PDF icon to download it. Take good care of it, ok?</p>
        <p>Bye ;D</p>
        <a href='/andrews-front-end-dev-ptbr1.pdf' target='_blank'>
          <Image src='/images/ficheiro-pdf.png' alt='pdf-image' width={100} height={100}/>
        </a>
      </main>
    </section>
  );
}