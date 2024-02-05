import Navbar from "../../components/Home/Navbar";
import Profilecard from "../../components/Home/Profilecard";
import Projectcard from "../../components/Home/Projectcard";
import Sectioncard from "../../components/Home/Sectioncard";
import Videocard from "../../components/Home/Videocard";
function Home() {
  // For default styling refer indexe.css and App.jsx
  // please maintain all the break poits at the last from high to low  and always ( minimum ) to use
  return (
    <div className="max-w-full md:h-full xsm:min-h-full flex max-md:flex-col px-[40px] max-sm:px-[20px] text-white">
      {/* // left section  */}
      <div className=" w-1/2 max-md:w-full md:min-h-screen relative flex flex-col items-center gap-[20px] overflow-y-scroll overflow-x-hidden magic">
        {/* {intro section} */}
        <div className=" bg-brand-bg-light md:w-[680px] max-md:w-full sm:rounded-3xl xsm:rounded-lg  mt-[40px]">
          <div className="flex flex-col max-sm:flex-wrap sm:gap-[60px] xsm:gap-[20px] box-content p-[40px] max-sm:p-[20px]">
            <div>
              <h1 className=" xsm:text-[20px] min-[360px]:text-[30px] h-fit flex flex-wrap ading-none font-bold">
                {/* text-[60px] */}
                Hello! I can be Your
              </h1>
              <h1 className="text-[120px] xsm:text-[40px] h-fit leading-none font-bold ">
                Employee
              </h1>
            </div>
            <div className="flex gap-[40px] xsm:gap-[10px] xsm:text-[10px] min-[320px]:text-[15px] items-center ">
              <button className="xsm:w-fit xsm:px-[5px] xms:py-[5px] xsm:py-[5px] xsm:rounded h-fit w-fit relative px-[20px] py-[10px] flex items-center gap-[10px] bg-gradient-to-br from-black border-[1px] border-brand-purple  to-brand-purple rounded-full">
                Hire Me
                <img
                  src="../../src/assets/smile.png"
                  className="w-[30px] h-[30px] max-sm:w-[15px] max-sm:h-[15px]"
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
        {/* project part  */}
        <div className="relative md:w-[680px] xsm:w-full flex flex-col xsm:gap-[20px] md:gap-[40px] bg-brand-bg-light xsm:rounded-lg md:rounded-3xl md:p-[40px] xsm:p-[20px]">
          <h1 className="flex gap-[10px] items-center font-bold">
            <img src="../../src/assets/console.png" className=" " alt="" />
            My super works
          </h1>
          {/* left right button  */}

          {/* left  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="xsm:w-4 md:w-6 md:h-6 bg-brand-purple xsm:p-1 md:p-2 box-content rounded-full absolute xsm:left-0 md:left-2 top-[50%] z-[100] opacity-70 hover:opacity-100  hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          {/* right  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="xsm:w-4 md:w-6 md:h-6 bg-brand-purple xsm:p-1 md:p-2 box-content rounded-full absolute xsm:right-0 md:right-2 top-[50%] z-[100] opacity-70 hover:opacity-100 hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>

          {/* for projects cards */}
          <div className="overflow-x-auto xsm:gap-[10px] md:gap-[20px] flex">
            <Projectcard />
            <Projectcard />
            <Projectcard />
          </div>
        </div>
        {/* Feedback part  */}
        <div className="relative xsm:w-full md:w-[680px] flex max-md:flex-col justify-between gap-[20px] md:p-[20px] ">
          {/* feedback menue options  */}
          <div className="flex flex-col md:items-end xsm:w-full xsm:gap-[10px] max-md:gap-[20px] ">
            <h1 className="flex gap-[10px] font-bold">
              <img src="../../src/assets/love.png" alt="" />
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
      </div>

      {/* //right section */}
      <div className="max-md:w-full w-1/2 min-h-screen relative flex flex-col items-center overflow-y-scroll overflow-x-hidden magic">
        {/* for navbar  */}
        <Navbar />

        <div className="h-full bg-red-5 xsm:w-full md:w-[680px] flex max-md:flex-col md:justify-between overflow-hidden">
          {/* only for profile and awards  */}
          <div className=" xsm:w-full md:w-[300px] h-full overflow-y-scroll  magic">
            <div className="flex-col flex gap-[20px]">
              {/* this is profile card image and designation  || mapplying margin top 20*/}
              <Profilecard />
              {/* awards section  */}
              <Sectioncard
                type={"award"}
                data={[
                  {
                    title: "Grand Finalist",
                    desc: ["Smart India Hack-a-thon"],
                  },
                  { title: "Winner", desc: ["Makathon (Govt. WB)"] },
                ]}
              />
              <div className="h-[20px]"></div>
            </div>
          </div>
          {/* skilla and othres */}
          <div className="xsm:w-full md:w-[50%] h-full flex flex-col magic overflow-y-scroll magic">
            <div className="flex flex-col gap-[20px]">
              {/* super power sections aka skills  */}
              <div className="md:mt-[20px]">
                <Sectioncard
                  type={"skills"}
                  data={[
                    {
                      title: "Languages",
                      desc: ["JavaScript", "Java"],
                    },
                    {
                      title: "Libraries",
                      desc: ["React.Js", "Redux", "Tailwind"],
                    },
                    {
                      title: "Developer Tools",
                      desc: ["Git", "VS Code", "Postman", "Figma"],
                    },
                  ]}
                />
              </div>

              {/* Experience  */}
              <Sectioncard
                type={"experinece"}
                data={[
                  { title: "Full-stack Trainee", desc: ["Fynd Academy"] },
                  { title: "Graduate Engineer Trainee", desc: ["LTIMindtree"] },
                ]}
              />
              {/* for space  */}
              <div className="h-[20px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
