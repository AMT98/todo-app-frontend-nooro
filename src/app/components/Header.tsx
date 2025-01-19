import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-center ">
      <Image
        src="/logo.png"
        width={22}
        height={36}
        alt={"rock logo"}
        className="mt-[12px]"
      />
      <h1
        className="text-4xl font-black ml-2"
        style={{
          fontSize: "40px",
          lineHeight: "48.41px",
        }}
      >
        <span className="text-[#4EA8DE] mr-2">Todo</span>
        <span className="text-[#5E60CE]">App</span>
      </h1>
    </div>
  );
}
