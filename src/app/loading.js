import styles from "./loading.module.css";
export default function Loading() {
  return (
    <div className={styles._container}>
      <div className={styles._loader}></div>
    </div>
  );
}
