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

export default function Skills() {
  const { toggleSidebar } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);
  return (
    // overflow-hidden
    <div className="w-full flex h-full relative bg-white ">
      <div className="relative">
        <AppSidebar className=" absolute" />
      </div>
      <div className="w-full h-full bg-red-200">
        <div className="w-full px-[10px] py-[20px] bg-white">
          <Button variant="ghost" onClick={toggleSidebar}>
            <LayoutOutlined /> Open/Close
          </Button>
        </div>
      </div>
    </div>
  );
}
