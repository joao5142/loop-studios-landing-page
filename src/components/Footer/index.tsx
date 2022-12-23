import style from "./Footer.module.scss";
import classNames from "classnames";
import Image from "next/image";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className={classNames(style.footer)}>
      <div className="container-80">
        <nav className="d-flex flex-wrap align-items-center justify-content-between mb-5 gap-5">
          <Image
            width={142}
            height={62}
            src="/assets/images/logo.svg"
            alt="Logo"
          ></Image>
          <div className="d-flex">
            <FontAwesomeIcon color="white" className="icon" icon={faFacebook} />
            <FontAwesomeIcon
              color="white"
              className="icon"
              icon={faPinterest}
            />
            <FontAwesomeIcon color="white" className="icon" icon={faTwitter} />
            <FontAwesomeIcon
              color="white"
              className="icon"
              icon={faInstagram}
            />
          </div>
        </nav>

        <nav className="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <ul className="d-flex flex-wrap align-items-center gap-4 gap-lg-5 mb-0">
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

          <p> © 2021 Loopstudios. All rights reserved.</p>
        </nav>
      </div>
    </footer>
  );
}
