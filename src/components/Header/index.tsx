import style from "./Header.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { useState } from "react";

import useMediaQuery from "@/utils/hooks";

import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileMenu from "@components/MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 800px)");

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={style.header}>
      <div className={classNames(style["header__banner"], "container-80")}>
        <nav className="d-flex align-items-center justify-content-between">
          <Image
            width={252}
            height={62}
            src="/assets/images/logo.svg"
            alt="Logo"
          ></Image>

          <ul className="d-none d-lg-flex flex-wrap align-items-center gap-5 mb-0">
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

          <FontAwesomeIcon
            color="white"
            className="d-flex d-lg-none icon"
            icon={faBarsStaggered}
            onClick={(e) => handleMenuClick()}
          />
        </nav>

        <div
          className={style["header__banner-text"]}
          aria-label="Banner"
          aria-labelledby="page-title"
        >
          <h1 id="page-title">
            Immersive <br /> experiences <br /> that deliver
          </h1>
        </div>
      </div>

      {!isMobile ? (
        <img
          className={style["header__background"]}
          src="assets/images/desktop/image-hero.jpg"
          alt="Imagem"
        />
      ) : (
        <img
          className={style["header__background"]}
          src="assets/images/mobile/image-hero.jpg"
          alt="Imagem"
        />
      )}

      {isMenuOpen ? (
        <MobileMenu
          callback={() => {
            handleMenuClick();
          }}
        />
      ) : (
        ""
      )}
    </header>
  );
}
