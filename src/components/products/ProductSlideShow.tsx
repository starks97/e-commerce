import React from "react";

import { Slide } from "react-slideshow-image";

import styles from "./ProductSlideShow.module.css";
import "react-slideshow-image/dist/styles.css";
import { Product } from "@prisma/client";

interface Props {
  images: string[];
}

export default function ProductSlideShow({ images }: Props) {
  return (
    <Slide easing="ease" duration={7000} indicators>
      {images.map((image) => {
        const url = `/products/${image}`;
        return (
          <div className={styles["each-slide"]} key={image}>
            <div
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        );
      })}
    </Slide>
  );
}
