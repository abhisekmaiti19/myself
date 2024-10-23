import { nanoid } from "nanoid";
export default function Imageslide() {
  let mydetails = [
    {
      text: "abhisekmaiti19@gmail.com",
      link: "",
    },
    {
      text: "Buzz me",
      link: "",
    },
    {
      text: "Github",
      link: "",
    },
    {
      text: "I'm on Linkedin",
      link: "",
    },
  ];

  return (
    <div className="relative w-full mt-4">
      <div className=" flex gap-8 overflow-hidden slidecover">
        <div className="flex gap-8 slideanime">
          {mydetails.map((item) => {
            let id = nanoid();
            return (
              <div
                key={id}
                className="w-[250px] max-sm:w-[150px] h-[250px] max-sm:h-[150px] bg-slate-300 rounded-xl"
              ></div>
            );
          })}
        </div>
        <div className="flex gap-8 slideanime">
          {mydetails.map((item) => {
            let id = nanoid();
            return (
              <div
                key={id}
                className="w-[250px] max-sm:w-[150px] h-[250px] max-sm:h-[150px] bg-slate-300 rounded-xl"
              ></div>
            );
          })}
        </div>
      </div>
      <span className="absolute h-full w-[25%] -left-1 top-0 bg-gradient-to-r from-brand-bg-light  to-transparent"></span>
      <span className="absolute h-full w-[25%] -right-1 top-0 bg-gradient-to-l from-brand-bg-light to-transparent"></span>
      <span className="absolute h-full w-[25%] -left-1 top-0 bg-gradient-to-r from-brand-bg-light  to-transparent"></span>
      <span className="absolute h-full w-[25%] -right-1 top-0 bg-gradient-to-l from-brand-bg-light to-transparent"></span>
    </div>
  );
}
