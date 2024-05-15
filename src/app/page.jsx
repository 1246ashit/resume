"use client";
import Card from "./components/Card";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { VscLayoutMenubar } from "react-icons/vsc";
import HeaderbarItem from "./components/HeaderbarItem";

const Scene = dynamic(() => import("./components/Scene"), { ssr: false });

export default function Home() {
  const [showCard, setShowCard] = useState(false);
  const [showScrollTip, setShowScrollTip] = useState(true);
  const [selectedContent, setSelectedContent] = useState("");

  const handleScrollChange = (offset) => {
    if (offset >= 0.8) {
      setShowCard(true);
      setShowScrollTip(false);
    } else if (offset <= 0.5) {
      setShowScrollTip(true);
      setShowCard(false);
    } else {
      setShowCard(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      handleScrollChange(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHeaderbarItemClick = (content) => {
    setSelectedContent(content);
    setShowCard(true); // 確保卡片顯示
  };

  return (
    <div className="relative h-screen w-screen bg-slate-950">
      <Scene onScrollChange={handleScrollChange} />
      <div
        className={`text-white font-medium absolute z-20 top-3/4 left-1/2 transform -translate-x-1/2 
        -translate-y-1/2 w-10/12 h-auto pt-2 pb-2 bg-black rounded-lg flex flex-col items-center justify-center 
        transition-opacity duration-1000 ${
          showScrollTip ? "opacity-60" : "opacity-0"
        }`}
      >
        <h2 className="">滾動打開電腦...</h2>
        <FaAngleDoubleDown size={30} className="animate-bounceSmall" />
      </div>
      <div
        className={`absolute z-20 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 
          h-auto transition-opacity duration-1000 ${
            showCard ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="flex flex-col justify-center">
          <div className="flex flex-row justify-end text-white ">
            <HeaderbarItem
              title={"關於我"}
              className={"bg-blue-700 rounded-t-lg p-3"}
              onClick={() => handleHeaderbarItemClick("about")}
            />
            <HeaderbarItem
              title={"工作經歷"}
              className={"bg-blue-800 rounded-t-lg p-3"}
              onClick={() => handleHeaderbarItemClick("experience")}
            />
            <HeaderbarItem
              title={"關於我"}
              className={"bg-blue-900 rounded-t-lg p-3"}
              onClick={() => handleHeaderbarItemClick("about")}
            />
          </div>
        </div>
        <div
          className={`bg-blue-400 rounded-nr flex items-start justify-center `}
        >
          {showCard && <Card showCard={showCard} content={selectedContent} />}
        </div>
      </div>
    </div>
  );
}
