import styles from './styles.module.scss';

export function HomeSection(){
  return (
    <section className={styles.homeSection}>
      <div className={styles.homeContent}>
        <div className={styles.leftSection}>
          <h1>
            Rachi, <br />
            é tudo que você <br />
            precisa em um só lugar. 
          </h1>

          <button>Cadastrar-se</button>
        </div>
        <img src="./nature.svg" alt="Working in Nature" />
        </div>
    </section>
  );
}