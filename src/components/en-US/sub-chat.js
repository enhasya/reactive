import React, { useState } from "react";

import ProfilePicture from "../../shared/assets/424553395_1449727305637474_636083031125237822_n.jpg";

const {
  default: AddFriend,
} = require("../../shared/icons/user-profile-add-01-black.svg");
const {
  default: CloseAddFriend,
} = require("../../shared/icons/x-02-black.svg");

const SubChat = () => {
  const [expandSection, setExpandSection] = useState({
    addFriends: false,
    recentChats: true,
    groups: true,
    contacts: true,
  });

  const handleExpandSection = (section) => {
    setExpandSection({
      ...expandSection,
      [section]: !expandSection[section],
    });
  };

  return (
    <div className="bg-transparent flex flex-col w-full lg:w-[30%] h-auto lg:h-full gap-0 p-4 border-l border-l-black/10 overflow-y-auto">
      <p className="text-black font-bold text-base text-start tracking-tight leading-relaxed mt-0">
        Chats
      </p>
      <div className="flex flex-col w-full h-auto gap-0 mt-4">
        <div className="flex flex-row items-center justify-between w-full h-auto mb-2">
          <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
            Your Profile
          </p>
        </div>
        <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-2 rounded-lg">
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
        <div className="flex flex-row items-center justify-between w-full h-auto mt-2 mb-2">
          <button className="flex flex-row gap-2 items-center justify-center hover:underline">
            <p className="text-slate-600 font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
              Edit Profile
            </p>
          </button>
          <button
            onClick={() => handleExpandSection("addFriends")}
            className="flex flex-row gap-2 items-center justify-center hover:underline"
          >
            <p className="text-slate-600 font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
              Add Friends
            </p>
          </button>
        </div>
      </div>
      {expandSection.addFriends && (
        <div className="bg-black/5 transition-all flex flex-row gap-4 w-full items-center p-4 rounded-lg ring-1 ring-black/10 hover:ring-black/20 mt-2 mb-2">
          <input
            className="bg-transparent outline-none w-full text-black font-medium text-xs tracking-tight"
            type="text"
            placeholder="Search friends by ID ..."
          />
          <img src={AddFriend} width="14" height="14" alt="AddFriend" />
          <img
            onClick={() => handleExpandSection("addFriends")}
            src={CloseAddFriend}
            width="14"
            height="14"
            alt="CloseAddFriend"
          />
        </div>
      )}
      <div className="flex flex-col w-full h-auto gap-0 mt-4">
        <div className="flex flex-row items-center justify-between w-full h-auto mb-2">
          <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
            Recent Chats
          </p>
          <button
            onClick={() => handleExpandSection("recentChats")}
            className="flex flex-row gap-2 items-center justify-center hover:underline"
          >
            <p className="text-slate-600 font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
              {expandSection.recentChats ? "Collapse" : "Expand"}
            </p>
          </button>
        </div>
        {expandSection.recentChats && (
          <React.Fragment>
            <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-2 rounded-lg">
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
            <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-2 rounded-lg">
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
            onClick={() => handleExpandSection("groups")}
            className="flex flex-row gap-2 items-center justify-center hover:underline"
          >
            <p className="text-slate-600 font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
              {expandSection.groups ? "Collapse" : "Expand"}
            </p>
          </button>
        </div>
        {expandSection.groups && (
          <React.Fragment>
            <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-2 rounded-lg">
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
            <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-2 rounded-lg">
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
            onClick={() => handleExpandSection("contacts")}
            className="flex flex-row gap-2 items-center justify-center hover:underline"
          >
            <p className="text-slate-600 font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
              {expandSection.contacts ? "Collapse" : "Expand"}
            </p>
          </button>
        </div>
        {expandSection.contacts && (
          <React.Fragment>
            <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-2 rounded-lg">
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
            <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-2 rounded-lg">
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
            <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-2 rounded-lg">
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
            <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-2 rounded-lg">
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
            <div className="bg-transparent transition-all hover:bg-black/10 flex flex-row w-full h-auto items-center gap-4 p-2 rounded-lg">
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
