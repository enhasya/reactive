import React from "react";

const { default: LayoutApp } = require("../../../layouts/app");

const {
  default: StartConversation,
} = require("../../../shared/icons/smiley-happy-plus-black.svg");
const {
  default: Conversations,
} = require("../../../shared/icons/message-chat-01-black.svg");

const Dashboard = () => {
  return (
    <LayoutApp>
      <div className="bg-transparent flex flex-col w-full h-auto lg:h-full items-center justify-center gap-0 p-4 overflow-y-auto">
        <div className="flex flex-col w-full items-center justify-center mt-8 lg:mt-0">
          <div className="flex flex-row gap-4 items-center justify-center mt-0">
            <img
            className="animate-none lg:animate-pulse"
              src={StartConversation}
              width="64"
              height="64"
              alt="StartConversation"
            />
            <img
            className="animate-none lg:animate-pulse"
              src={Conversations}
              width="64"
              height="64"
              alt="Conversations"
            />
          </div>
          <p className="text-black font-medium text-xs text-center tracking-tight leading-relaxed mt-8">
            To start a conversation please select a user from the right sidebar
          </p>
        </div>
      </div>
    </LayoutApp>
  );
};

export default Dashboard;
