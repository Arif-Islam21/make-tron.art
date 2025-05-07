//all packages
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
//all css/images
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/style.css";
import "../assets/css/style2.css";
import "../assets/css/style3.css";
import "../assets/css/style4.css";
import "../assets/css/style5.css";
import "../assets/css/style6.css";
import "../assets/css/style7.css";
import "../assets/css/style8.css";
import "../assets/css/style9.css";

import company_profile from "../assets/images/company-profile.jpeg";

//component
import Navbar from "./partial/navbar";
import CustomLoader from "./extra/customLoader";
import SingleHeader from "./extra/SingleHeader";
import SupportLink from "./extra/supportLink";
import TelegramPopUp from "./extra/TelegramPopUp";
import { useState } from "react";
// import SupportLink from "./extra/supportLink";
const companyProfile = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };
  const { t } = useTranslation();
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);
  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };
  return (
    <div id="app" className="a-t-1 no-4">
      <div className="box-border min-h-full w-full pt-45px">
        <SingleHeader></SingleHeader>

        <div com-profile="" className="company-detail-wrap p-$mg">
          <div
            com-profile=""
            className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text"
            style={{ background: "#ffffff30" }}
          >
            <div com-profile="" className=":uno: title mb-20px text-lg">
              {t("company_profile")}
            </div>
            <div com-profile="" id="comProContent" className="content">
              Make-Tron.art is the world's leading intelligent quantitative
              investment platform, specially designed for USDT investors. Our
              Tron evaluation system unlocks different levels of income based on
              deposit amount. We use intelligent arbitrage between exchanges to
              buy low on one, sell high on another, helping users earn and reach
              financial freedom. The recharge amount activates a VIP level with
              exclusive income. Minimum quantization is 10 USDT; minimum
              withdrawal is 2 USDT. Agent Cooperation: Share your invitation
              link on social platforms to earn commissions across 3 tiers: A
              Level: 10% rebate B Level: 2% rebate C Level: 1% rebate Example:
              If you're in Class A and a deposit of 1,000 USDT occurs, you can
              earn 130 USDT (10% + 2% + 1%).
            </div>
          </div>
        </div>
      </div>

      <CustomLoader />

      {/* support section */}
      {/* <SupportLink /> */}
      {/* support section */}
      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      ></TelegramPopUp>
    </div>
  );
};

export default companyProfile;
