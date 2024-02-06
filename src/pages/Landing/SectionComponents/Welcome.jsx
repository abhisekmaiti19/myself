import smile from "../../../assets/smile.png";
export default function Welcome() {
  return (
    <div className=" bg-brand-bg-light md:w-full xxl:w-[680px] max-[613px]:w-full min-[613px]:w-fit md:rounded-3xl xsm:rounded-lg  md:mt-[40px]">
      <div className="flex flex-wrap min-[613px]:flex-col sm:justify-between sm:items-center md:items-start max-sm:flex-wrap xxl:gap-[60px] md:gap-[20px] xsm:gap-[20px] box-content p-[40px] max-sm:p-[20px]">
        <div>
          <h1 className=" xsm:text-[20px] min-[360px]:text-[30px] md:text-[20px] h-fit flex flex-wrap ading-none font-bold">
            {/* text-[60px] */}
            Hello! I can be Your
          </h1>
          <h1 className="xsm:text-[40px] min-[514px]:text-[55px]md:text-[40xp] h-fit leading-none font-bold ">
            Employee
          </h1>
        </div>
        <div className="flex sm:flex-col min-[613px]:flex-row min-[613px]:items-center sm:items-start gap-[40px] xsm:gap-[20px] xsm:text-[10px] min-[320px]:text-[10px] items-center ">
          <button className="xsm:w-fit xsm:px-[10px] xms:py-[5px] xsm:py-[5px] xsm:rounded h-fit w-fit relative px-[20px] py-[10px] flex items-center gap-[10px] bg-gradient-to-br from-black border-[1px] border-brand-purple  to-brand-purple rounded-full">
            Hire Me
            <img
              src={smile}
              className="xxl:w-[30px] xxl:h-[30px] md:w-[20px] md:h-[20px] xsm:w-[15px] xsm:h-[15px] sm:w-[20px] sm:h-[20px]"
              alt=""
            />
            <div className="xsm:text-[10px] min-[320px]:text-[15px] xsm:w-fit xsm:px-[10px] xms:py-[5px] xsm:py-[5px] xsm:rounded h-fit w-fit px-[20px] py-[10px] flex items-center gap-[10px] rounded-full bg-gradient-to-tl from-black  to-brand-purple absolute top-0 left-0 justify-center opacity-0 hover:opacity-100 transition-all duration-700 max-sm:text-[15px] max-sm:box-content ">
              Hire Me
              <img
                src={smile}
                className="xxl:w-[30px] xxl:h-[30px] md:w-[20px] md:h-[20px] xsm:w-[15px] xsm:h-[15px] sm:w-[20px] sm:h-[20px]"
                alt=""
              />
            </div>
          </button>
          <button className=" h-fit w-fit md:px-[20px] md:py-[10px]  flex gap-[10px] items-center">
            Download Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-[30px] md:h-[30px] xsm:w-[15px] xsm:h-[15px] sm:w-[20px] sm:h-[20px] animate-bounce"
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
