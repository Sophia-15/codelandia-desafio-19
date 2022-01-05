import styles from './styles.module.scss';

export function HowItWorksSection() {
  return (
    <section className={styles.howItWorks}>
      <h1>Como Funciona</h1>
      <div className={styles.cardContent}>
        <div className={styles.card}>
          <img src="./conections.svg" alt="Connections Image" />
          <h3>Crie conexões</h3>
          <p>
            Lorem ipsum dolor sit amet, consecteteu.
          </p>
        </div>
        
        <div className={styles.card}>
          <img src="./free.svg" alt="Free Image" />
          <h3>100% gratuito</h3>
          <p>
            Lorem ipsum dolor sit amet, consecteteu.
          </p>
        </div>
        
        <div className={styles.card}>
          <img src="./smiley.svg" alt="Smiley Image" />
          <h3>Compartilhamento</h3>
          <p>
            Lorem ipsum dolor sit amet, consecteteu.
          </p>
        </div>
      </div>
    </section>
  );
}