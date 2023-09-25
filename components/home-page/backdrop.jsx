import { useState, useEffect } from "react";
import Link from "next/link";

import Button from "@/components/button/button";
import Image from "next/image";
import DownLoadButton from "../button/download-button";
import GameTag from "@/components/games/game-tag";

export default function BackDrop({ gamesData }) {
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlider === gamesData.length - 1) {
        setCurrentSlider(0);
      } else {
        setCurrentSlider((prevState) => prevState + 1);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentSlider]);

  const goToSelectedSliderFn = (index) => {
    setCurrentSlider(index);
  };

  const gameTags = gamesData[currentSlider].genres.map((genre) => genre.name);

  return (
    <div className="wrapper-backdrop relative pt-[80px]">
      <div className="relative w-[1312px] h-[415px]">
        <Image
          src={gamesData[currentSlider].image_url}
          alt={gamesData[currentSlider].name}
          layout="fill"
          objectFit="cover"
          priority
          // width={1312}
          // height={415}
          className="wrapper-backdrop--img rounded-[20px]"
        />
      </div>
      <div className="max-w-[461px] absolute top-[224px] left-[28px] z-10">
        <GameTag genre={gameTags} />
        <Link
          href={`/${gamesData[currentSlider].id.toString()}`}
          className="mt-[6px] text-4xl leading-[42px] font-semibold"
        >
          {gamesData[currentSlider].name}
        </Link>
        <p className="mt-[11px] text-xs leading-[14px]">
          {gamesData[currentSlider].description}
        </p>
        <div className="w-[300px] flex gap-[5px] mt-[11px]">
          <DownLoadButton />
          <Button
            link={gamesData[currentSlider].name
              .toLocaleLowerCase()
              .replace(/\s/g, "")}
            className="border-gradient text-base leading-[19px]"
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="absolute left-1/2 translate-x-[-50%] bottom-[17px] flex gap-[6px] z-10">
        {gamesData.map((nav, index) => {
          return (
            <img
              key={index}
              src={`/images/home-page/${
                index === currentSlider
                  ? "rectangle-active-icon.svg"
                  : "rectangle-icon.svg"
              }`}
              alt="rectangle icon"
              className="cursor-pointer"
              onClick={goToSelectedSliderFn.bind(null, index)}
            />
          );
        })}
      </div>
    </div>
  );
}
