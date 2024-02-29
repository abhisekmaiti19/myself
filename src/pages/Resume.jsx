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
import Projectcard from "../components/Cards/Projectcard";
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
  let education = [
    {
      type: "school",

      data: [
        {
          institute: "Panskura Bradley Birt High School",
          degree: "Higher Secondary",
          marks: "77.8%",
          address: "East Medinipur, West Bengal",
          timeline: {
            from: "April, 2017",
            to: "May, 2019",
          },
        },
      ],
    },
    {
      type: "university",

      data: [
        {
          institute: "Future Institute of Engineering and Management",
          degree: "Bachelor of Technology in Computer Science and Engineering",
          marks: "GPA - 9.06",
          address: "Kolkata, West Bengal",
          timeline: {
            from: "Aug, 2019",
            to: "Jul, 2023",
          },
        },
      ],
    },
  ];
  let skills = [
    {
      category: "Languages",
      skills: ["JavaScript", "Java"],
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
    <div className="w-full h-full relative overflow-hidden">
      {/* this controll overflow  */}
      <div className="w-full h-full overflow-y-auto p-[4rem] md:px-[8rem] md:py-[4rem]  xl:px-[12rem] xl:py-[8rem] customscroll">
        {/* this control my content always stay in center  */}
        <div className="w-full flex justify-center">
          {/* main contain area where w-fit means maximum width all content take is equall to the highest width that my content have  */}
          <div className="max-xxl:w-full xxl:w-[99.2rem] flex flex-col gap-[8rem] items-center">
            {/* Resume title part Name and details of contatct */}
            <div className="w-full flex flex-col items-start mt-8  gap-8">
              {/* name and looking for work */}
              <div className="text-[3rem] text-white flex flex-col leading-none">
                <span className="text-[2rem] opacity-40">Hello! Myself</span>
                <h1 className="flex flex-wrap gap-6 items-center">
                  Abhisek Maiti
                  {/* -gradient-to-l from-yellow-700 to-yellow-600 */}
                  <span className="relative overflow-hidden text-[1.2rem] text-black font-bold w-fit bg-gradient-to-l from-yellow-700 to-yellow-600 px-4 py-2 rounded-md">
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

            {/* Experience  */}
            <div className="w-full flex flex-col gap-[2rem]">
              {/* Title  */}
              <div className="w-full flex items-center flex-wrap gap-[2rem] text-[1.5rem] font-semibold text-white/50 border-b-[0.05rem] border-white/20 pb-2">
                <div className="flex items-center gap-3 text-[1.5rem] font-semibold text-white/50">
                  <CodeOutlined className="text-[2rem]" />
                  <h1>Experience</h1>
                </div>
              </div>
              <div className="w-full flex justify-between flex-wrap gap-[2rem] mt-8">
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
            <div className="w-full flex flex-col gap-[2rem]">
              {/* Title  */}
              <div className="w-full flex items-center flex-wrap gap-[2rem] text-[1.5rem] font-semibold text-white/50 border-b-[0.05rem] border-white/20 pb-2">
                <div className="flex items-center gap-3 text-[1.5rem] font-semibold text-white/50">
                  <TransformIcon width="2rem" height="2rem" />
                  <h1>Projects</h1>
                </div>
              </div>
              <div className="w-full flex flex-wrap gap-[2rem] mt-8">
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
            <div className="w-full flex flex-col gap-[2rem]">
              {/* Title  */}
              <div className="w-full flex items-center flex-wrap gap-[2rem] text-[1.5rem] font-semibold text-white/50 border-b-[0.05rem] border-white/20 pb-2">
                <div className="flex items-center gap-3 text-[1.5rem] font-semibold text-white/50">
                  <LightningBoltIcon width="2rem" height="2rem" />

                  <h1>Skills</h1>
                </div>
              </div>
              <div className="w-full flex flex-wrap gap-[4rem] mt-8">
                {skills.map((items) => {
                  let id = nanoid();
                  return (
                    <div className="w-fit flex flex-col gap-[2rem]" key={id}>
                      <h1 className="text-[1.5rem] text-white">
                        {items.category}
                      </h1>
                      <div className="w-fit flex max-sm:flex-wrap gap-[2rem]">
                        {items.skills.map((it) => {
                          let id = nanoid();
                          return <Skillbutton key={id} name={it} mykey={id} />;
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Education */}
            <div className="w-full flex flex-col gap-[2rem] ">
              {/* Title and buttons  */}
              <div className="w-full flex items-center flex-wrap gap-[2rem] text-[1.5rem] font-semibold text-white/50 border-b-[0.05rem] border-white/20 pb-2">
                <div className="flex items-center gap-3 text-[1.5rem] font-semibold text-white/50">
                  <CompassOutlined className="text-[2rem]" />
                  <h1>Education</h1>
                </div>
                <div className="flex gap-3 text-[1.4rem] font-normal">
                  <button>University</button>
                  <button>School</button>
                </div>
              </div>
              {/* {ALL DEATAILS - Institute - marks - address and images} */}
              <div className="w-full flex flex-col gap-8 text-[1.4rem] max-sm:text-[1.2rem] text-white mt-4">
                {/* Deatails without images  */}
                <div className="flex flex-col gap-[4rem] bg-brand-bg/50 border-black border-[1px] p-[4rem] rounded-lg">
                  {/* institute name and address  */}
                  <div className="flex justify-between items-center flex-wrap gap-y-[2rem] gap-x-10  leading-none">
                    <h1 className="text-[2rem] max-sm:text-[1.5rem]">
                      Future Institute of Engineering and Management
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
                {/* image showcase slider  */}
                <Imageslide />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="absolute bottom-8 right-16 flex items-center gap-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-900 hover:to-orange-600 px-6 py-4">
        <div className=" animate-bounce ">
          <ArrowDownIcon width="2rem" height="2rem" />
        </div>
        <span className=" text-[1.4rem] font-bold">Download Me</span>
      </button>
    </div>
  );
}
