import styles from "./BoardContents.module.scss";

type Props = {};

export default function BoardContents({}: Props) {
  return (
    <>
      <div className={styles.BoardContentsWrapper}>BoardContents</div>
      <div className={styles.BoardContentsWrapper}>BoardContents</div>
      <div className={styles.BoardContentsWrapper}>BoardContents</div>
      <div className={styles.BoardContentsWrapper}>BoardContents</div>
      <div className={styles.BoardContentsWrapper}>BoardContents</div>
    </>
  );
}
