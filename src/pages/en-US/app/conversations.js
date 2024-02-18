import React from "react";

const { default: LayoutApp } = require("../../../layouts/app");

const Conversations = () => {
  return (
    <LayoutApp>
      <div className="bg-transparent flex flex-col w-full h-auto lg:h-full gap-0 p-4 border-y border-r border-y-black/10 border-r-black/10 rounded-none lg:rounded-r-lg overflow-y-auto">
        <p className="text-black font-bold text-base text-start tracking-tight leading-relaxed mt-0">
          [parameter:roomName]
        </p>
        <div className="flex w-full items-center justify-start">
          <div className="flex flex-col w-[320px] h-auto gap-2 mt-4">
            <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
              Cressida
            </p>
            <div className="bg-black/5 transition-all hover:bg-black/10 flex flex-col w-full h-auto px-8 py-4 rounded-lg">
              <p className="text-black/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Test masuk?
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-end">
          <div className="flex flex-col w-[320px] h-auto gap-2 mt-4">
            <p className="text-black font-bold text-xs text-end tracking-tight leading-relaxed mt-0">
              Ras M.
            </p>
            <div className="bg-black/5 transition-all hover:bg-black/10 flex flex-col w-full h-auto px-8 py-4 rounded-lg">
              <p className="text-black/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Mashok
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-start">
          <div className="flex flex-col w-[320px] h-auto gap-2 mt-4">
            <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
              Cressida
            </p>
            <div className="bg-black/5 transition-all hover:bg-black/10 flex flex-col w-full h-auto px-8 py-4 rounded-lg">
              <p className="text-black/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Naise sajkd sajkdn jkasnd jkasnd ajsk ndasjk dnajks dnajks
                dnajsk ndjk asnd jkasn djka sndjksn djkasndk
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutApp>
  );
};

export default Conversations;
