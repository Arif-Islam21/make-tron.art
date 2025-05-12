import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import "../../styles/authTop.css";
import { FaTelegramPlane } from "react-icons/fa";

function authTopPart({ toggleLangPopup, toggleTelegramPopUp }) {
  const { t, i18n } = useTranslation();

  // Set default language on first visit
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (!savedLanguage) {
      i18n.changeLanguage("en"); // Set English as default language
      localStorage.setItem("language", "en"); // Store default language in localStorage
    }
  }, [i18n]);

  // Get the current language from i18n
  const currentLanguage = i18n.language || "en"; // Default to 'en' if undefined
  const displayLanguage =
    currentLanguage === "en"
      ? "English"
      : currentLanguage === "id"
      ? "Indonesian"
      : currentLanguage === "vi"
      ? "Vietnamese"
      : currentLanguage === "ja"
      ? "Japanese"
      : currentLanguage === "pt"
      ? "Portuguese"
      : currentLanguage === "ar"
      ? "Arabic"
      : currentLanguage === "th"
      ? "Thai"
      : currentLanguage === "es"
      ? "Spanish"
      : currentLanguage === "de"
      ? "German"
      : currentLanguage === "fr"
      ? "French"
      : currentLanguage === "it"
      ? "Italian"
      : currentLanguage === "ko"
      ? "Korean"
      : currentLanguage === "tr"
      ? "Turkish"
      : currentLanguage === "ru"
      ? "Russian"
      : currentLanguage === "fa"
      ? "Persian"
      : currentLanguage === "ms"
      ? "Malay"
      : currentLanguage === "bn"
      ? "Bengali"
      : currentLanguage === "az"
      ? "Azerbaijani"
      : currentLanguage === "zh-CN"
      ? "Simplified Chinese"
      : currentLanguage === "zh-TW"
      ? "Traditional Chinese"
      : currentLanguage;

  return (
    <div className="top-info ">
      {/* <div className=":uno: flex flex-col items-center text-center">
        <div className=":uno: base-logo flex items-center">
          <img
            className="site-img h-full w-full rd-50%"
            src={logo}
            draggable="false"
            alt="logo"
          />
        </div>
        <p className=":uno: font-ali mb-4px mt-4px text-32px text-uppercase font-800 lh-44px">
          make-tron.art
        </p>
        <div className=":uno: text-16px font-800">
          Welcome to <span className="text-uppercase">make-tron.art</span>
        </div>
        <div className=":uno: text-8px font-800">
          Explore the future of creativity!
        </div>
      </div> */}
      <div className="top-tools py-2 px-3">
        <div
          className="base-help-btn telegram-button cursor-pointer"
          onClick={toggleTelegramPopUp}
        >
          <FaTelegramPlane size={28} color="#fff" />
        </div>
        <div className="d-flex align-items-center justify-content-end">
          <div
            className="base-lang-wrap language-button"
            onClick={toggleLangPopup}
          >
            <div className="i-ph:globe mr-2px text-18px c-$btn-text"></div>
            <span className="c-$btn-text" id="languageSelect">
              {displayLanguage}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default authTopPart;
