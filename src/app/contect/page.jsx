import React from "react";
import { contectInfo } from "../../../public/Project";
import Link from "next/link";
import Image from "next/image";

export default function Contect() {
  return (
    <React.Fragment>
      <h1 className="head-text text-white">我們會是最好的夥伴</h1>
      <div>
        <h3 className="mt-6 subhead-text text-white">您可以在這些地方找到我</h3>
        <div className="mt-6 flex flex-wrap gap-16">
          {contectInfo.map((info) => (
            <div className="w-14 h-14 block-container flex items-center justify-center">
              <Link href={info.link} target="_blank" className="w-full h-full">
                <Image
                  src={info.icon}
                  
                  alt={info.name}
                  className="object-contain"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
