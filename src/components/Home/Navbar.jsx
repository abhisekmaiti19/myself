export default function Navbar() {
  return (
    <div className="bg-brand-bg-light xsm:rounded-lg  md:rounded-2xl xsm:w-full md:w-[680px] mt-[40px] xsm:px-[20px] xsm:py-[10px] md:px-[40px] md:py-[20px] flex justify-between items-center">
      <h1 className=" font-bold text-brand-black-light xsm:[20px] md:text-[30px] ">
        Abhisek{" "}
        <span className="xsm:text-[20px] md:text-[30px] font-normal text-white">
          Maiti
        </span>
      </h1>

      <div className="flex gap-[10px] text-[20px]">
        <h1 className="md:visible hidden ">Explore</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="md:w-6 md:h-6 xsm:w-4 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
          />
        </svg>
      </div>
    </div>
  );
}
