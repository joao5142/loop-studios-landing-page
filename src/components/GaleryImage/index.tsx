import style from "./GaleryImage.module.scss";
import classNames from "classnames";
import { ReactNode, useEffect } from "react";
import useMediaQuery from "@/utils/hooks";

type Props = {
  title: string;
  image: string;
  mobileImage: string;
};

export default function GaleryImage({ title, image, mobileImage }: Props) {
  const isMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);

  return (
    <div
      title="Card"
      aria-label="Card"
      className={classNames(style["galery-item"], {
        [style["galery-item--mobile"]]: isMobile,
      })}
    >
      {isMobile ? (
        <img
          src={mobileImage}
          alt="Card Image"
          className={classNames(style["galery-item__image--mobile"])}
        />
      ) : (
        <img
          src={image}
          alt="Card Image"
          className={classNames(style["galery-item__image"])}
        />
      )}

      <h1 className="title">{title}</h1>
    </div>
  );
}
