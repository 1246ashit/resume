"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { skills } from "../../public/Skills";
import { experiences } from "../../public/Project";
import "react-vertical-timeline-component/style.min.css";

const VerticalTimeline = dynamic(
  () =>
    import("react-vertical-timeline-component").then(
      (mod) => mod.VerticalTimeline
    ),
  { ssr: false }
);
const VerticalTimelineElement = dynamic(
  () =>
    import("react-vertical-timeline-component").then(
      (mod) => mod.VerticalTimelineElement
    ),
  { ssr: false }
);

export default function Page() {
  return (
    <React.Fragment>
      <h1 className="head-text mt-2 text-white">嗨,我是俊杰😀</h1>
      <div className="mt-5 flex flex-col gap-3 text-white">
        <p>
          我是一位認真負責、努力學習的社會新鮮人，對技術與新知抱持著熱忱，勇於接受各種挑戰
          。在大學就學期間除了學習系上規範的課程內容之外，我更會利用其他課餘時間，透過YouTube
          的教學影片自我學習新技術，例如影像辨識，圖片生成，前後端架設…等等。這個過程讓我學到更多知識，讓我看到更多的面向，同時提升處理問題的能力。
        </p>
      </div>
      <div className="py-10 flex flex-col mt-3">
        <h3 className="subhead-text text-white">我的技能🔨</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="block-container w-20 h-20 flex items-center justify-center"
            >
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
        <div className="py-16">
          <h3 className="subhead-text text-white">工作經驗💯</h3>
          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  visible={true}
                  key={experience.name}
                  date={experience.date}
                  icon={
                    experience.icon ? (
                      <Image
                        src={experience.icon}
                        alt={experience.name}
                        className="rounded-full w-full h-full"
                      />
                    ) : (
                      <div
                        className="bg-blue-950 rounded-full w-full h-full flex items-center 
                      justify-center text-white font-bold text-xl"
                      >
                        {experience.icon2}
                      </div>
                    )
                  }
                  contentStyle={{
                    border: "8px",
                    borderStyle: "solid",
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.name}
                    </h3>
                    <p
                      className="text-black font-medium font-base"
                      style={{ margin: 0 }}
                    >
                      {experience.description}
                    </p>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
