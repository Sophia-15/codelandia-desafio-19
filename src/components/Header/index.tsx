import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import styles from './styles.module.scss';


export function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img src="./logo.svg" alt="Logo Rachi" />

        <nav className={isMenuActive ? styles.activeNav : ''}>
          <ul>
            <li>Funcionalidades</li>
            <li>App</li>
            <li>Planos</li>
            <li>Contato</li>
          </ul>
        </nav>

        <div className={styles.menu}>
          <Hamburger rounded size={26} toggled={isMenuActive} toggle={setIsMenuActive} />
        </div>
      </div>
    </header>
  );
}