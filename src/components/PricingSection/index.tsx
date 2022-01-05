import styles from './styles.module.scss';


export function PricingSection() {
  return (
    <section className={styles.pricingSection}>
      <h1>Nosso Planos</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia <br />
        mi quis euismod ultrices.
      </p>

      <div className={styles.pricingCardsContainer}>
        <div className={styles.card}>
          <h3>Bronze</h3>
          <h4>
            <sup>R$</sup>
            <strong>28</strong>
            /mês
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
            lacinia mi quis euismod ultrices.
          </p>

          <button>Assinar</button>
        </div>
        
        <div className={styles.card}>
          <h3>Prata</h3>
          <span>PREFERIDO</span>
          <h4>
            <sup>R$</sup>
            <strong>57</strong>
            /mês
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
            lacinia mi quis euismod ultrices.
          </p>

          <button>Assinar</button>
        </div>

        <div className={styles.card}>
          <h3>Ouro</h3>
          <h4>
            <sup>R$</sup>
            <strong>94</strong>
            /mês
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
            lacinia mi quis euismod ultrices.
          </p>

          <button>Assinar</button>
        </div>
      </div>
    </section>
  );
}