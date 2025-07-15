import styles from "./styles.module.css";

export function Heading() {
  return (
    <>
      <img
        className={styles.head}
        src="/background-desktop.svg"
        alt="Background do fundo"
      />
      <h1>FAQs</h1>
    </>
  );
}
