import styles from './Header.module.scss'

export default function Header() {
  const navArray: Array<string> = ['Homepage', 'About', 'Portfolio', 'Resume'];

  return (
    <header className={styles['header']}>
      <nav className={styles['nav']}>
        <ul>
          {navArray.map((item) => (
            <li key={item}>
              <button onClick={(e) => handleScroll(e, item)}>
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

function handleScroll(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, item: string): void {
  e.preventDefault();
  
  if (e.currentTarget !== null) {
    const itemName = item.toLowerCase();
    const targetId = itemName.replace(/.*\#/, "");
    const element = document.getElementById(targetId);

    if (element !== null) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
}