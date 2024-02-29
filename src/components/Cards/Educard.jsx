export default function Educard() {
  return (
    <div className="flex flex-col gap-[4rem] bg-brand-bg/50 border-black border-[1px] max-sm:p-[3rem] p-[4rem] rounded-lg">
      {/* institute name and address  */}
      <div className="flex justify-between items-center flex-wrap gap-y-[2rem] gap-x-10  leading-none">
        <h1 className="text-[2rem] max-sm:text-[1.5rem]">
          Future Institute of Engineering and Management
          {/* Fullstack */}
        </h1>
        <h1 className="text-white/50">Kolkata, West Bengal</h1>
      </div>
      {/* degree - marks and duration  */}
      <div className="flex justify-between items-center flex-wrap gap-y-[2rem] gap-x-10 leading-none text-white/50">
        <h1 className="flex items-center gap-[2rem] flex-wrap">
          Bachelor of Technology in Computer Science and Engineering{" "}
          <span className="bg-black/50 px-2 py-1 rounded text-white/50">
            GPA - 9.06
          </span>
        </h1>
        <h1>Aug. 2019 – July 2023</h1>
      </div>
    </div>
  );
}
