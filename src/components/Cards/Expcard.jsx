/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import { Crosshair1Icon } from "@radix-ui/react-icons";

export default function Expcard({ name, img, position, duration, location }) {
  let id = nanoid();
  return (
    <div
      key={id}
      className=" max-lg:w-full lg:w-[48%] max-sm:h-fit sm:h-[25rem] bg-brand-bg/40 border-[1px] border-black rounded-xl "
    >
      <div className="w-full h-full justify-between bg-brand-bg/50  rounded-xl flex flex-col max-sm:gap-y-[5rem] max-sm:p-[3rem] sm:p-[4rem]">
        <div className="w-full flex flex-col gap-2 justify-between max-[340px]:text-[1.5rem] min-[340px]:text-[2rem] text-white">
          <h1>{position}</h1>
          <h1 className=" max-[340px]:text-[1.2rem] min-[340px]:text-[1.4rem] text-white/50">
            {duration}
          </h1>
        </div>
        <div className="w-full flex flex-wrap gap-[2rem] items-center justify-between text-[2rem] text-white/50">
          <img
            src={img}
            alt=""
            className=" max-sm:w-[15rem] sm:w-1/2 bottom-[4rem] right-[6rem] filter grayscale opacity-40"
          />
          <h1 className="px-2 py-[0.1rem] h-fit text-[1.4rem] items-center gap-2 flex font-bold bg-white/20 rounded text-black  backdrop-blur-sm">
            <Crosshair1Icon />
            {location}
          </h1>
        </div>
      </div>
    </div>
  );
}
