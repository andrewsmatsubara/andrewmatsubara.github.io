import Contacts from "../Contacts/Contacts";
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <Contacts />
    </footer>
  );
}
