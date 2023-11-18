import styles from "./Message.module.css";

function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋 Add your frist city by clicking</span> {message}
    </p>
  );
}

export default Message;
