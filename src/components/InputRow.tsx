import styles from "./InputRow.module.css";
import { BsFillCircleFill } from "react-icons/bs";

export const InputRow: React.FC<{
  label: string;
  name: string;
  type: "text" | "email" | "password" | "number";
  value: string | number;
  handleValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  valueError: string;
}> = (props) => {
  const { label, name, type, value, handleValue, valueError } = props;
  return (
    <div className={styles.inputRow}>
      <input type={type} name={name} className={styles.form__input} placeholder=" " value={value} onChange={(event) => handleValue(event)} />
      <label className={styles.form__label}>{label}</label>
      {valueError === "ok" && <BsFillCircleFill className={styles.checkIcon} color="#80aa61" />}
      {valueError !== "" && valueError !== "ok" && <BsFillCircleFill className={styles.checkIcon} color="#ff6c64" />}
    </div>
  );
};
