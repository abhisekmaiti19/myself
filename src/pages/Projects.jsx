export default function Projects() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* this controll overflow  */}
      <div className="w-full h-full overflow-y-auto p-[4rem] md:px-[8rem] md:py-[4rem]  xl:px-[12rem] xl:py-[8rem] customscroll">
        {/* this control my content always stay in center  */}
        <div className="w-full flex justify-center">
          {/* main contain area where w-fit means maximum width all content take is equall to the highest width that my content have  */}
          <div className="max-xxl:w-full xxl:w-[99.2rem] flex flex-col gap-[8rem] items-center">
            hi
          </div>
        </div>
      </div>
    </div>
  );
}
