import React from "react";
import Image from "next/image";
import { skills } from "../public/Skills";

export default function About() {
  return (
    <>
      <h1 className="head-text text-white mt-2">嗨,我是俊杰</h1>
      <div className="mt-5 flex flex-col gap-3 text-white">
        <p>
          我是一位認真負責、努力學習的社會新鮮人，對技術與新知抱持著熱忱，勇於接受各種挑戰
          。在大學就學期間除了學習系上規範的課程內容之外，我更會利用其他課餘時間，透過YouTube
          的教學影片自我學習新技術，例如影像辨識，圖片生成，前後端架設…等等。這個過程讓我學到更多知識，讓我看到更多的面向，同時提升處理問題的能力。
        </p>
      </div>
      <div className="py-10 flex flex-col mt-3">
        <h3 className="subhead-text text-white">我的技能</h3>
        <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div key={skill.name} className="block-container w-20 h-20 flex items-center justify-center">
              <Image
                src={skill.img}
                alt={skill.name}
                width={40}
                height={40}
                className="w-1/2 h-1/2 object-contain"
              />
          </div>
        ))}
        </div>
      </div>
    </>
  );
}
