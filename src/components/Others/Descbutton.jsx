/* eslint-disable react/prop-types */
import {
  PhoneFilled,
  MailFilled,
  LinkedinFilled,
  GithubFilled,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
export default function Descbutton({ text, mykey }) {
  let icons = [
    {
      text: "Buzz me",
      link: "",
      icon: <PhoneFilled key={mykey} />,
    },
    {
      text: "abhisekmaiti19@gmail.com",
      link: "",
      icon: <MailFilled key={mykey} />,
    },
    {
      text: "I'm on Linkedin",
      link: "",
      icon: <LinkedinFilled key={mykey} />,
    },
    {
      text: "Github",
      link: "",
      icon: <GithubFilled key={mykey} />,
    },
  ];

  const [currentTheme, setCurrentTheme] = useState(null);

  useEffect(() => {
    let themeValue = localStorage.getItem("vite-ui-theme");
    setCurrentTheme(themeValue);
  }, []);

  return (
    <button
      className={`px-6 py-1 text-[14px] ${
        currentTheme === "light" ? "border border-neutral-800/20" : ""
      } bg-whiteblack/50 text-brand-text/50 hover:text-brand-text rounded-lg flex items-center gap-4 transition-all duration-200 ease-in-out`}
    >
      {icons.map((item) => {
        if (item.text === text) {
          return item.icon;
        }
      })}
      {text}
    </button>
  );
}
