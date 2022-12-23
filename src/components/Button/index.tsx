import style from "./Button.module.scss";
import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function Button({ children }: Props) {
  return (
    <button title="Button" className={style.button}>
      {children}
    </button>
  );
}
