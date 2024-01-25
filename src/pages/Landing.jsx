import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="w-screen h-screen bg-slate-50 primary-font flex flex-col justify-end">
      {/* For temporary use only */}

      <div className="w-full h-full p-10 flex justify-center items-center flex-col gap-5">
        <Link
          to="https://www.linkedin.com/in/abhisekmaiti19/"
          target="_blank"
          className="w-fit h-fit flex gap-5 text-xl bg-black py-5 px-7 rounded-full text-white "
        >
          Vist Me{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </Link>
        <h1 className="flex flex-col items-center">
          This normal developer is currently working on this website {":)"}
          <span>
            Before that , If you want to contact me then send a mail at{" "}
            <span className="ml-2 font-black">abhisekmaiti19@gmail.com</span>
          </span>
        </h1>
      </div>

      {/* text area  */}
      <div className="w-full h-full min-[560px]:text-6xl text-4xl text-slate-500 font-normal flex flex-col  p-10">
        {/* text container  */}
        <h1 className="w-fit h-fit">
          A <span className="font-black text-slate-950">Normal Developer</span>{" "}
          who
        </h1>
        <h1 className="w-fit h-fit">
          learn from <span className="font-black text-red-500">Rejection</span>{" "}
          and Always
        </h1>
        <h1 className="w-fit h-fit relative flex gap-2">
          ready to{" "}
          <span className="font-black w-fit h-fit text-green-600  relative overflow-hidden ">
            Hustle
            <span className="w-[15%] h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-40 absolute transition-all gloss"></span>
          </span>
        </h1>
      </div>
    </div>
  );
}
