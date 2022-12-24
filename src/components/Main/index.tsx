import style from "./Main.module.scss";
import Image from "next/image";
import classNames from "classnames";
import Button from "../Button";
import GaleryImage from "../GaleryImage";

export default function Main() {
  const galeryImages = [
    {
      name: "Deep Earth",
      url: "/assets/images/desktop/image-deep-earth.jpg",
      mobileUrl: "/assets/images/mobile/image-deep-earth.jpg",
    },

    {
      name: "Night Arcade",
      url: "/assets/images/desktop/image-night-arcade.jpg",
      mobileUrl: "/assets/images/mobile/image-night-arcade.jpg",
    },
    {
      name: "Soccer Team Vr",
      url: "/assets/images/desktop/image-soccer-team.jpg",
      mobileUrl: "/assets/images/mobile/image-soccer-team.jpg",
    },
    {
      name: "The Grid",
      url: "/assets/images/desktop/image-grid.jpg",
      mobileUrl: "/assets/images/mobile/image-grid.jpg",
    },
    {
      name: "From Up above Vr",
      url: "/assets/images/desktop/image-from-above.jpg",
      mobileUrl: "/assets/images/mobile/image-from-above.jpg",
    },
    {
      name: "Pokect Boreals",
      url: "/assets/images/desktop/image-pocket-borealis.jpg",
      mobileUrl: "/assets/images/mobile/image-pocket-borealis.jpg",
    },
    {
      name: "The Curiosity",
      url: "/assets/images/desktop/image-curiosity.jpg",
      mobileUrl: "/assets/images/mobile/image-curiosity.jpg",
    },
    {
      name: "Make It Fisheye",
      url: "/assets/images/desktop/image-fisheye.jpg",
      mobileUrl: "/assets/images/mobile/image-fisheye.jpg",
    },
  ];

  return (
    <main className={style.main}>
      <section className="margin">
        <div className="row position-relative">
          <div className="col-12 col-lg-8">
            <Image
              width={650}
              height={600}
              src="/assets/images/desktop/image-interactive.jpg"
              alt="Man looking into virtual reality glasses"
              className="image"
            ></Image>
          </div>

          <div
            className={classNames(
              "col-12 col-lg-8 col-xl-8 col-xxl-6",
              style["box-outside"],
              ""
            )}
          >
            <h1 className="title">The leader in interactive VR</h1>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-5 ">
        <div className="d-flex flex-wrap  align-items-center justify-content-between">
          <h1 className="title mb-3 mb-md-0">Our creations</h1>
          <Button>See all</Button>
        </div>
      </section>
      <div className={classNames("row", style["galery__container"])}>
        {galeryImages.map(
          (image: { name: string; url: string; mobileUrl: string }, index) => {
            return (
              <div
                className={classNames(
                  "col-12 d-flex justify-content-center col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-5",
                  style["galery-column"]
                )}
                key={index}
              >
                <GaleryImage
                  title={image.name}
                  image={image.url}
                  mobileImage={image.mobileUrl}
                />
              </div>
            );
          }
        )}
      </div>
    </main>
  );
}
