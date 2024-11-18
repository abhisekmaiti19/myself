/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import { Crosshair1Icon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export default function Expcard({ name, img, position, duration, location }) {
  const [currentTheme, setCurrentTheme] = useState(null);

  useEffect(() => {
    let themeValue = localStorage.getItem("vite-ui-theme");
    setCurrentTheme(themeValue);
  }, []);

  let id = nanoid();
  return (
    <div
      key={id}
      className="max-lg:w-full lg:w-[48%] max-sm:h-fit sm:h-[250px] bg-brand-bg/40 border-[1px] border-black rounded-xl overflow-hidden"
    >
      <div className="w-full h-full justify-between bg-brand-bg/50  rounded-xl flex flex-col max-sm:gap-y-[50px] max-sm:p-[30px] sm:p-[40px]">
        <div className="w-full flex flex-col gap-2 justify-between max-[340px]:text-[15px] min-[340px]:text-[20px] text-brand-text">
          <h1>{position}</h1>
          <h1 className=" max-[340px]:text-[12px] min-[340px]:text-[14px] text-brand-text/50">
            {duration}
          </h1>
        </div>
        <div className="w-full flex flex-wrap gap-[20px] items-center justify-between text-[20px] text-brand-text/50">
          <img
            src={img}
            alt=""
            className={` max-sm:w-[150px] sm:w-1/2 bottom-[40px] right-[60px] ${
              currentTheme === "light"
                ? "filter grayscale opacity-40"
                : "filter grayscale opacity-40"
            } `}
          />
          <h1 className="px-2 py-[1px] h-fit text-[14px] items-center gap-2 flex font-bold bg-white/20 rounded text-black  backdrop-blur-sm">
            <Crosshair1Icon />
            {location}
          </h1>
        </div>
      </div>
    </div>
  );
}
