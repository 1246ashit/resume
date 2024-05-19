"use client";
import "./globals.css";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import OpenNB from "./components/OpenNB";
const Scene = dynamic(() => import("./components/Scene"), { ssr: true });
import Contents from "./components/Contents";

export default function RootLayout({ children }) {
  const [showCard, setShowCard] = useState(false);

  const handleScrollChange = (offset) => {
    if (offset >= 0.8) {
      setShowCard(true);
    } else {
      setShowCard(false);
    }
  };

  return (
    <html lang="en">
      <head>
        <title>俊杰的履歷</title>
      </head>
      <body className="relative h-screen w-screen bg-slate-950">
        <Scene onScrollChange={handleScrollChange} />
        {showCard ? (
          <Contents showCard={showCard}>{children}</Contents>
        ) : (
          <OpenNB showCard={showCard} />
        )}
      </body>
    </html>
  );
}
