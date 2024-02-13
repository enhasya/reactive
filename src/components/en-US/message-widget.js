import React from "react";

const {
  default: ChevronDown,
} = require("../../shared/icons/chevron-down-black.svg");

const MessageWidget = () => {
  const [expandChats, setExpandChats] = React.useState(false);
  const [expandContacts, setExpandContacts] = React.useState(false);

  const handleExpandChats = () => {
    setExpandChats(!expandChats);
  };
  const handleExpandContacts = () => {
    setExpandContacts(!expandContacts);
  };

  return (
    <main className="flex flex-col gap-4 items-start justify-start w-full h-auto p-0 overflow-y-auto">
      <div className="flex flex-col items-start justify-between gap-0 w-full h-auto overflow-y-auto">
        <div className="flex flex-row items-center justify-between gap-4 w-full h-auto overflow-y-auto">
          <div className="flex flex-col items-start justify-start gap-0 w-full h-auto overflow-y-auto">
            <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
              Active Chats
            </p>
            <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
              See the latest messages from your friends
            </p>
          </div>
          <button
            onClick={handleExpandChats}
            className="bg-black/5 transition-all hover:bg-black/10 flex p-2 rounded-lg"
          >
            <img
              className={`transition-all ${
                expandChats ? "rotate-180" : "rotate-0"
              }`}
              src={ChevronDown}
              width="20"
              height="20"
              alt="ChevronDown"
            />
          </button>
        </div>
        {expandChats && (
          <div className="bg-black/5 flex flex-col items-start justify-start w-full h-auto lg:h-[240px] gap-4 rounded-lg p-4 mt-4 overflow-y-auto">
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>

            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col items-start justify-start w-full h-auto overflow-y-auto">
        <div className="flex flex-row items-center justify-between gap-4 w-full h-auto overflow-y-auto">
          <div className="flex flex-col items-start justify-start gap-0 w-full h-auto overflow-y-auto">
            <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
              Contacts
            </p>
            <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
              You've 6 contacts active right now
            </p>
          </div>
          <button
            onClick={handleExpandContacts}
            className="bg-black/5 transition-all hover:bg-black/10 flex p-2 rounded-lg"
          >
            <img
              className={`transition-all ${
                expandContacts ? "rotate-180" : "rotate-0"
              }`}
              src={ChevronDown}
              width="20"
              height="20"
              alt="ChevronDown"
            />
          </button>
        </div>
        {expandContacts && (
          <div className="bg-black/5 flex flex-col items-start justify-start w-full h-auto lg:h-[240px] gap-4 rounded-lg p-4 mt-4 overflow-y-auto">
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>

            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
            <button className="bg-black/5 ring-1 ring-black/10 hover:ring-black/20 flex flex-col items-start justify-center w-full h-auto p-4 rounded-lg">
              <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Person Name
              </p>
              <p className="text-black font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Containing message from or to the person
              </p>
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default MessageWidget;
