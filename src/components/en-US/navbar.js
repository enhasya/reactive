import React, { useState } from "react";

const { default: Home } = require("../../shared/icons/home-04-white.svg");
const {
  default: Notifications,
} = require("../../shared/icons/notification-box-white.svg");
const {
  default: Messages,
} = require("../../shared/icons/message-chat-01-white.svg");
const {
  default: Profile,
} = require("../../shared/icons/user-profile-circle-white.svg");
const { default: Settings } = require("../../shared/icons/gear-white.svg");

const Navbar = () => {
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverMessages, setHoverMessages] = useState(false);
  const [hoverNotifications, setHoverNotifications] = useState(false);
  const [hoverProfile, setHoverProfile] = useState(false);
  const [hoverSettings, setHoverSettings] = useState(false);

  const handleHoverHome = (boolean) => {
    setHoverHome(boolean);
  };
  const handleHoverMessages = (boolean) => {
    setHoverMessages(boolean);
  };
  const handleHoverNotifications = (boolean) => {
    setHoverNotifications(boolean);
  };
  const handleHoverProfile = (boolean) => {
    setHoverProfile(boolean);
  };
  const handleHoverSettings = (boolean) => {
    setHoverSettings(boolean);
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
          <button
            onMouseEnter={() => handleHoverHome(true)}
            onMouseLeave={() => handleHoverHome(false)}
            className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-auto rounded-lg p-2 lg:p-4"
          >
            <img src={Home} width="20" height="20" alt="Home" />
            <p className="flex lg:hidden text-white font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
              Home
            </p>
          </button>
          {hoverHome && (
            <div className="bg-slate-600 fixed z-10 top-[48px] left-[120px] flex flex-col gap-0 items-start w-[240px] shadow-2xl shadow-black/10 rounded-lg p-4">
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
          <button
            onMouseEnter={() => handleHoverMessages(true)}
            onMouseLeave={() => handleHoverMessages(false)}
            className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-auto rounded-lg p-2 lg:p-4"
          >
            <img src={Messages} width="20" height="20" alt="Messages" />
            <p className="flex lg:hidden text-white font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
              Messages
            </p>
          </button>
          {hoverMessages && (
            <div className="bg-slate-600 fixed z-10 top-[106px] left-[120px] flex flex-col gap-0 items-start w-[240px] shadow-2xl shadow-black/10 rounded-lg p-4">
              <p className="text-white font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Messages
              </p>
              <p className="text-white/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Start interact with other users
              </p>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onMouseEnter={() => handleHoverNotifications(true)}
            onMouseLeave={() => handleHoverNotifications(false)}
            className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-auto rounded-lg p-2 lg:p-4"
          >
            <img
              src={Notifications}
              width="20"
              height="20"
              alt="Notifications"
            />
            <p className="flex lg:hidden text-white font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
              Notifications
            </p>
          </button>
          {hoverNotifications && (
            <div className="bg-slate-600 fixed z-10 top-[164px] left-[120px] flex flex-col gap-0 items-start w-[240px] shadow-2xl shadow-black/10 rounded-lg p-4">
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
            onMouseEnter={() => handleHoverProfile(true)}
            onMouseLeave={() => handleHoverProfile(false)}
            className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-auto rounded-lg p-2 lg:p-4"
          >
            <img src={Profile} width="20" height="20" alt="Profile" />
            <p className="flex lg:hidden text-white font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
              Ras M.
            </p>
          </button>
          {hoverProfile && (
            <div className="bg-slate-600 fixed z-10 bottom-[106px] left-[120px] flex flex-col gap-0 items-start w-[240px] shadow-2xl shadow-black/10 rounded-lg p-4">
              <p className="text-white font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
                Profile
              </p>
              <p className="text-white/60 font-medium text-xs text-start tracking-tight leading-relaxed mt-0">
                Your space to manage your profile
              </p>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onMouseEnter={() => handleHoverSettings(true)}
            onMouseLeave={() => handleHoverSettings(false)}
            className="bg-transparent transition-all hover:bg-black/10 flex flex-row gap-2 items-center w-auto rounded-lg p-2 lg:p-4"
          >
            <img src={Settings} width="20" height="20" alt="Settings" />
            <p className="flex lg:hidden text-white font-medium text-xs text-center tracking-tight leading-relaxed mt-0">
              Settings
            </p>
          </button>
          {hoverSettings && (
            <div className="bg-slate-600 fixed z-10 bottom-[48px] left-[120px] flex flex-col gap-0 items-start w-[240px] shadow-2xl shadow-black/10 rounded-lg p-4">
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
