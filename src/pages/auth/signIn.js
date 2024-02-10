import React from "react";
import css from "../../module/ui.module.css";

const SignIn = () => {
  return (
    <main
      className={`${css.auth} flex flex-col lg:flex-row w-full h-auto lg:h-screen items-center justify-center p-8 lg:p-0`}
    >
      <div className="bg-black/5 flex flex-col w-full lg:w-[20%] h-auto lg:h-[600px] p-0 lg:p-8 rounded-none lg:rounded-l-lg">
        <h1 className="text-black font-bold text-lg tracking-tight leading-relaxed mt-0">
          Reactive: Revolutionizing Social Networking
        </h1>
        <h2 className="text-black/80 font-medium text-sm tracking-tight leading-relaxed mt-4">
          In a world where connectivity is paramount, Reactive stands out as a
          revolutionary platform that combines cutting-edge technology with
          intuitive design to create a vibrant and engaging social ecosystem.
        </h2>
      </div>
      <div className="bg-white flex flex-col w-full lg:w-[20%] h-auto lg:h-[600px] p-0 lg:p-8 rounded-none lg:rounded-r-lg">
        Hi
      </div>
    </main>
  );
};

export default SignIn;
