import Projectcard from "../../../components/Home/Projectcard";
import remote from "../../../assets/console.png";

export default function Superworks() {
  return (
    <div className="relative xxl:w-[680px] md:w-full xsm:w-full flex flex-col xsm:gap-[20px] md:gap-[40px] bg-brand-bg-light xsm:rounded-lg md:rounded-3xl md:p-[40px] xsm:p-[20px]">
      <h1 className="flex gap-[10px] items-center font-bold">
        <img src={remote} className=" " alt="" />
        My super works
      </h1>
      {/* left right button  */}

      {/* left  */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="xsm:w-4 md:w-6 md:h-6 bg-brand-purple xsm:p-1 md:p-2 box-content rounded-full absolute xsm:left-0 md:left-2 top-[50%] z-[100] opacity-70 hover:opacity-100  hover:cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
      {/* right  */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="xsm:w-4 md:w-6 md:h-6 bg-brand-purple xsm:p-1 md:p-2 box-content rounded-full absolute xsm:right-0 md:right-2 top-[50%] z-[100] opacity-70 hover:opacity-100 hover:cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>

      {/* for projects cards */}
      <div className="overflow-x-auto xsm:gap-[10px] md:gap-[20px] flex">
        <Projectcard />
        <Projectcard />
        <Projectcard />
      </div>
    </div>
  );
}
