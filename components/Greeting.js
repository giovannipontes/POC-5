// components/Greeting.js
import styles from '../styles/Greeting.module.css';

const Greeting = ({ name = "Visitante" }) => {
  return <h1 className={styles.greeting}>Olá, {name}! Bem-vindo à nossa POC com Next.js e React!</h1>;
};

export default Greeting;
