/* eslint-disable react/prop-types */
import {
  FileTextIcon,
  TransformIcon,
  LightningBoltIcon,
  HeartIcon,
  MagicWandIcon,
  MixIcon,
  Crosshair2Icon,
} from "@radix-ui/react-icons";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
export default function Sidebarbutton({ titledata, show }) {
  let id = nanoid();
  let icons = [
    {
      name: "Resume",
      icon: <FileTextIcon key={id} width="20px" height="20px" />,
    },
    {
      name: "Projects",
      icon: <TransformIcon key={id} width="20px" height="20px" />,
    },
    {
      name: "Skills",
      icon: <LightningBoltIcon key={id} width="20px" height="20px" />,
    },
    {
      name: "Feedbacks",
      icon: <HeartIcon key={id} width="20px" height="20px" />,
    },
    {
      name: "Mentoring",
      icon: <Crosshair2Icon key={id} width="20px" height="20px" />,
    },
    {
      name: "Freelancing",
      icon: <MixIcon key={id} width="20px" height="20px" />,
    },
    {
      name: "Thinking",
      icon: <MagicWandIcon key={id} width="20px" height="20px" />,
    },
  ];

  return (
    <NavLink
      key={id}
      to={titledata === `Resume` ? `` : titledata}
      className={({ isActive }) =>
        `flex justify-start gap-2 text-[14px] p-[10px] rounded-xl max-xl:flex-col max-xl:items-center max-xl:justify-center ${
          isActive
            ? `text-white bg-white/10 `
            : `text-white/50 hover:text-white/30`
        } ${
          show ? `flex-col items-center justify-center` : ``
        }whitespace-nowrap`
      }
    >
      {icons.map((data) => {
        return data.name === titledata ? data.icon : "";
      })}
      {/* {show ? `` : titledata} */}
      {titledata}
    </NavLink>
  );
}
