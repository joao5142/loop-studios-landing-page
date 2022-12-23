import style from "./MobileMenu.module.scss";
import classNames from "classnames";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

type Props = {
  callback: Function;
};

export default function MobileMenu({ callback }: Props) {
  return (
    <div className={style.menu}>
      <div className="d-flex align-items-center justify-content-between gap-4">
        <Image
          width={252}
          height={62}
          src="/assets/images/logo.svg"
          alt="Logo"
          className={style.logo}
        ></Image>

        <FontAwesomeIcon
          color="white"
          className={style["menu__close"]}
          icon={faClose}
          onClick={() => {
            callback();
          }}
        />
      </div>

      <nav className={style["menu__nav"]}>
        <ul className="flex-wrap  position-relative gap-3 mb-0">
          <li>
            <a href="">About</a>
          </li>

          <li>
            <a href="">Careers</a>
          </li>

          <li>
            <a href="">Events</a>
          </li>

          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href=""> Support</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
