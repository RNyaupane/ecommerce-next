import styles from "./loader.module.css";
export default function Loader() {
  return (
    <div className={styles._container}>
      <div className={styles._loader}></div>
    </div>
  );
}
