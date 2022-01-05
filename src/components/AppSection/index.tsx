import styles from './styles.module.scss';

export function AppSection() {
  return (
    <section className={styles.appSection}>
      <div className={styles.appContainer}>
        <div className={styles.leftSection}>
          <h2>Baixe nosso app para desfrutar mais!</h2>
          <p>
            Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur
            turpis elementum amet vitae et etiam nec. Varius volutpat hac 
            adipiscing tincidunt pretium.
          </p>
          <div className={styles.downloadApps}>
            <img src="./android.svg" alt="Download App On Google Play" />
            <img src="./apple.svg" alt="Download App On App Store" />
          </div>
        </div>

        <img src="./notification.svg" alt="Guy using cellphone" />
      </div>
    </section>
  );
}