import React from "react";

const MessageWidget = () => {
  return (
    <main className="flex flex-col gap-2 items-start justify-center w-full h-auto p-0">
      <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
        Active Chats
      </p>
      <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
        See the latest messages from your friends
      </p>
    </main>
  );
};

export default MessageWidget;
