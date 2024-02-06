import Navbar from "../../components/Home/Navbar";
import Profilecard from "../../components/Home/Profilecard";
import Sectioncard from "../../components/Home/Sectioncard";
import Welcome from "./SectionComponents/Welcome";
import Feedbacks from "./SectionComponents/Feedbacks";
import Superworks from "./SectionComponents/Superworks";

function Home() {
  // For default styling refer indexe.css and App.jsx
  // please maintain all the break poits at the last from high to low  and always ( minimum ) to use
  return (
    <div className="max-w-full md:h-full xsm:min-h-full flex max-md:flex-col px-[40px] max-sm:px-[20px] text-white">
      {/* // left section  */}
      <div className=" w-1/2 max-md:w-full md:min-h-screen relative flex flex-col items-center gap-[20px] overflow-y-scroll overflow-x-hidden magic">
        {/* {intro section} */}
        {
          /* { Navbar has to be seen while its below 768 px / Tab  }*/
          window.innerWidth > 768 ? "" : <Navbar />
        }
        {window.innerWidth < 768 ? (
          <div className="w-full h-fit flex justify-evenly flex-wrap gap-y-[10px] items-center">
            <Welcome />

            <Profilecard />
          </div>
        ) : (
          <Welcome />
        )}

        {/* project/SuperWrok part  */}
        <Superworks />
        {/* Feedback part  */}
        <Feedbacks />
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
