import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/team.css";
import "../assets/css/style.css";
import "../assets/css/style2.css";
import "../assets/css/style3.css";
import "../assets/css/style4.css";
import "../assets/css/style5.css";
import "../assets/css/style6.css";
import "../assets/css/style7.css";
import "../assets/css/style8.css";
import "../assets/css/style9.css";

import logo from "../assets/images/1x/logoNew.png";
import level1Img from "../assets/images/level1-21a26d15.png";
import level2Img from "../assets/images/level1-21a26d15.png";
import level3Img from "../assets/images/level1-21a26d15.png";
import team_level1 from "../assets/images/team_level1.png";
import team_level2 from "../assets/images/team_level2.png";
import team_level3 from "../assets/images/team_level3.png";
//component
import Navbar from "./partial/navbar";
import HeaderMain from "./extra/headerMain";
import CopyCode from "./extra/copyCode";
import CopyLink from "./extra/copyLink";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./extra/Header";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import LanguagePopUp from "./extra/LanguagePopUp";
import TelegramPopUp from "./extra/TelegramPopUp";
import FollowUs from "./NewAddition/FollowUs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Team = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({});
  console.log(data);
  const [isLoading, setIsLoading] = useState(false); // State to control loader visibility

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Show loader during initial data fetch
      try {
        const response = await axios.get("api/team");

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Hide loader after data is fetched
      }
    };

    fetchData();
  }, []);

  const invitationLink = `${window.location.origin}/#/register?ic=${
    data?.user?.invitation_code || "000000"
  }`;
  // Language popup js
  const [isLanguageVisible, setIsLanguageVisible] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const toggleLangPopup = () => {
    setIsLanguageVisible(!isLanguageVisible);
  };
  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsLanguageVisible(false);
  };
  // telegram popup
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);
  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };
  // copy popup
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    // Logic to copy content goes here

    // Show the modal
    setIsCopied(true);

    // Hide the modal after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <div id="app" className="a-t-1 no-4">
      <div
        home-nav=""
        className="layout-tab-bar box-border min-h-full w-full px-$mg pb-60px"
      >
        <Header
          selectedLanguage={selectedLanguage}
          toggleLangPopup={toggleLangPopup}
        ></Header>
        <div data-v-d7bc823e="" className="team-wrap">
          <div data-v-d7bc823e="" className="team-wrap-content">
            <div className="team-top-card shadow-sm p-3 mb-4 rounded-3 border-0">
              <div className="card-body">
                <h6 className="card-title mb-2">{t("invitation_code")}</h6>

                <div className="d-flex invitation-copy align-items-center justify-content-between p-2 rounded mb-3">
                  {/* <span className="text-monospace fw-semibold text-dark">
                    {data?.user?.invitation_code || "000000"}
                  </span> */}
                  <CopyCode
                    code={data?.user?.invitation_code || "000000"}
                    copyText={t("copy")}
                    handleCopyClick={handleCopyClick}
                  />
                </div>

                <div className="d-flex align-items-center my-3 justify-content-between">
                  <p className=" fs-5 mb-2">{t("share_refer_txt")}</p>
                  <CopyLink
                    code={invitationLink}
                    copyText={t("copy")}
                    handleCopyClick={handleCopyClick}
                  />
                </div>

                <div className="invite-link rounded">
                  <span className="invite-text">{invitationLink}</span>
                </div>

                <FollowUs />
              </div>
            </div>

            {/* share-card ends */}

            {/* date filter endsss */}
            <div className="commision-card rounded-3 p-3 bg-light team-info position-relative">
              <div className="commision-text-container">
                <h2 className="commision-text">
                  Commission Details <RiArrowRightDoubleFill />
                </h2>
              </div>
              {/* First set of team info */}
              <div className="row g-3 mb-3">
                <div className="col-6">
                  <div className="team-item-card h-100 p-3 shadow-sm rounded bg-dark text-white d-flex flex-column justify-content-between">
                    <div className="team-card-text small">
                      {t("Total number of team")}
                    </div>
                    <div className="text-primary text-end fs-4 fw-semibold">
                      {data?.teamsize || "0"}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="team-item-card h-100 p-3 shadow-sm rounded bg-dark text-white d-flex flex-column justify-content-between">
                    <div className="team-card-text small">
                      {t("Total promotion commission")}
                    </div>
                    <div className="text-primary text-end fs-4 fw-semibold">
                      ${data?.totalDepositSum || "0"}
                    </div>
                  </div>
                </div>
                {/* <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <div className="team-item-card">
                    <div className="team-card-text">{t("team_withdrawal")}</div>
                    <div className="text-primary fs-5">
                      ${data?.totalWithdrawSum || "0"}
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Second set of team info */}
              <div className="row g-3 mb-3">
                <div className="col-6">
                  <div className="team-item-card h-100 p-3 shadow-sm rounded bg-dark text-white d-flex flex-column justify-content-between">
                    <div className="team-card-text small">
                      {t("Total team recharge")}
                    </div>
                    <div className="text-primary text-end fs-4 fw-semibold">
                      {data?.teamsizeToday || "0"}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="team-item-card h-100 p-3 shadow-sm rounded bg-dark text-white d-flex flex-column justify-content-between">
                    <div className="team-card-text small">
                      {t("Team total withdrawals")}
                    </div>
                    <div className="text-primary text-end fs-4 fw-semibold">
                      {data?.firstTimeRecharge || "0"}
                    </div>
                  </div>
                </div>
                {/* <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <div className="team-item-card">
                    <div className="team-card-text">{t("first_wthdrawal")}</div>
                    <div className="text-primary fs-5">
                      {data.firstTimeWithdraw || "0"}
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* team table ends */}

            {/* team-card ends */}
          </div>
        </div>

        {/* <div data-v-d7bc823e="" className="">
          <div data-v-d7bc823e="level-card" className="border-b p-4">
            <div data-v-d7bc823e="" className=" flex items-center">
              <div
                data-v-d7bc823e=""
                className=" text-xl font-semibold text-gray-800"
              >
                LEV 1
              </div>
            </div>

            <div
                  data-v-d7bc823e=""
                  className="grid grid-cols-2 gap-5px mt-4"
                >
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs text-gray-500">
                      {t("register_valid")}
                    </div>
                    <div
                      data-v-d7bc823e=""
                      className="text-df font-medium text-gray-700"
                    >
                      {data?.refer_lvel1 || 0}/{data?.refer_val1 || 0}
                    </div>
                  </div>
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs text-gray-500">
                      {t("commission_percentage")}
                    </div>
                    <div
                      data-v-d7bc823e=""
                      className="text-df font-medium text-gray-700"
                    >
                      {data?.commission?.refer_com1 || "0"}%
                    </div>
                  </div>
                  <div data-v-d7bc823e="" className="level-count">
                    <div data-v-d7bc823e="" className="text-xs text-gray-500">
                      {t("total_income")}
                    </div>
                    <div
                      data-v-d7bc823e=""
                      className="text-df font-medium text-gray-700"
                    >
                      {parseFloat(data?.sumcom_lvel1).toFixed(2) || 0}
                    </div>
                  </div>
                </div>
            <div>
              <h2>Valid number/Number of people</h2>
              <h3>0/0</h3>
            </div>

            <Link
              to={`/team-details?level=${1}`}
              data-v-d7bc823e=""
              className="btn text-blue-500 d-flex align-items-center font-medium hover:text-blue-700 mt-3 flex items-center"
            >
              <span>{t("details")}</span>
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>

          <div data-v-d7bc823e="" className="team-item border-b p-4">
            <div data-v-d7bc823e="" className="level-name flex items-center">
              <img
                data-v-d7bc823e=""
                src={level2Img}
                alt="Level 2"
                className="w-8 h-8 rounded-full mr-3"
              />
              <div
                data-v-d7bc823e=""
                className="level-num text-xl font-semibold text-gray-800"
              >
                LEV 2
              </div>
            </div>

            <div data-v-d7bc823e="" className="grid grid-cols-2 gap-5px mt-4">
              <div data-v-d7bc823e="" className="level-count">
                <div data-v-d7bc823e="" className="text-xs text-gray-500">
                  {t("register_valid")}
                </div>
                <div
                  data-v-d7bc823e=""
                  className="text-df font-medium text-gray-700"
                >
                  {data?.refer_lvel2 || 0}/{data?.refer_val2 || 0}
                </div>
              </div>
              <div data-v-d7bc823e="" className="level-count">
                <div data-v-d7bc823e="" className="text-xs text-gray-500">
                  {t("commission_percentage")}
                </div>
                <div
                  data-v-d7bc823e=""
                  className="text-df font-medium text-gray-700"
                >
                  {data?.commission?.refer_com2 || "0"}%
                </div>
              </div>
              <div data-v-d7bc823e="" className="level-count">
                <div data-v-d7bc823e="" className="text-xs text-gray-500">
                  {t("total_income")}
                </div>
                <div
                  data-v-d7bc823e=""
                  className="text-df font-medium text-gray-700"
                >
                  {parseFloat(data?.sumcom_lvel2).toFixed(2) || 0}
                </div>
              </div>
            </div>

            <Link
              to={`/team-details?level=${2}`}
              data-v-d7bc823e=""
              className="btn text-blue-500 font-medium d-flex align-items-center hover:text-blue-700 mt-3 flex items-center"
            >
              <span>{t("details")}</span>
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>

          <div data-v-d7bc823e="" className="team-item border-b p-4">
            <div data-v-d7bc823e="" className="level-name flex items-center">
              <img
                data-v-d7bc823e=""
                src={level3Img}
                alt="Level 3"
                className="w-8 h-8 rounded-full mr-3"
              />
              <div
                data-v-d7bc823e=""
                className="level-num text-xl font-semibold text-gray-800"
              >
                LEV 3
              </div>
            </div>

            <div data-v-d7bc823e="" className="grid grid-cols-2 gap-5px mt-4">
              <div data-v-d7bc823e="" className="level-count">
                <div data-v-d7bc823e="" className="text-xs text-gray-500">
                  {t("register_valid")}
                </div>
                <div
                  data-v-d7bc823e=""
                  className="text-df font-medium text-gray-700"
                >
                  {data?.refer_lvel3 || 0}/{data?.refer_val3 || 0}
                </div>
              </div>
              <div data-v-d7bc823e="" className="level-count">
                <div data-v-d7bc823e="" className="text-xs text-gray-500">
                  {t("commission_percentage")}
                </div>
                <div
                  data-v-d7bc823e=""
                  className="text-df font-medium text-gray-700"
                >
                  {data?.commission?.refer_com3 || "0"}%
                </div>
              </div>
              <div data-v-d7bc823e="" className="level-count">
                <div data-v-d7bc823e="" className="text-xs text-gray-500">
                  {t("total_income")}
                </div>
                <div
                  data-v-d7bc823e=""
                  className="text-df font-medium text-gray-700"
                >
                  {parseFloat(data?.sumcom_lvel3).toFixed(2) || 0}
                </div>
              </div>
            </div>

            <Link
              to={`/team-details?level=${3}`}
              data-v-d7bc823e=""
              className="btn text-blue-500 font-medium d-flex align-items-center hover:text-blue-700 mt-3 flex items-center"
            >
              <span>{t("details")}</span>
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div> */}

        <div className="team-level-container">
          <div className="team-lvl-card">
            <h1>LEV 1</h1>
            <div className="d-flex align-items-center gap-1">
              <h5 className="small">Valid number/Number of people</h5>
              <h3>0/0</h3>
              <Link to={`/team-details?level=${1}`}>
                <MdOutlineKeyboardArrowRight size={30} />
              </Link>
            </div>
          </div>
          <div className="team-lvl-card">
            <h1>LEV 2</h1>
            <div className="d-flex align-items-center gap-1">
              <h5 className="small">Valid number/Number of people</h5>
              <h3>0/0</h3>
              <Link to={`/team-details?level=${2}`}>
                <MdOutlineKeyboardArrowRight size={30} />
              </Link>
            </div>
          </div>
          <div className="team-lvl-card">
            <h1>LEV 3</h1>
            <div className="d-flex align-items-center gap-1">
              <h5 className="small">Valid number/Number of people</h5>
              <h3>0/0</h3>
              <Link to={`/team-details?level=${3}`}>
                <MdOutlineKeyboardArrowRight size={30} />
              </Link>
            </div>
          </div>
          <div className="team-lvl-card">
            <h1>LEV 4</h1>
            <div className="d-flex align-items-center gap-1">
              <h5 className="small">Valid number/Number of people</h5>
              <h3>0/0</h3>
              <Link to={`/team-details?level=${4}`}>
                <MdOutlineKeyboardArrowRight size={30} />
              </Link>
            </div>
          </div>
          <div className="team-lvl-card">
            <h1>LEV 5</h1>
            <div className="d-flex align-items-center gap-1">
              <h5 className="small">Valid number/Number of people</h5>
              <h3>0/0</h3>
              <Link to={`/team-details?level=${5}`}>
                <MdOutlineKeyboardArrowRight size={30} />
              </Link>
            </div>
          </div>
          <div className="team-lvl-card">
            <h1>LEV 6</h1>
            <div className="d-flex align-items-center gap-1">
              <h5 className="small">Valid number/Number of people</h5>
              <h3>0/0</h3>
              <Link to={`/team-details?level=${6}`}>
                <MdOutlineKeyboardArrowRight size={30} />
              </Link>
            </div>
          </div>
        </div>

        {isCopied && (
          <div
            id="copyModal"
            role="dialog"
            className="van-popup van-popup--center van-toast van-toast--middle van-toast--text"
            style={{ zIndex: "200017", transition: ".3s all" }}
          >
            <div className="van-toast__text">Copied successfully</div>
          </div>
        )}
        <CustomLoader />
        <Navbar />
      </div>
      <LanguagePopUp
        isLanguageVisible={isLanguageVisible}
        toggleLangPopup={toggleLangPopup}
        changeLanguage={changeLanguage}
      />
      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      />
    </div>
  );
};

export default Team;
