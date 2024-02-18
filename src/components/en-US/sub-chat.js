import React, { useState } from "react";

import ProfilePicture from "../../shared/assets/424553395_1449727305637474_636083031125237822_n.jpg";

const SubChat = () => {
  const [expandRecentChats, setExpandRecentChats] = useState(true);
  const [expandGroups, setExpandGroups] = useState(true);
  const [expandContacts, setExpandContacts] = useState(true);

  const handleExpandRecentChats = () => {
    setExpandRecentChats(!expandRecentChats);
  };

  const handleExpandGroups = () => {
    setExpandGroups(!expandGroups);
  };

  const handleExpandContacts = () => {
    setExpandContacts(!expandContacts);
  };

  return (
    <div className="flex flex-col w-full lg:w-[30%] h-auto lg:h-full gap-0 p-4 border-y border-r border-y-black/10 border-r-black/10 overflow-y-auto">
      <p className="text-black font-bold text-base text-start tracking-tight leading-relaxed mt-0">
        Chats
      </p>
      <div className="flex flex-col w-full h-auto gap-0 mt-4">
        <div className="flex flex-row items-center justify-between w-full h-auto mb-2">
          <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
            Your Profile
          </p>
        </div>
        <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-4 rounded-lg">
          <img
            className="aspect-square rounded-full"
            src={ProfilePicture}
            width="48"
            height="48"
            alt="ProfilePicture"
          />
          <div className="flex flex-col w-full h-auto gap-0 p-0 mt-0">
            <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
              Ras M.
            </p>
            <p className="text-black/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
              Available
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full h-auto mt-2">
          <button className="flex flex-row gap-2 items-center justify-center hover:underline">
            <p className="text-slate-600 font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
              Edit Profile
            </p>
          </button>
          <button className="flex flex-row gap-2 items-center justify-center hover:underline">
            <p className="text-slate-600 font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
              Add Friends
            </p>
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full h-auto gap-0 mt-4">
        <div className="flex flex-row items-center justify-between w-full h-auto mb-2">
          <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
            Recent Chats
          </p>
          <button
            onClick={handleExpandRecentChats}
            className="flex flex-row gap-2 items-center justify-center hover:underline"
          >
            <p className="text-slate-600 font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
              {expandRecentChats ? "Collapse" : "Expand"}
            </p>
          </button>
        </div>
        {expandRecentChats && (
          <React.Fragment>
            <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-4 rounded-lg">
              <img
                className="aspect-square rounded-full"
                src={ProfilePicture}
                width="48"
                height="48"
                alt="ProfilePicture"
              />
              <div className="flex flex-col w-full h-auto gap-0 p-0 mt-0">
                <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                  Cressida
                </p>
                <p className="text-black/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                  Available
                </p>
              </div>
            </div>
            <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-4 rounded-lg">
              <img
                className="aspect-square rounded-full"
                src={ProfilePicture}
                width="48"
                height="48"
                alt="ProfilePicture"
              />
              <div className="flex flex-col w-full h-auto gap-0 p-0 mt-0">
                <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                  Miranda
                </p>
                <p className="text-black/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                  Available
                </p>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
      <div className="flex flex-col w-full h-auto gap-0 mt-4">
        <div className="flex flex-row items-center justify-between w-full h-auto mb-2">
          <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
            Groups
          </p>
          <button
            onClick={handleExpandGroups}
            className="flex flex-row gap-2 items-center justify-center hover:underline"
          >
            <p className="text-slate-600 font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
              {expandGroups ? "Collapse" : "Expand"}
            </p>
          </button>
        </div>
        {expandGroups && (
          <React.Fragment>
            <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-4 rounded-lg">
              <img
                className="aspect-square rounded-full"
                src={ProfilePicture}
                width="48"
                height="48"
                alt="ProfilePicture"
              />
              <div className="flex flex-col w-full h-auto gap-0 p-0 mt-0">
                <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                  Reactive Testing
                </p>
                <p className="text-black/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                  CBT of Reactive Group
                </p>
              </div>
            </div>
            <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-4 rounded-lg">
              <img
                className="aspect-square rounded-full"
                src={ProfilePicture}
                width="48"
                height="48"
                alt="ProfilePicture"
              />
              <div className="flex flex-col w-full h-auto gap-0 p-0 mt-0">
                <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                  Deployment Testing
                </p>
                <p className="text-black/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                  Our Private Group for Deployment Testing
                </p>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
      <div className="flex flex-col w-full h-auto gap-0 mt-4">
        <div className="flex flex-row items-center justify-between w-full h-auto mb-2">
          <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
            Contacts
          </p>
          <button
            onClick={handleExpandContacts}
            className="flex flex-row gap-2 items-center justify-center hover:underline"
          >
            <p className="text-slate-600 font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
              {expandContacts ? "Collapse" : "Expand"}
            </p>
          </button>
        </div>
        {expandContacts && (
          <React.Fragment>
            <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-4 rounded-lg">
              <img
                className="aspect-square rounded-full"
                src={ProfilePicture}
                width="48"
                height="48"
                alt="ProfilePicture"
              />
              <div className="flex flex-col w-full h-auto gap-0 p-0 mt-0">
                <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                  Bianca
                </p>
                <p className="text-black/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                  Available
                </p>
              </div>
            </div>
            <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-4 rounded-lg">
              <img
                className="aspect-square rounded-full"
                src={ProfilePicture}
                width="48"
                height="48"
                alt="ProfilePicture"
              />
              <div className="flex flex-col w-full h-auto gap-0 p-0 mt-0">
                <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                  Cressida
                </p>
                <p className="text-black/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                  Available
                </p>
              </div>
            </div>
            <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-4 rounded-lg">
              <img
                className="aspect-square rounded-full"
                src={ProfilePicture}
                width="48"
                height="48"
                alt="ProfilePicture"
              />
              <div className="flex flex-col w-full h-auto gap-0 p-0 mt-0">
                <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                  Desdemona
                </p>
                <p className="text-black/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                  Busy
                </p>
              </div>
            </div>
            <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-4 rounded-lg">
              <img
                className="aspect-square rounded-full"
                src={ProfilePicture}
                width="48"
                height="48"
                alt="ProfilePicture"
              />
              <div className="flex flex-col w-full h-auto gap-0 p-0 mt-0">
                <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                  Margaret
                </p>
                <p className="text-black/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                  Not Available
                </p>
              </div>
            </div>
            <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-4 rounded-lg">
              <img
                className="aspect-square rounded-full"
                src={ProfilePicture}
                width="48"
                height="48"
                alt="ProfilePicture"
              />
              <div className="flex flex-col w-full h-auto gap-0 p-0 mt-0">
                <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                  Miranda
                </p>
                <p className="text-black/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                  Busy
                </p>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default SubChat;
