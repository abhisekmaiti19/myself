/* eslint-disable react/prop-types */
//import css from "../../assets/skills/css.svg";
import { useEffect, useState } from "react";
import express from "../../assets/skills/express.svg";
import figma from "../../assets/skills/figma.svg";
import git from "../../assets/skills/git.svg";
//import html from "../../assets/skills/html.svg";
import java from "../../assets/skills/java.svg";
import javascript from "../../assets/skills/javascript.svg";
import mongodb from "../../assets/skills/mongodb.svg";
import mysql from "../../assets/skills/mysql.svg";
import nodejs from "../../assets/skills/nodejs.svg";
import postman from "../../assets/skills/postman.svg";
import reactjs from "../../assets/skills/reactjs.svg";
import redux from "../../assets/skills/redux.svg";
import tailwind from "../../assets/skills/tailwind.svg";
import vscode from "../../assets/skills/vscode.svg";
import apex from "../../assets/skills/apex.png";

export default function Skillbutton({ name, mykey }) {
  let list = [
    {
      name: "JavaScript",
      img: <img src={javascript} alt="" key={mykey} width="30rem" />,
    },
    {
      name: "Java",
      img: <img src={java} alt="" key={mykey} width="30rem" />,
    },
    {
      name: "Apex",
      img: <img src={apex} alt="" key={mykey} width="30rem" />,
    },
    {
      name: "Reactjs",
      img: <img src={reactjs} alt="" key={mykey} width="30rem" />,
    },
    {
      name: "Redux",
      img: <img src={redux} alt="" key={mykey} width="30rem" />,
    },
    {
      name: "Tailwind",
      img: <img src={tailwind} alt="" key={mykey} width="30rem" />,
    },
    {
      name: "Node.js",
      img: <img src={nodejs} alt="" key={mykey} width="30rem" />,
    },
    {
      name: "Express",
      img: <img src={express} alt="" key={mykey} width="30rem" />,
    },
    {
      name: "MongoDb",
      img: <img src={mongodb} alt="" key={mykey} width="30rem" />,
    },
    {
      name: "MySQL",
      img: <img src={mysql} alt="" key={mykey} width="30rem" />,
    },
    {
      name: "Git",
      img: <img src={git} alt="" key={mykey} width="30rem" />,
    },
    {
      name: "VS Code",
      img: <img src={vscode} alt="" key={mykey} width="30rem" />,
    },
    {
      name: "Postman",
      img: <img src={postman} alt="" key={mykey} width="30rem" />,
    },
    {
      name: "Figma",
      img: <img src={figma} alt="" key={mykey} width="30rem" />,
    },
  ];

  const [currentTheme, setCurrentTheme] = useState(null);

  useEffect(() => {
    let themeValue = localStorage.getItem("vite-ui-theme");
    setCurrentTheme(themeValue);
  }, []);

  return (
    <div
      className={`min-[375px]:w-[100px] h-[100px] max-[285px]:w-full min-[285px]:w-[80px] max-[375px]:h-[80px] rounded-lg flex flex-col justify-around items-center p-6  bg-brand-bg/50 border-[1px] border-black ${
        currentTheme === "light"
          ? "filter grayscale hover:grayscale-0"
          : "filter grayscale hover:grayscale-0"
      } transition-all duration-200 ease-in-out hover:cursor-cell`}
    >
      {list.map((it) => {
        if (it.name === name) {
          return it.img;
        }
      })}

      <h1 className="text-[15px] max-[375px]:text-[14px] text-brand-text/50">
        {name}
      </h1>
    </div>
  );
}
