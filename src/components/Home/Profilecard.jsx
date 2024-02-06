import abhisek from "../../../src/assets/abhisek.png";
export default function Profilecard() {
  return (
    <div className="md:mt-[20px] h-fit xsm:w-full min-[613px]:w-fit bg-gradient-to-tl from-black  to-brand-purple xsm:rounded-lg md:rounded-xl flex flex-col items-center">
      <img
        src={abhisek}
        className=" xsm:w-[150px] md:w-[300px] md:h-[240px] xsm:mt-[20px] md:mt-[60px]"
        alt=""
      />
      <div className=" xsm:w-full flex flex-col xsm:p-[20px] md:p-[40px] xsm:box-border gap-[10px] bg-brand-bg-light md:box-content xsm:rounded-b-lg md:rounded-b-xl">
        {/* for current role  */}
        <h1 className="font-medium max-md:text-[15px] ">Looking for</h1>
        <h1 className="font-bold max-md:text-[15px]">Frontend Dev Role</h1>
      </div>
    </div>
  );
}
