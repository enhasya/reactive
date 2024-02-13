import React from "react";

const { default: Search } = require("../../shared/icons/search-01-black.svg");
const { default: Explore } = require("../../shared/icons/globe-02-black.svg");
const {
  default: Notifications,
} = require("../../shared/icons/notification-box-black.svg");
const {
  default: Messages,
} = require("../../shared/icons/message-chat-01-black.svg");
const {
  default: Profile,
} = require("../../shared/icons/user-profile-circle-black.svg");
const {
  default: Analytics,
} = require("../../shared/icons/line-chart-up-02-black.svg");
const {
  default: Account,
} = require("../../shared/icons/user-profile-03-black.svg");
const { default: Settings } = require("../../shared/icons/gear-black.svg");
const {
  default: ChevronDown,
} = require("../../shared/icons/chevron-down-black.svg");

const Navbar = () => {
  return (
    <nav className="bg-white flex flex-col lg:flex-row gap-2 items-center justify-between w-full h-auto p-8 lg:p-4">
      <div className="bg-black/5 transition-all flex lg:hidden flex-row gap-4 w-full lg:w-[20%] items-center justify-center p-2 rounded-lg ring-1 ring-black/10 hover:ring-black/20 mt-0">
        <img src={Search} width="14" height="14" alt="Search" />
        <input
          className="bg-transparent outline-none w-full text-black/80 font-medium text-xs tracking-tight"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-2 items-start lg:items-center justify-center lg:justify-start w-full lg:w-[40%]">
        <button className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-full lg:w-auto rounded-lg p-2">
          <p className="text-black font-bold text-xs text-center tracking-tight leading-relaxed mt-0">
            REACTIVE
          </p>
        </button>
        <button className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-full lg:w-auto rounded-lg p-2">
          <img src={Explore} width="14" height="14" alt="Explore" />
          <p className="text-black font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
            Explore
          </p>
        </button>
        <button className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-full lg:w-auto rounded-lg p-2">
          <img src={Notifications} width="14" height="14" alt="Notifications" />
          <p className="text-black font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
            Notifications
          </p>
        </button>
        <button className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-full lg:w-auto rounded-lg p-2">
          <img src={Messages} width="14" height="14" alt="Messages" />
          <p className="text-black font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
            Messages
          </p>
        </button>
        <button className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-full lg:w-auto rounded-lg p-2">
          <img src={Profile} width="14" height="14" alt="Profile" />
          <p className="text-black font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
            Profile
          </p>
        </button>
      </div>
      <div className="bg-black/5 transition-all hidden lg:flex flex-row gap-4 w-full lg:w-[20%] items-center justify-center p-2 rounded-lg ring-1 ring-black/10 hover:ring-black/20 mt-0">
        <img src={Search} width="14" height="14" alt="Search" />
        <input
          className="bg-transparent outline-none w-full text-black/80 font-medium text-xs tracking-tight"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-2 items-start lg:items-center justify-center lg:justify-end w-full lg:w-[40%]">
        <button className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-full lg:w-auto rounded-lg p-2">
          <img src={Analytics} width="14" height="14" alt="Analytics" />
          <p className="text-black font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
            Analytics
          </p>
          <img className="hidden lg:flex" src={ChevronDown} width="14" height="14" alt="ChevronDown" />
        </button>
        <div className="flex flex-row gap-2 items-center justify-between lg:justify-end w-full lg:w-auto">
          <button className="bg-transparent lg:bg-black/5 transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-auto rounded-lg p-2">
            <img src={Account} width="14" height="14" alt="Account" />
            <p className="text-black font-bold text-xs text-center tracking-tight leading-relaxed mt-0">
              Ras M.
            </p>
            <img className="hidden lg:flex" src={ChevronDown} width="14" height="14" alt="ChevronDown" />
          </button>
          <button className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-auto rounded-lg p-2">
            <img src={Settings} width="14" height="14" alt="Settings" />
            <p className="text-black font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
              Settings
            </p>
            <img className="hidden lg:flex" src={ChevronDown} width="14" height="14" alt="ChevronDown" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
