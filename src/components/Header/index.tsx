import styles from './styles.module.scss';


export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img src="./logo.svg" alt="Logo Rachi" />

        <nav>
          <ul>
            <li>Funcionalidades</li>
            <li>App</li>
            <li>Planos</li>
            <li>Contato</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}