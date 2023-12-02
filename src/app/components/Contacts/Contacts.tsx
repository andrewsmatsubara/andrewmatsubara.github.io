import styles from './Contacts.module.scss';

export default function Contacts() {
  return (
    <nav className={styles['contacts']}>
      <ul>
        <li>github</li>
        <li>phone</li>
        <li>email</li>
        <li>linkedin</li>
      </ul>
    </nav>
  );
}
