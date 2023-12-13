import CheckBox from "./CheckBox";
import classes from "../styles/Answer.module.css";
export default function Answer() {
  return (
    <div className="answers">
      <CheckBox className={classes.answer} text="test answer" />
    </div>
  );
}
