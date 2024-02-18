/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import { useContext } from "react";
import toogleContext from "../../context/Toogle/toogleContext";
import Sidebarbutton from "./Buttons/Sidebarbutton";
import { PaperPlaneIcon, ChevronRightIcon } from "@radix-ui/react-icons";
export default function VoneSidebar({ isClicked }) {
  const { clicked, setClicked } = useContext(toogleContext);
  let whatlist = ["Resume", "Skills", "Projects", "Feedbacks"];
  let dolist = ["Mentoring", "Freelancing", "Thinking"];
  return (
    <div className="relative w-full h-full flex flex-col justify-between px-[1rem] text-white customscroll">
      <div className={`overflow-y-auto flex flex-col gap-[3rem] customscroll`}>
        <div
          className={`text-[3rem] text-slate-300 flex justify-between max-md:pt-4  ${
            clicked ? ` md:justify-center` : `justify-between`
          }`}
        >
          {/* MAITI title and active status  */}
          <div className="flex items-end leading-none gap-[0.5rem]">
            <span
              className={`flex flex-col leading-none ${
                isClicked ? ` xl:hidden max-md:visible ` : `visible`
              }`}
            >
              Maiti
            </span>
            <span
              className={` w-[0.7rem] h-[0.7rem] rounded-full text-white text-[5rem] leading-none bg-green-400 animate-pulse ${
                isClicked ? ` xl:hidden` : ``
              }`}
            ></span>
          </div>

          <div
            className={`w-[3rem] h-[3rem] bg-white/50 rounded-full hidden justify-center items-center transition-all duration-500 ease-in-out ${
              clicked ? `xl:rotate-180 max-md:rotate-[270deg]` : ``
            } hover:cursor-pointer max-md:visible max-md:flex xl:flex xl:visible max-md:rotate-90`}
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            <ChevronRightIcon width="2rem" height="2rem" color="#000" />
          </div>
        </div>
        <div
          className={`flex md:flex-col max-md:flex-row gap-[3rem] ${
            clicked ? `max-md:visible` : `max-md:hidden`
          }`}
        >
          {/* What i am */}
          <div className={`w-full flex flex-col gap-[2rem]`}>
            <h1
              className={`text-[1.5rem] font-semibold text-nowrap ${
                isClicked ? ` visible ` : `visible`
              }`}
            >
              What I am
            </h1>
            <div className="w-full h-fit flex md:flex-col max-md:flex-row max-md:flex-wrap max-md:justify-start">
              {whatlist.map((item) => {
                let id = nanoid();
                return (
                  <Sidebarbutton key={id} show={isClicked} titledata={item} />
                );
              })}
            </div>
          </div>
          {/* What i do */}
          <div className="w-full flex flex-col gap-[2rem]">
            <h1
              className={`text-[1.5rem] font-semibold  text-nowrap ${
                isClicked ? ` visible ` : `visible`
              }`}
            >
              What I Do
            </h1>
            <div className="w-full h-fit flex md:flex-col max-md:flex-row max-md:flex-wrap max-md:justify-start">
              {dolist.map((item) => {
                let id = nanoid();
                return (
                  <Sidebarbutton key={id} show={isClicked} titledata={item} />
                );
              })}
              {clicked ? (
                <div className="h-[5rem] w-[full]"></div>
              ) : (
                <div className="h-[5rem] w-[full]"></div>
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        className={`relative max-md:bottom-6 flex items-center justify-center gap-[1rem] bottom-0 w-full max-xl:text-[1.2rem] xl:text-[1.4rem] font-semibold text-start p-[1rem] rounded-xl bg-blue-800 overflow-hidden ${
          isClicked
            ? `w-full flex-col-reverse justify-center text-center max-md:visible`
            : `max-md:hidden`
        } whitespace-nowrap transition-all duration-500 ease-in-out`}
      >
        Connect Me
        <div
          className={`${
            clicked ? `hidden` : `visible`
          } max-xl:hidden xl:visible`}
        >
          <PaperPlaneIcon width="2rem" height="2rem" />
        </div>
        <span className="absolute w-[15%] h-full bg-gradient-to-l from-transparent via-white/10 to-transparent gloss"></span>
      </button>
    </div>
  );
}
