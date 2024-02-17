import React, { useState } from "react";

const {
  default: ChevronDown,
} = require("../../shared/icons/chevron-down-black.svg");

const MessageWidget = () => {
  const [expandOnlineUsers, setExpandOnlineUsers] = useState(true);
  const [expandRecentChats, setExpandRecentChats] = useState(true);

  const handleExpandOnlineUsers = () => {
    setExpandOnlineUsers(!expandOnlineUsers);
  };

  const handleExpandRecentChats = () => {
    setExpandRecentChats(!expandRecentChats);
  };

  return (
    <div className="bg-slate-50 flex flex-col w-full lg:w-[30%] h-auto lg:h-full gap-0 p-0 border-r border-r-black/10">
      <div className="bg-transparent flex flex-col w-full h-auto gap-4 px-4 pt-4 rounded-lg">
        <div className="flex flex-row gap-2 items-center justify-start w-full h-auto">
          <p className="text-black font-bold text-base text-start tracking-tight leading-relaxed mt-0">
            Chats
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center justify-between w-full h-auto">
          <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
            Online Users
          </p>
          <button
            onClick={handleExpandOnlineUsers}
            className="bg-white flex w-auto h-auto p-2 rounded-lg ring-1 ring-black/10"
          >
            <img
              className={`transition-all ${
                expandOnlineUsers ? "rotate-180" : "rotate-0"
              }`}
              src={ChevronDown}
              width="14"
              height="14"
              alt="ChevronDown"
            />
          </button>
        </div>
        {expandOnlineUsers && (
          <div className="flex flex-col w-full h-auto gap-2">
            <div className="bg-black/5 flex flex-col w-full h-auto gap-0 rounded-lg p-4">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Testing
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Testing
              </p>
            </div>
            <div className="bg-black/5 flex flex-col w-full h-auto gap-0 rounded-lg p-4">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Testing
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Testing
              </p>
            </div>
            <div className="bg-black/5 flex flex-col w-full h-auto gap-0 rounded-lg p-4">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Testing
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Testing
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="bg-transparent flex flex-col w-full h-auto gap-4 px-4 pt-4 rounded-lg">
        <div className="flex flex-row gap-2 items-center justify-between w-full h-auto">
          <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
            Recent Chats
          </p>
          <button
            onClick={handleExpandRecentChats}
            className="bg-white flex w-auto h-auto p-2 rounded-lg ring-1 ring-black/10"
          >
            <img
              className={`transition-all ${
                expandRecentChats ? "rotate-180" : "rotate-0"
              }`}
              src={ChevronDown}
              width="14"
              height="14"
              alt="ChevronDown"
            />
          </button>
        </div>
        {expandRecentChats && (
          <div className="flex flex-col w-full h-auto gap-2">
            <div className="bg-black/5 flex flex-col w-full h-auto gap-0 rounded-lg p-4">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Testing
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Testing
              </p>
            </div>
            <div className="bg-black/5 flex flex-col w-full h-auto gap-0 rounded-lg p-4">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Testing
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Testing
              </p>
            </div>
            <div className="bg-black/5 flex flex-col w-full h-auto gap-0 rounded-lg p-4">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Testing
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Testing
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageWidget;
