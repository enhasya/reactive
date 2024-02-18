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
    <div className="bg-transparent flex flex-col w-full lg:w-[30%] h-auto lg:h-full gap-0 p-4 border-y border-r border-y-black/10 border-r-black/10">
      <p className="text-black font-bold text-base text-start tracking-tight leading-relaxed mt-0">
        Chats
      </p>
      <div className="flex flex-col w-full h-auto gap-2 mt-4">
        <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
          Your Profile
        </p>
        <div className="bg-black/5 flex flex-col w-full h-auto p-4 rounded-lg">
          <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
            Ras M.
          </p>
          <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
            Available
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full h-auto gap-2 mt-4">
        <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
          Recent Chats
        </p>
        <div className="bg-black/5 flex flex-col w-full h-auto p-4 rounded-lg">
          <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
            Ras M.
          </p>
          <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
            Available
          </p>
        </div>
        <div className="bg-black/5 flex flex-col w-full h-auto p-4 rounded-lg">
          <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
            Ras M.
          </p>
          <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
            Available
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full h-auto gap-2 mt-4">
        <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
          Groups
        </p>
        <div className="bg-black/5 flex flex-col w-full h-auto p-4 rounded-lg">
          <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
            Reactive Testing
          </p>
          <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
            CBT of Reactive
          </p>
        </div>
        <div className="bg-black/5 flex flex-col w-full h-auto p-4 rounded-lg">
          <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
            Deployment Testing
          </p>
          <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
            Our Private Group for Deployment Testing
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full h-auto gap-2 mt-4">
        <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
          Contacts
        </p>
        <div className="bg-black/5 flex flex-col w-full h-auto p-4 rounded-lg">
          <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
            Person 1
          </p>
          <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
            Available
          </p>
        </div>
        <div className="bg-black/5 flex flex-col w-full h-auto p-4 rounded-lg">
          <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
            Person 2
          </p>
          <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
            Busy
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageWidget;
