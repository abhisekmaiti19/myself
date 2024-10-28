/* eslint-disable no-unused-vars */
//import React from 'react'
import Skillcard from "../components/Cards/Skillcard";
import {
  MonitorOutlined,
  PlusOutlined,
  LayoutOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ThreeDCardDemo } from "@/components/Cards/Threedcard";

import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { Bentogrid } from "@/components/Contents/Bentogrid";

export default function Skills() {
  const { toggleSidebar } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);

  // vanish input-placeholder

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    // overflow-hidden
    <div className="w-full flex h-full relative">
      <div className="relative">
        <AppSidebar className=" absolute" />
      </div>
      <div className="w-full h-full">
        <div className="w-full px-[10px] py-[20px] bg-neutral-700 flex justify-between">
          <Button
            variant="ghost"
            className="text-white/70"
            onClick={toggleSidebar}
          >
            <LayoutOutlined className="text-white/70" /> Open/Close
          </Button>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
        <div className="w-full h-full px-10 flex-row flex-wrap  overflow-scroll">
          <Bentogrid />
          <ThreeDCardDemo />
        </div>
      </div>
    </div>
  );
}
