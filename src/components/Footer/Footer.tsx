import styles from './Footer.module.scss';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.text}>&copy; 2022 Hossy.</span>
    </footer>
  );
};

export default Footer;
