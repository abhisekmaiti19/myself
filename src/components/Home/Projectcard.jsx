export default function Projectcard() {
  return (
    <div className="relative xsm:min-w-[140px] xsm:min-h-[125px] md:min-w-[280px] md:min-h-[250px] border-2 border-brand-purple xsm:rounded-lg md:rounded-3xl">
      <div className="w-full h-full absolute top-0 left-0 p-[15px] bg-gradient-to-t from-brand-purple/20 via-tarnsparent to-transparent md:rounded-3xl opacity-0 hover:opacity-100 hover:cursor-pointer ">
        <div className="h-3/6 relative flex justify-end">
          <button className="text-[10px] h-fit px-2 py-1 font-bold bg-white text-black rounded leading-none">
            View Project
          </button>
        </div>
        <div className="text-[10px] font-bold flex flex-col gap-[10px]">
          Tools & Tech
          <div className=" flex gap-[10px] gap-y-1 flex-wrap font-normal xsm:text-[8px] md:text-[12px]">
            <h1>Recat</h1>
            <h1>Recat</h1>
            <h1>Recat</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
