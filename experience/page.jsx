import React from "react";
import { projects } from "../public/Project";

export default function Experience() {
  return (
    <>
      <h1 className="head-text text-white mt-2">工作和專案經歷</h1>
      <div className="flex flex-col gap-4 ">
        {projects.map((project) => (
          <div className="mt-5 flex flex-col">
            <h4 className="text-2xl font-poppins font-semibold text-white">
              {project.name}
            </h4>
            <p className="mt-2 text-white">{project.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
