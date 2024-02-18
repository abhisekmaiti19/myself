import { ArrowDownIcon } from "@radix-ui/react-icons";
import { CompassOutlined } from "@ant-design/icons";
import Descbutton from "../components/Others/Descbutton";
import { nanoid } from "nanoid";
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
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="w-full h-full gap-[2rem] overflow-y-auto px-8">
        {/* Resume title part Name and details of contatct */}
        <div className="w-full flex flex-col items-center max-sm:items-start mt-8 gap-8">
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
          <div className="flex justify-center max-sm:justify-start gap-2 max-md:flex-wrap ">
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
        {/* Education */}
        <div className="flex flex-col mt-8">
          {/* Title and buttons  */}
          <div className="w-full flex items-center flex-wrap justify-between gap-3 text-[1.5rem] font-semibold text-white/50 border-b-[0.05rem] border-white/20 pb-2">
            <div className="flex items-center gap-3 text-[1.5rem] font-semibold text-white/50">
              <CompassOutlined className="text-[2rem]" />
              <h1>Education</h1>
            </div>
            <div className="flex gap-3 text-[1.4rem] font-normal">
              <button>University</button>
              <button>School</button>
            </div>
          </div>
          <div className="flex flex-col gap-8 text-[1.4rem] text-white mt-4">
            <div className="flex flex-col gap-4 max-sm:gap-8">
              {/* institute name and address  */}
              <div className="flex justify-between flex-wrap gap-y-2  leading-none">
                <h1 className="text-[2rem]">
                  Future Institute of Engineering and Management
                </h1>
                <h1 className="text-white/50">Kolkata, West Bengal</h1>
              </div>
              {/* degree - marks and duration  */}
              <div className="flex justify-between flex-wrap gap-y-2 leading-none text-white/50">
                <h1 className="flex items-center gap-2 flex-wrap">
                  Bachelor of Technology in Computer Science and Engineering{" "}
                  <span className="bg-black/50 px-2 py-1 rounded text-white/50">
                    GPA - 9.06
                  </span>
                </h1>
                <h1>Aug. 2019 – July 2023</h1>
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
