import { Outlet } from "react-router";
import AnimatedCursor from "react-animated-cursor";
export default function App() {
  return (
    <div className="w-screen h-screen bg-brand-bg flex justify-center items-center overflow-hidden">
      {/* here i maintain screen sizes for now its 100vw and 100vh  */}
      <div className="w-full max-w-[1496px] h-screen overflow-y-scroll">
        <Outlet />
      </div>
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
          backgroundColor: "#6D6E71",
        }}
        outerStyle={{
          border: "3px solid #fff",
          backgroundColor: "#fff",
          mixBlendMode: "exclusion",
        }}
      />
    </div>
  );
}
