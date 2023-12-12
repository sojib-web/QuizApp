import styles from "../styles/Account.module.css";

export default function Account() {
  return (
    <div className={styles.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <a href="signup.html">Signup</a>
      {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
  );
}
