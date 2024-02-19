import React, { useState } from "react";

import ProfilePicture from "../../shared/assets/424553395_1449727305637474_636083031125237822_n.jpg";

const { default: Home } = require("../../shared/icons/home-04-white.svg");
const {
  default: Conversations,
} = require("../../shared/icons/message-chat-01-white.svg");
const {
  default: Notifications,
} = require("../../shared/icons/notification-box-white.svg");
const {
  default: Profile,
} = require("../../shared/icons/user-profile-circle-white.svg");
const { default: Settings } = require("../../shared/icons/gear-white.svg");

const Navbar = () => {
  const [onClickExpandSection, setOnClickExpandSection] = useState({
    home: false,
    conversations: false,
    notifications: false,
    profile: false,
    settings: false,
  });

  const [onHoverExpandSection, setOnHoverExpandSection] = useState({
    home: false,
    conversations: false,
    notifications: false,
    profile: false,
    settings: false,
  });

  const handleOnClick = (section) => {
    setOnClickExpandSection({
      ...onClickExpandSection,
      [section]: !onClickExpandSection[section],
    });
  };

  const handleOnHover = (section) => {
    setOnHoverExpandSection({
      ...onHoverExpandSection,
      [section]: !onHoverExpandSection[section],
    });
  };

  return (
    <nav className="bg-slate-600 flex flex-col gap-2 items-center justify-between w-full lg:w-auto h-auto rounded-none lg:rounded-l-lg p-8 lg:p-4">
      <div className="flex flex-col gap-2 items-start justify-center lg:justify-start w-full">
        <button className="bg-transparent transition-all hover:bg-black/10 flex lg:hidden flex-row gap-2 items-center w-full lg:w-auto rounded-lg p-2">
          <p className="text-white font-bold text-xs text-center tracking-tight leading-relaxed mt-0">
            REACTIVE
          </p>
        </button>
        <div className="relative">
          <a
            href="/en-US/app"
            onMouseEnter={() => handleOnHover("home")}
            onMouseLeave={() => handleOnHover("home")}
            className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-auto rounded-lg p-2 lg:p-4"
          >
            {" "}
            <img
              className="flex lg:hidden"
              src={Home}
              width="14"
              height="14"
              alt="Home"
            />
            <img
              className="hidden lg:flex"
              src={Home}
              width="20"
              height="20"
              alt="Home"
            />
            <p className="flex lg:hidden text-white font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
              Home
            </p>
          </a>
          {onHoverExpandSection.home && (
            <div className="bg-slate-600 fixed z-10 top-[48px] left-[120px] hidden lg:flex flex-col gap-0 items-start w-[240px] shadow-2xl shadow-black/10 rounded-lg p-4">
              <p className="text-white font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Home
              </p>
              <p className="text-white/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Access the dashboard of the app
              </p>
            </div>
          )}
        </div>
        <div className="relative">
          <a
            href="/en-US/conversations"
            onMouseEnter={() => handleOnHover("conversations")}
            onMouseLeave={() => handleOnHover("conversations")}
            className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-auto rounded-lg p-2 lg:p-4"
          >
            <img
              className="flex lg:hidden"
              src={Conversations}
              width="14"
              height="14"
              alt="Conversations"
            />
            <img
              className="hidden lg:flex"
              src={Conversations}
              width="20"
              height="20"
              alt="Conversations"
            />
            <p className="flex lg:hidden text-white font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
              Conversations
            </p>
          </a>
          {onHoverExpandSection.conversations && (
            <div className="bg-slate-600 fixed z-10 top-[106px] left-[120px] hidden lg:flex flex-col gap-0 items-start w-[240px] shadow-2xl shadow-black/10 rounded-lg p-4">
              <p className="text-white font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Conversations
              </p>
              <p className="text-white/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Start interact with other users
              </p>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onMouseEnter={() => handleOnHover("notifications")}
            onMouseLeave={() => handleOnHover("notifications")}
            className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-auto rounded-lg p-2 lg:p-4"
          >
            <img
              className="flex lg:hidden"
              src={Notifications}
              width="14"
              height="14"
              alt="Notifications"
            />
            <img
              className="hidden lg:flex"
              src={Notifications}
              width="20"
              height="20"
              alt="Notifications"
            />
            <p className="flex lg:hidden text-white font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
              Notifications
            </p>
          </button>
          {onHoverExpandSection.notifications && (
            <div className="bg-slate-600 fixed z-10 top-[164px] left-[120px] hidden lg:flex flex-col gap-0 items-start w-[240px] shadow-2xl shadow-black/10 rounded-lg p-4">
              <p className="text-white font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Notifications
              </p>
              <p className="text-white/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Friend requests, likes, and more can be found here
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start justify-center lg:justify-start w-full">
        <div className="relative">
          <button
            onClick={() => handleOnClick("profile")}
            onMouseEnter={() => handleOnHover("profile")}
            onMouseLeave={() => handleOnHover("profile")}
            className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-auto rounded-lg p-2 lg:p-4"
          >
            <img
              className="flex lg:hidden"
              src={Profile}
              width="14"
              height="14"
              alt="Profile"
            />
            <img
              className="hidden lg:flex"
              src={Profile}
              width="20"
              height="20"
              alt="Profile"
            />
            <p className="flex lg:hidden text-white font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
              Ras M.
            </p>
          </button>
          {onHoverExpandSection.profile && (
            <div className="bg-slate-600 fixed z-10 bottom-[106px] left-[120px] hidden lg:flex flex-col gap-0 items-start w-[240px] shadow-2xl shadow-black/10 rounded-lg p-4">
              <p className="text-white font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Profile
              </p>
              <p className="text-white/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Your space to manage your profile
              </p>
            </div>
          )}
          {onClickExpandSection.profile && (
            <div className="bg-slate-600 fixed z-10 bottom-[106px] left-[120px] hidden lg:flex flex-col gap-0 items-start w-[320px] shadow-2xl shadow-black/10 rounded-lg p-4">
              <div className="flex flex-col w-full h-auto gap-0 mt-0">
                <p className="text-white font-bold text-xs text-start tracking-tight leading-relaxed mt-0 mb-2">
                  Your Profile
                </p>
                <div className="bg-transparent flex flex-row w-full h-auto items-center gap-4 p-2 rounded-lg mb-2">
                  <img
                    className="aspect-square rounded-full"
                    src={ProfilePicture}
                    width="48"
                    height="48"
                    alt="ProfilePicture"
                  />
                  <div className="flex flex-col w-full h-auto gap-0 p-0 mt-0">
                    <p className="text-white font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                      Ras M.
                    </p>
                    <p className="text-white/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                      Available
                    </p>
                  </div>
                </div>
                <div className="bg-transparent transition-all hover:bg-white/10 flex flex-row w-full h-auto items-center gap-4 p-2 rounded-lg">
                  <div className="flex flex-col w-full h-auto gap-0 p-0 mt-0">
                    <p className="text-white font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                      Name
                    </p>
                    <p className="text-white/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                      Ras M.
                    </p>
                  </div>
                </div>
                <div className="bg-transparent transition-all hover:bg-white/10 flex flex-row w-full h-auto items-center gap-4 p-2 rounded-lg">
                  <div className="flex flex-col w-full h-auto gap-0 p-0 mt-0">
                    <p className="text-white font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                      Bio
                    </p>
                    <p className="text-white/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                      Available
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full h-auto gap-0 mt-4">
                <p className="text-white font-bold text-xs text-start tracking-tight leading-relaxed mt-0 mb-2">
                  Security
                </p>
                <div className="bg-transparent transition-all hover:bg-white/10 flex flex-row w-full h-auto items-center gap-4 p-2 rounded-lg">
                  <div className="flex flex-col w-full h-auto gap-0 p-0 mt-0">
                    <p className="text-white font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                      Email
                    </p>
                    <p className="text-white/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                      enhasya@outlook.co.id
                    </p>
                  </div>
                </div>
                <div className="bg-transparent transition-all hover:bg-white/10 flex flex-row w-full h-auto items-center gap-4 p-2 rounded-lg">
                  <div className="flex flex-col w-full h-auto gap-0 p-0 mt-0">
                    <p className="text-white font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                      Password
                    </p>
                    <p className="text-white/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                      ******
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full h-auto gap-0 mt-4">
                <p className="text-white font-bold text-xs text-start tracking-tight leading-relaxed mt-0 mb-2">
                  Accessibility
                </p>
                <div className="bg-transparent transition-all hover:bg-white/10 flex flex-row w-full h-auto items-center gap-4 p-2 rounded-lg">
                  <div className="flex flex-col w-full h-auto gap-0 p-0 mt-0">
                    <p className="text-white font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                      Language
                    </p>
                    <p className="text-white/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                      en-US
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onMouseEnter={() => handleOnHover("settings")}
            onMouseLeave={() => handleOnHover("settings")}
            className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-auto rounded-lg p-2 lg:p-4"
          >
            <img
              className="flex lg:hidden"
              src={Settings}
              width="14"
              height="14"
              alt="Settings"
            />
            <img
              className="hidden lg:flex"
              src={Settings}
              width="20"
              height="20"
              alt="Settings"
            />
            <p className="flex lg:hidden text-white font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
              Settings
            </p>
          </button>
          {onHoverExpandSection.settings && (
            <div className="bg-slate-600 fixed z-10 bottom-[48px] left-[120px] hidden lg:flex flex-col gap-0 items-start w-[240px] shadow-2xl shadow-black/10 rounded-lg p-4">
              <p className="text-white font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Settings
              </p>
              <p className="text-white/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Access the settings of your account, including edit your
                profile, security settings, and sign out
              </p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
