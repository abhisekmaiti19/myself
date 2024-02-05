/* eslint-disable no-unused-vars */

import { nanoid } from "nanoid";

/* eslint-disable react/prop-types */
export default function Sectioncard({ type, data }) {
  return (
    <div className="h-fit bg-brand-bg-light rounded-xl xsm:p-[20px] md:p-[40px] flex flex-col xsm:gap-[20px] md:gap-[40px]">
      <h1 className="flex gap-[10px] font-bold max-md:items-center">
        <img
          className="max-md:w-fit max-md:h-fit"
          src={`../../src/assets/${
            type === "award"
              ? `trophy.png`
              : type === `skills`
              ? `fire.png`
              : type === `experinece`
              ? `gear.png`
              : ``
          }`}
          alt=""
        />
        {type === "award"
          ? `Awards`
          : type === `skills`
          ? `My Super Powers`
          : type === `experinece`
          ? `Experiences`
          : ``}
      </h1>
      <div className="flex flex-col gap-[20px] font-normal">
        {data.map((item) => {
          let id = nanoid();
          return (
            <div className="flex flex-col gap-[10px]" key={id}>
              <span className="text-brand-text-dark font-medium max-md:text-[15px]">
                {item.title}
              </span>
              <div className="flex gap-[10px] flex-wrap gap-y-0 justify-start items-start max-md:text-[15px] max-md:font-semibold ">
                {item.desc.map((it) => {
                  let id = nanoid();
                  return <h1 key={id}>{it}</h1>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

{
  /* <div className="h-fit bg-brand-bg-light rounded-xl p-[40px] flex flex-col gap-[40px] mt-[20px]">
                <h1 className="flex gap-[10px] font-bold items-end">
                  <img src="../../src/assets/fire.png" alt="" />
                  My Super Powers
                </h1>
                <div className="flex flex-col gap-[20px] font-normal">
                  <div className="flex flex-col gap-[10px]">
                    <span className="text-brand-text-dark font-medium">
                      Languages
                    </span>
                    <div className="flex gap-[20px]">
                      <h1>JavaScript</h1>
                      <h1>Java</h1>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <span className="text-brand-text-dark font-medium">
                      Libraries
                    </span>
                    <div className="flex gap-[20px]">
                      <h1>React.Js</h1>
                      <h1>Redux</h1>
                      <h1>Tailwind</h1>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <span className="text-brand-text-dark font-medium">
                      Dveloper Tools
                    </span>
                    <div className="flex gap-[20px] justify-start flex-wrap items-start gap-y-[10px]">
                      <h1>Git</h1>
                      <h1>VS Code</h1>
                      <h1>Postman</h1>
                      <h1>Figma</h1>
                    </div>
                  </div>
                </div>
              </div> */
}
