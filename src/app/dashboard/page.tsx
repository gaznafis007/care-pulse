import React from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";

type Props = {};

function Dashboard({}: Props) {
  return (
    <div>
      <div className="flex flex-row space-x-2 items-center pl-16 mt-12">
        <Image src={logo} alt="company logo" width={40} height={40} />
        <p className="text-2xl font-semibold">CarePulse</p>
      </div>
    </div>
  );
}

export default Dashboard;
