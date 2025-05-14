import React, { useState, useEffect } from "react";
import axios from "axios";
import telegramIcon from "../../assets/images/telegram_icon.png";
import twitter from "../../assets/images/piCoins/icons/twitter.png";
import youTube from "../../assets/images/piCoins/icons/yt.png";
import { useTranslation } from "react-i18next";
const TelegramPopUp = ({ isTelegramVisible, toggleTelegramPopUp }) => {
  const { t } = useTranslation();
  const [telegramLink, setTelegramLink] = useState("");

  useEffect(() => {
    if (isTelegramVisible) {
      fetchData();
    }
  }, [isTelegramVisible]);

  const fetchData = async () => {
    try {
      const response = await axios.get("api/support");
      // Assuming the link is returned in response.data.url
      setTelegramLink(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleRedirect = () => {
    if (telegramLink) {
      window.location.href = telegramLink; // Redirect to the Telegram link
    }
  };
  const handleTelegramRedirect = () => {
    if (telegramLink) {
      window.location.href = "t.me/PiAnnouncements"; // Redirect to the Telegram link
    }
  };
  const handleTwitterRedirect = () => {
    if (telegramLink) {
      window.location.href =
        "https://x.com/PiCoreTeam?t=Wwve3wxIS5B_boaQYXvPsQ&s=09"; // Redirect to the Telegram link
    }
  };
  const handleYouTubeRedirect = () => {
    if (telegramLink) {
      window.location.href =
        "https://youtube.com/@picoreteam?si=64ppds4C1nO1-VcF"; // Redirect to the Telegram link
    }
  };

  if (!isTelegramVisible) return null;

  return (
    <div>
      <div
        onClick={toggleTelegramPopUp}
        id="telegramModFade"
        className="van-overlay"
        role="button"
        style={{ zIndex: "2009" }}
      ></div>
      <div
        id="telegramModal"
        role="dialog"
        className="van-popup bg-white van-popup--round van-popup--bottom overflow-hidden"
        style={{ zIndex: "2011", height: "50%" }}
      >
        <div className=":uno: m-10px h-full flex flex-col overflow-hidden a-t-26">
          <div className="text-center text-lg font-bold text-muted">
            {t("online_service")}
          </div>
          <div className="my-10px text-center text-sm text-muted">
            {t("choose_your_preferred")}
          </div>
          <ul className=":uno: mx-auto my-10px max-w-720px w-full flex-1 overflow-y-auto">
            <li
              className=":uno: mb-8px flex cursor-pointer items-center rounded-12px bg-#F7F8FA p-8px"
              onClick={handleTwitterRedirect} // Trigger redirect on click
            >
              <img
                className=":uno: h-64px w-64px overflow-hidden rounded-12px"
                src={twitter}
                alt="Telegram"
              />
              <span className=":uno: ml-10px text-muted">
                Twitter(X) Official Suort
              </span>
              <div className="i-ic-round-keyboard-arrow-right ml-auto text-20px text-black"></div>
            </li>
            <li
              className=":uno: mb-8px flex cursor-pointer items-center rounded-12px bg-#F7F8FA p-8px"
              onClick={handleTelegramRedirect} // Trigger redirect on click
            >
              <img
                className=":uno: h-64px w-64px overflow-hidden rounded-12px"
                src={telegramIcon}
                alt="Telegram"
              />
              <span className=":uno: ml-10px text-muted">Telegram Support</span>
              <div className="i-ic-round-keyboard-arrow-right ml-auto text-20px text-black"></div>
            </li>
            <li
              className=":uno: mb-8px flex cursor-pointer items-center rounded-12px bg-#F7F8FA p-8px"
              onClick={handleYouTubeRedirect}
            >
              <img
                className=":uno: h-64px w-64px overflow-hidden rounded-12px"
                src={youTube}
                alt="Telegram"
              />
              <span className=":uno: ml-10px text-muted">
                Official You Tube Channel
              </span>
              <div className="i-ic-round-keyboard-arrow-right ml-auto text-20px text-black"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TelegramPopUp;
