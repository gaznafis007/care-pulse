import React from "react";
import logo from "../../assets/logo.png";
import capsule from "../../assets/capsule.png";
import Image from "next/image";

const Register = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-2/3 flex flex-col pl-16 mt-12">
          <div className="flex flex-row space-x-2 items-center">
            <Image src={logo} alt="company logo" width={40} height={40} />
            <p className="text-2xl font-semibold">CarePulse</p>
          </div>
          {/* welcome */}
          <h2 className="text-4xl font-semibold mt-8 md:mt-16">Welcome</h2>
        </div>
          <div className="hidden md:block md:w-1/3 -mr-4">
            <Image
              src={capsule}
              alt="capsule-image"
              width={720}
              height={320}
              className="w-full"
            />
          </div>
      </div>
    </div>
  );
};

export default Register;
