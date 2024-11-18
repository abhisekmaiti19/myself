export default function Educard() {
  return (
    <div className="flex flex-col gap-[40px] bg-brand-bg/50 border-black border-[1px] max-sm:p-[30px] p-[40px] rounded-lg">
      {/* institute name and address  */}
      <div className="flex justify-between items-center flex-wrap gap-y-[20px] gap-x-10  leading-none">
        <h1 className="text-[20px] max-sm:text-[15px]">
          Future Institute of Engineering and Management
          {/* Fullstack */}
        </h1>
        <h1 className="text-brand-text/50">Kolkata, West Bengal</h1>
      </div>
      {/* degree - marks and duration  */}
      <div className="flex justify-between items-center flex-wrap gap-y-[20px] gap-x-10 leading-none text-brand-text/50">
        <h1 className="flex items-center gap-[20px] flex-wrap">
          Bachelor of Technology in Computer Science and Engineering{" "}
          <span
            className={`bg-whiteblack/50 px-2 py-1 rounded text-brand-text/50`}
          >
            GPA - 9.06
          </span>
        </h1>
        <h1>Aug. 2019 – July 2023</h1>
      </div>
    </div>
  );
}
