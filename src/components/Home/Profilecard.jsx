export default function Profilecard() {
  return (
    <div className="mt-[20px] h-content bg-gradient-to-tl from-black  to-brand-purple xsm:rounded-lg md:rounded-xl flex flex-col">
      <img
        src="../../src/assets/abhisek.png"
        className=" xsm:w-full md:w-[300px] md:h-[240px] mt-[60px]"
        alt=""
      />
      <div className="flex flex-col xsm:p-[20px] md:p-[40px] gap-[10px] bg-brand-bg-light box-content xsm:rounded-b-lg md:rounded-b-xl">
        {/* for current role  */}
        <h1 className="font-medium max-md:text-[15px] ">Looking for</h1>
        <h1 className="font-bold max-md:text-[15px]">Frontend Dev Role</h1>
      </div>
    </div>
  );
}
