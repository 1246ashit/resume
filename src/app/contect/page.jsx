"use client";
import React from "react";
import { contectInfo } from "../../../public/Project";
import Link from "next/link";
import Image from "next/image";
import { IoIosMail, IoIosMailOpen } from "react-icons/io"; //信件
import { FaPhoneAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { useState } from "react";

export default function Contect() {
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success(`已複製: ${text} 期待您的聯絡😎😎`); // Displays a success message
      },
      () => {
        toast.error("複製失敗");
      }
    );
  };

  return (
    <React.Fragment>
      <h1 className="head-text text-white">我們會是最好的夥伴👊</h1>
      <div className="flex flex-col justify-center">
        <h3 className="mt-6 subhead-text text-white">您可以在這些地方找到我👍</h3>
        <div className="mt-6 flex flex-wrap gap-16">
          {contectInfo.map((info) => (
            <div
              key={info.name}
              className="w-14 h-14 block-container flex items-center justify-center"
            >
              <Link href={info.link} target="_blank" className="w-full h-full">
                <Image
                  src={info.icon}
                  alt={info.name}
                  className="object-contain"
                />
              </Link>
            </div>
          ))}
          <div
            className="w-14 h-14 block-container flex items-center justify-center cursor-pointer"
            onClick={() => handleButtonClick("1246ashit@gmail.com")}
            title="點擊複製信箱"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? <IoIosMailOpen size={60} /> : <IoIosMail size={60} />}
          </div>
          <div
            className="w-14 h-14 block-container flex items-center justify-center cursor-pointer"
            onClick={() => handleButtonClick("0909604471")}
            title="點擊複製手機號碼:0909604471"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? <FaPhoneVolume size={50} /> : <FaPhoneAlt size={50} />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
