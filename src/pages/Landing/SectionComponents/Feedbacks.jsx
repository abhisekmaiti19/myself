import Videocard from "../../../components/Home/Videocard";
import love from "../../../assets/love.png";

export default function Feedbacks() {
  return (
    <div className="relative xsm:w-full md:w-[680px] flex max-md:flex-col justify-between gap-[20px] md:p-[20px] ">
      {/* feedback menue options  */}
      <div className="flex flex-col md:items-end xsm:w-full xsm:gap-[10px] max-md:gap-[20px] ">
        <h1 className="flex gap-[10px] font-bold">
          <img src={love} alt="" />
          Feedbacks
        </h1>
        <div className="flex md:flex-col xsm:w-full xsm:ml-[40px] xsm:text-[15px] gap-[10px]">
          <h1>Client</h1>
          <h1>Student</h1>
        </div>
      </div>

      <div className="md:w-[70%] xsm:w-full flex flex-col gap-[10px]">
        <div className="overflow-x-scroll">
          {/* video cards  */}
          <div className="flex xsm:gap-[10px] md:gap-[20px]">
            <Videocard />
            <Videocard />
            <Videocard />
          </div>
        </div>
        <h1 className=" text-center text-purple-500/30 md:text-[20px] xsm:text-[15px] xsm:text-start">
          Helped local businesses digitally
        </h1>
      </div>
    </div>
  );
}
