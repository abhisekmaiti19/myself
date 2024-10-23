import { Outlet } from "react-router";
import VoneSidebar from "./components/Sidebar/VoneSidebar";
//import AnimatedCursor from "react-animated-cursor";
import toogleContext from "./context/Toogle/toogleContext";
import { useContext } from "react";
export default function App() {
  const { clicked } = useContext(toogleContext);
  return (
    //  here i maintain screen sizes for now its 100vw and 100vh
    <div className="w-screen h-screen relative bg-brand-bg flex justify-center items-center md:overflow-hidden max-md:overflow-y-auto">
      {/* mentioned and controll the maximum screensize width taken  */}
      <div
        className={`w-full max-w-[1920px] h-screen flex md:flex-row max-md:flex-col relative md:p-[3.125rem] max-md:px-5 max-md:overflow-y-auto md:overflow-hidden ${
          clicked ? `gap-1` : `max-xl:gap-0 xl:gap-[1.25rem]`
        }`}
      >
        {/* have two part side navbar/topbar and the content screen */}
        {/* max-md:min-h-[40%] */}
        <div
          className={`relative md:min-h-full ${
            clicked
              ? `md:w-[7.5rem]  max-md:min-h-[40%]`
              : `xl:w-[15%] max-xl:w-[7.5rem] max-md:max-h-fit`
          } md:h-full max-md:w-full max-md:h-[10%] max-md:mt-2 overflow-y-auto customscroll transition-all duration-300 ease-in-out`}
        >
          <VoneSidebar isClicked={clicked} />
          {/* //toogle button */}
        </div>
        {/* holding oulet with nice curve  */}
        <div className="relative w-full h-full rounded-3xl bg-brand-bg-light overflow-hidden">
          <Outlet />
        </div>
      </div>
      {/* please neglate  */}
      {/* <div className="md:hidden max-md:hidden">
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            "svg",
            "img",
          ]}
          innerStyle={{
            backgroundColor: "#fff",
          }}
          outerStyle={{
            border: "3px solid #fff",
            backgroundColor: "#fff",
            mixBlendMode: "exclusion",
          }}
        />
      </div> */}
    </div>
  );
}
