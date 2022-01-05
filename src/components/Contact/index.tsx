import Image from 'next/image';
import styles from './styles.module.scss';

export function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactContent}>
        <h1>Contato</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec <br /> 
          lacinia mi quis euismod ultrices.
        </p>

        <div className={styles.subscribeSection}>
          <input type="email" placeholder="Seu melhor e-mail" />
          <button>Enviar</button>
        </div>
      </div>
    </section>
  );
}