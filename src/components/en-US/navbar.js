import React, { useState } from "react";

const { default: Search } = require("../../shared/icons/search-01-white.svg");
const { default: Explore } = require("../../shared/icons/globe-02-white.svg");
const {
  default: Notifications,
} = require("../../shared/icons/notification-box-white.svg");
const {
  default: Messages,
} = require("../../shared/icons/message-chat-01-white.svg");
const {
  default: Profile,
} = require("../../shared/icons/user-profile-circle-white.svg");
const {
  default: Account,
} = require("../../shared/icons/user-profile-03-white.svg");
const { default: Settings } = require("../../shared/icons/gear-white.svg");
const {
  default: ChevronDown,
} = require("../../shared/icons/chevron-down-white.svg");

const Navbar = () => {
  const [expandSettings, setExpandSettings] = useState(false);

  const handleExpandSettings = () => {
    setExpandSettings(!expandSettings);
  };

  return (
    <nav className="bg-slate-600 flex flex-col lg:flex-row gap-2 items-center justify-between w-full h-auto rounded-none lg:rounded-t-lg p-8 lg:p-4">
      <div className="bg-black/5 transition-all flex lg:hidden flex-row gap-4 w-full lg:w-[20%] items-center justify-center p-4 rounded-lg ring-1 ring-white/10 hover:ring-white/20 mt-0">
        <img src={Search} width="14" height="14" alt="Search" />
        <input
          className="bg-transparent outline-none w-full text-white/80 font-medium text-xs tracking-tight"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-2 items-start lg:items-center justify-center lg:justify-start w-full lg:w-[40%]">
        <button className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-full lg:w-auto rounded-lg p-2">
          <p className="text-white font-bold text-xs text-center tracking-tight leading-relaxed mt-0">
            REACTIVE
          </p>
        </button>
        <button className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-full lg:w-auto rounded-lg p-2">
          <img src={Explore} width="14" height="14" alt="Explore" />
          <p className="text-white font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
            Explore
          </p>
        </button>
        <button className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-full lg:w-auto rounded-lg p-2">
          <img src={Notifications} width="14" height="14" alt="Notifications" />
          <p className="text-white font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
            Notifications
          </p>
        </button>
        <button className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-full lg:w-auto rounded-lg p-2">
          <img src={Messages} width="14" height="14" alt="Messages" />
          <p className="text-white font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
            Messages
          </p>
        </button>
        <button className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-full lg:w-auto rounded-lg p-2">
          <img src={Profile} width="14" height="14" alt="Profile" />
          <p className="text-white font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
            Profile
          </p>
        </button>
      </div>
      <div className="bg-black/5 transition-all hidden lg:flex flex-row gap-4 w-full lg:w-[20%] items-center justify-center p-2 rounded-lg ring-1 ring-white/10 hover:ring-white/20 mt-0">
        <img src={Search} width="14" height="14" alt="Search" />
        <input
          className="bg-transparent outline-none w-full text-white/80 font-medium text-xs tracking-tight"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-2 items-start lg:items-center justify-center lg:justify-end w-full lg:w-[40%]">
        <div className="flex flex-row gap-2 items-center justify-between lg:justify-end w-full lg:w-auto">
          <button className="bg-transparent lg:bg-black/5 transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-auto rounded-lg p-2">
            <img src={Account} width="14" height="14" alt="Account" />
            <p className="text-white font-bold text-xs text-center tracking-tight leading-relaxed mt-0">
              Ras M.
            </p>
            <img
              className="hidden lg:flex"
              src={ChevronDown}
              width="14"
              height="14"
              alt="ChevronDown"
            />
          </button>
          <div className="relative">
            <button
              onClick={handleExpandSettings}
              className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-auto rounded-lg p-2"
            >
              <img src={Settings} width="14" height="14" alt="Settings" />
              <p className="text-white font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
                Settings
              </p>
              <img
                className={`hidden lg:flex transition-all ${
                  expandSettings ? "rotate-180" : "rotate-0"
                }`}
                src={ChevronDown}
                width="14"
                height="14"
                alt="ChevronDown"
              />
            </button>
            {expandSettings && (
              <div className="bg-white fixed top-24 right-12 flex flex-col gap-0 items-start w-[320px] ring-1 ring-black/10 rounded-lg p-0">
                <div className="bg-transparent flex flex-col w-full h-auto gap-4 px-4 pt-4 rounded-lg">
                  <div className="flex flex-row gap-2 items-center justify-between w-full h-auto">
                    <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                      Account
                    </p>
                  </div>
                  <div className="flex flex-col w-full h-auto gap-2">
                    <div className="bg-black/5 flex flex-col w-full h-auto gap-0 rounded-lg p-4">
                      <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                        Edit Profile
                      </p>
                    </div>
                    <div className="bg-black/5 flex flex-col w-full h-auto gap-0 rounded-lg p-4">
                      <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                        Security Settings
                      </p>
                    </div>
                    <div className="bg-black/5 flex flex-col w-full h-auto gap-0 rounded-lg p-4">
                      <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                        Sign Out
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-transparent flex flex-col w-full h-auto gap-4 px-4 py-4 rounded-lg">
                  <div className="flex flex-row gap-2 items-center justify-between w-full h-auto">
                    <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                      Help Center
                    </p>
                  </div>
                  <div className="flex flex-col w-full h-auto gap-2">
                    <div className="bg-black/5 flex flex-col w-full h-auto gap-0 rounded-lg p-4">
                      <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                        FAQ
                      </p>
                    </div>
                    <div className="bg-black/5 flex flex-col w-full h-auto gap-0 rounded-lg p-4">
                      <p className="text-black font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                        Contact Us
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
