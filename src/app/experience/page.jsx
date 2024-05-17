import React from "react";
import { projects } from "../../../public/Project";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Experience() {
  return (
    <>
      <h1 className="head-text text-white mt-2">
        工作和專案經歷
      </h1>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div
            className={`bg-gray-700 lg:w-[500px] w-full rounded-sm p-4`}
            key={project.name}
          >
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold text-white">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-100">{project.description}</p>
              <div className="mt-5 flex items-center gap-2">
                {project.link === "" ? (
                  <></>
                ) : (
                  <Link
                    href={project.link}
                    className="font-semibold text-white font-poppins "
                  >
                    原始碼 <FaArrowRight />
                  </Link>
                )}
                {project.video === "" ? (
                  <></>
                ) : (
                  <Link
                    href={project.video}
                    className="font-semibold text-white font-poppins"
                  >
                    影片連結 <FaArrowRight />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
