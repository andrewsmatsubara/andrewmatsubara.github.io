import Link from "next/link";
import { useEffect } from "react";
import pageRouting from "../../services/PageRouting";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import styles from './Header.module.scss'

export default function Header() {
  const router: AppRouterInstance = useRouter();

  return (
    <header className={styles['header']}>
      <nav className={styles['nav']}>
        <ul>
          <li><button>Homepage</button></li>
          <li><button>About</button></li>
          <li><button>Portfolio</button></li>
        </ul>
      </nav>
    </header>
  )
}
