/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function Projectcard({ name, img, desc }) {
  let id = nanoid();
  return (
    <div
      key={id}
      className="w-[30rem] max-[375px]:w-full h-[30rem] max-[375px]:h-fit bg-brand-bg border-[1px] border-black rounded-xl relative flex flex-col gap-[2rem] overflow-hidden  transition-all duration-300 ease-in-out"
    >
      {/* only for image  */}
      <div
        className={`relative w-full h-1/2 flex justify-center items-center overflow-hidden`}
      >
        <img src={img} className="scale-110 rounded-xl" alt="" />
        <div className="absolute w-full h-full top-0 left-0 bg-brand-bg/50"></div>
        <div className="w-full h-full bg-gradient-to-t from-brand-bg to-transparent absolute bottom-0 left-0 px-[2rem] flex items-end text-white text-[3rem]">
          <h1>{name}</h1>
        </div>
      </div>
      {/* projects details  */}
      <div className="w-full h-1/2 flex flex-col max-sm:gap-[2rem] justify-between text-[2rem] text-white px-[2rem] pb-[2rem]">
        <p className=" max-sm:text-[1.4rem] text-[1.4rem] text-white/50">
          {desc}
        </p>
        <div className="w-full flex max-sm:flex-col sm:flex-row gap-2">
          <button className=" text-[1.5rem] text-black px-[2rem] py-2 rounded-lg bg-white/50 hover:bg-white transition-all duration-200 ease-in font-bold">
            Details
          </button>
          <button className="text-[1.5rem] max-sm:border-[1px] max-sm:border-white/50 max-sm:justify-center px-[2rem] py-2 rounded-lg transition-all duration-200 ease-in hover:text-red-500  flex items-center gap-4">
            Live
            <ArrowRightOutlined className=" -rotate-45" />
          </button>
        </div>
      </div>
    </div>
  );
}
