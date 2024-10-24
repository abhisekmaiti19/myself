import {
  ArrowDownIcon,
  LightningBoltIcon,
  TransformIcon,
} from "@radix-ui/react-icons";
import { CompassOutlined, CodeOutlined } from "@ant-design/icons";
import Descbutton from "../components/Others/Descbutton";
import Skillbutton from "../components/Others/Skillbutton";
import Imageslide from "../components/Sliders/Imageslide";
import { nanoid } from "nanoid";
import Expcard from "../components/Cards/Expcard";
import fynd from "../assets/fynd.svg";
import ltim from "../assets/ltim.svg";
import prj from "../assets/prj1.png";
import prj2 from "../assets/prj2.png";
import prj3 from "../assets/prj3.png";
import me from "../assets/me.png";
import Projectcard from "../components/Cards/Projectcard";
import Educard from "../components/Cards/Educard";
import PageSeo from "../components/Seo/PageSeo";

export default function Resume() {
  let mydetails = [
    {
      text: "abhisekmaiti19@gmail.com",
      link: "",
    },
    {
      text: "Buzz me",
      link: "",
    },
    {
      text: "Github",
      link: "",
    },
    {
      text: "I'm on Linkedin",
      link: "",
    },
  ];
  // let education = [
  //   {
  //     type: "school",

  //     data: [
  //       {
  //         institute: "Panskura Bradley Birt High School",
  //         degree: "Higher Secondary",
  //         marks: "77.8%",
  //         address: "East Medinipur, West Bengal",
  //         timeline: {
  //           from: "April, 2017",
  //           to: "May, 2019",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     type: "university",

  //     data: [
  //       {
  //         institute: "Future Institute of Engineering and Management",
  //         degree: "Bachelor of Technology in Computer Science and Engineering",
  //         marks: "GPA - 9.06",
  //         address: "Kolkata, West Bengal",
  //         timeline: {
  //           from: "Aug, 2019",
  //           to: "Jul, 2023",
  //         },
  //       },
  //     ],
  //   },
  // ];
  let skills = [
    {
      category: "Languages",
      skills: ["JavaScript", "Java", "Apex"],
    },
    {
      category: "Libraries",
      skills: ["Reactjs", "Redux", "Tailwind"],
    },
    {
      category: "Frameworks",
      skills: ["Node.js", "Express"],
    },
    {
      category: "Database",
      skills: ["MongoDb", "MySQL"],
    },
    {
      category: "Developer Tools",
      skills: ["Git", "VS Code", "Postman", "Figma"],
    },
  ];
  return (
    <>
      <PageSeo type="home" />
      <div className="w-full h-full relative overflow-hidden">
        {/* this controll overflow  */}
        <div className="w-full h-full overflow-y-auto p-[2.5rem] md:px-[5rem] md:py-[2.5rem]  xl:px-[7.5rem] xl:py-[5rem] customscroll">
          {/* this control my content always stay in center  */}
          <div className="w-full flex justify-center">
            {/* main contain area where w-fit means maximum width all content take is equall to the highest width that my content have  */}
            <div className="max-xxl:w-full xxl:w-[62rem] flex flex-col gap-[5rem] items-center">
              {/* Resume title part Name and details of contatct */}
              <div className="w-full flex sm:items-end sm:flex-row max-sm:flex-col max-sm:items-start justify-between gap-[2.5rem]">
                {/* your image  */}
                <div className="min-w-[9.375rem] h-[9.375rem] bg-white/10 rounded-lg overflow-hidden flex justify-center items-center relative">
                  <div className="w-full h-full absolute top-0 right-0">
                    <div className="w-full h-full bottom-0 absolute bg-gradient-to-t from-brand-bg/80 to-transparent"></div>
                  </div>
                  <img src={me} className="w-full h-full" alt="" />
                </div>
                <div className="w-full flex flex-col items-start justify-end mt-8  gap-8">
                  {/* name and looking for work */}
                  <div className="text-[1.875rem] text-white flex flex-col leading-none">
                    <span className="text-[1.25rem] opacity-40">
                      Hello! Myself
                    </span>
                    <h1 className="flex flex-wrap gap-6 items-center">
                      Abhisek Maiti
                      {/* -gradient-to-l from-yellow-700 to-yellow-600 */}
                      <span className="relative overflow-hidden text-[0.75rem] text-black font-bold w-fit bg-gradient-to-l from-yellow-700 to-yellow-600 px-4 py-2 rounded-md">
                        Looking for React Dev Role
                      </span>
                    </h1>
                  </div>
                  {/* email phone and others  */}
                  <div className="flex justify-start gap-2 flex-wrap ">
                    {mydetails.map((item) => {
                      let id = nanoid();
                      return (
                        <Descbutton
                          key={id}
                          text={item.text}
                          link="mylink"
                          mykey={id}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Experience  */}
              <div className="w-full flex flex-col gap-[1.25rem]">
                {/* Title  */}
                <div className="w-full flex items-center flex-wrap gap-[1.25rem] text-[15px] font-semibold text-white/50 border-b-[0.5px] border-white/20 pb-2">
                  <div className="flex items-center gap-3 text-[15px] font-semibold text-white/50">
                    <CodeOutlined className="text-[1.25rem]" />
                    <h1>Experience</h1>
                  </div>
                </div>
                <div className="w-full flex justify-between flex-wrap gap-[1.25rem] mt-8">
                  <Expcard
                    img={fynd}
                    name={"Fynd Academy"}
                    position={"Full Stack with Javascript Trainee"}
                    duration={"May 2023 - Aug 2023"}
                    location={"Remote"}
                  />
                  <Expcard
                    img={ltim}
                    name={"LTIMindtree"}
                    position={"Graduate Engineer Trainee"}
                    duration={"Feb 2023 - May 2023"}
                    location={"Remote"}
                  />
                </div>
              </div>
              {/* Projects  */}
              <div className="w-full flex flex-col gap-[1.25rem]">
                {/* Title  */}
                <div className="w-full flex items-center flex-wrap gap-[1.25rem] text-[15px] font-semibold text-white/50 border-b-[0.5px] border-white/20 pb-2">
                  <div className="flex items-center gap-3 text-[15px] font-semibold text-white/50">
                    <TransformIcon width="1.25rem" height="1.25rem" />
                    <h1>Projects</h1>
                  </div>
                </div>
                <div className="w-full flex flex-wrap gap-[1.25rem] mt-8">
                  <Projectcard
                    name={"Inherit"}
                    img={prj}
                    desc={"End to End application management platform"}
                  />
                  <Projectcard
                    name={"Quick Store"}
                    img={prj2}
                    desc={
                      "Daily grocerry and essentials odering platform with Snipcart integraion"
                    }
                  />
                  <Projectcard name={"GitFinder"} img={prj3} desc={""} />
                </div>
              </div>
              {/* skills  */}
              <div className="w-full flex flex-col gap-[1.25rem]">
                {/* Title  */}
                <div className="w-full flex items-center flex-wrap gap-[1.25rem] text-[15px] font-semibold text-white/50 border-b-[0.5px] border-white/20 pb-2">
                  <div className="flex items-center gap-3 text-[15px] font-semibold text-white/50">
                    <LightningBoltIcon width="2rem" height="2rem" />

                    <h1>Skills</h1>
                  </div>
                </div>
                <div className="w-full flex flex-wrap gap-[2.5rem] mt-8">
                  {skills.map((items) => {
                    let id = nanoid();
                    return (
                      <div
                        className="w-fit flex flex-col gap-[1.25rem]"
                        key={id}
                      >
                        <h1 className="text-[15px] text-white">
                          {items.category}
                        </h1>
                        <div className="w-fit flex max-sm:flex-wrap gap-[1.25rem]">
                          {items.skills.map((it) => {
                            let id = nanoid();
                            return (
                              <Skillbutton key={id} name={it} mykey={id} />
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Education */}
              <div className="w-full flex flex-col gap-[1.25rem] ">
                {/* Title and buttons  */}
                <div className="w-full flex items-center flex-wrap gap-[1.25rem] text-[0.9375rem] font-semibold text-white/50 border-b-[0.5px] border-white/20 pb-2">
                  <div className="flex items-center gap-3 text-[15px] font-semibold text-white/50">
                    <CompassOutlined className="text-[1.25rem]" />
                    <h1>Education</h1>
                  </div>
                  <div className="flex gap-3 text-[14px] font-normal">
                    <button>University</button>
                    <button>School</button>
                  </div>
                </div>
                {/* {ALL DEATAILS - Institute - marks - address and images} */}
                <div className="w-full flex flex-col gap-8 text-[14px] max-sm:text-[12px] text-white mt-4">
                  {/* Education details  */}
                  <Educard />
                  {/* image showcase slider  */}
                  <Imageslide />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="absolute bottom-8 right-16 flex items-center gap-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-900 hover:to-orange-600 px-6 py-4">
          <div className=" animate-bounce ">
            <ArrowDownIcon width="1.25rem" height="1.25rem" />
          </div>
          <span className=" text-[14px] font-bold">Download Me</span>
        </button>
      </div>
    </>
  );
}
