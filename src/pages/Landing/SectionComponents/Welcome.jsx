export default function Welcome() {
  return (
    <div className=" bg-brand-bg-light md:w-[680px] min-[500px]:w-fit max-[501px]:w-full md:rounded-3xl xsm:rounded-lg  md:mt-[40px]">
      <div className="flex flex-col max-sm:flex-wrap md:gap-[60px] xsm:gap-[20px] box-content p-[40px] max-sm:p-[20px]">
        <div>
          <h1 className=" xsm:text-[20px] min-[360px]:text-[30px] h-fit flex flex-wrap ading-none font-bold">
            {/* text-[60px] */}
            Hello! I can be Your
          </h1>
          <h1 className="xsm:text-[40px] min-[514px]:text-[55px] h-fit leading-none font-bold ">
            Employee
          </h1>
        </div>
        <div className="flex gap-[40px] xsm:gap-[10px] xsm:text-[10px] min-[320px]:text-[15px] items-center ">
          <button className="xsm:w-fit xsm:px-[10px] xms:py-[5px] xsm:py-[5px] xsm:rounded h-fit w-fit relative px-[20px] py-[10px] flex items-center gap-[10px] bg-gradient-to-br from-black border-[1px] border-brand-purple  to-brand-purple rounded-full">
            Hire Me
            <img
              src="../../src/assets/smile.png"
              className="md:w-[30px] md:h-[30px] xsm:w-[20px] xsm:h-[20px]"
              alt=""
            />
            <div className="w-full h-full max-sm:px-[10px] xsm:rounded xsm:text-[10px] xsm:px-[5px] rounded-full bg-gradient-to-tl from-black  to-brand-purple absolute top-0 left-0 flex gap-[10px] justify-center items-center opacity-0 hover:opacity-100 transition-all duration-700 max-sm:text-[15px] max-sm:box-content max-sm:w-fit">
              Hire Me
              <img
                src="../../src/assets/smile.png"
                className="w-[30px] h-[30px] max-sm:w-[15px] max-sm:h-[15px]"
                alt=""
              />
            </div>
          </button>
          <button className=" h-fit w-fit sm:px-[20px] sm:py-[10px]  flex gap-[10px] items-center">
            Download Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="sm:w-6 sm:h-6 w-4 h-4 animate-bounce "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
