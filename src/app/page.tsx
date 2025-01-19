import Image from "next/image";
import logo from "../assets/logo.png";
import welcome from "../assets/login-illustration.png";
import InputField from "@/components/InputField/InputField";

export default function Home() {
  return (
    <main className="rounded-tr-xl">
      {/* logo */}
      <div className="flex flex-row space-x-2 text-white items-center pl-16 mt-12">
        <Image alt="logo" src={logo} width={40} height={40} />
        <h1 className="text-2xl font-semibold">CarePulse</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 pl-16 pt-12 space-y-6">
          <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-white"> Hi there, ...</h2>
          <h3 className="text-slate-300">Get Started with Appointments</h3>
          </div>
          <form className="flex flex-col pr-16 space-y-2">
            <InputField label={'Full Name'} labelClass={'text-lg'} className={'bg-slate-800'} name={'name'} type={'text'} placeholder={'e.g. Enter your full name'}/>
            <InputField label={'Email Address'} labelClass={'text-lg'} className={'bg-slate-800'} name={'email'} type={'email'} placeholder={'e.g. johndoe@gmail.com'}/>
            <InputField label={'Phone Number'} labelClass={'text-lg'} className={'bg-slate-800'} name={'phone'} type={'text'} placeholder={'e.g. 012xxxxxxxx'}/>
          </form>
        </div>
        {/* image */}
        <div className="h-[750px] w-full md:w-1/2 -mt-24 hidden md:block">
          <Image
            src={welcome}
            alt="welcome-illustration"
            className="object-cover w-full h-full rounded-tl-3xl rounded-bl-3xl"
            width={720}
            height={1020}
          />
        </div>
      </div>
    </main>
  );
}
