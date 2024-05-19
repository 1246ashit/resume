import React from "react";
import { projects } from "../../../public/Project";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Experience() {
  return (
    <React.Fragment>
      <h1 className="head-text  mt-2">工作和專案經歷</h1>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div
            className={`lg:w-[500px] w-full rounded-lg p-4 ${project.color}`}
            key={project.name}
          >
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold  ">
                {project.name}
              </h4>
              <p className="mt-2 ">{project.description}</p>
              {(project.link || project.video) && (
                <div className="mt-5 flex items-center gap-2">
                  {project.link && (
                    <div className="flex">
                      <Link
                        href={project.link}
                        className="font-semibold  font-poppins"
                      >
                        原始碼 <FaArrowRight />
                      </Link>
                    </div>
                  )}
                  {project.video && (
                    <div className="ml-6 ">
                      <iframe
                        src={project.video}
                        title={`YouTube video player for ${project.name}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                       className="w-full h-full md:w-72 md:h-40 "></iframe>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
