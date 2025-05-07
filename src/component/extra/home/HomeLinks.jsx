import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import recharge_icon from "../../../assets/images/recharge_icon.png";
import withdraw_icon from "../../../assets/images/withdraw_icon.png";
import app_icon from "../../../assets/images/app_icon.png";
import company_profile_icon from "../../../assets/images/company_profile_icon.png";
import axios from "axios";
import Loader from "../../../component/extra/loader";
import { useState } from "react";
import "../../../styles/homeLinks.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { PiHandWithdrawFill } from "react-icons/pi";
import { FcInvite } from "react-icons/fc";
import { RiTeamFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";

import AnnouncementExtra from "../../partial/AnnouncementExtra";

const HomeLinks = () => {
  const { t } = useTranslation();
  const [isLoader, setIsLoader] = useState(false);
  const [show, setShow] = useState(false);

  // Detect the user's operating system
  const getOperatingSystem = () => {
    const userAgent =
      window.navigator.userAgent || window.navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "ios";
    }

    if (/android/i.test(userAgent)) {
      return "apk";
    }

    if (navigator.platform.indexOf("Win") !== -1) {
      return "apk";
    }

    if (navigator.platform.indexOf("Mac") !== -1) {
      return "ios";
    }

    if (navigator.platform.indexOf("Linux") !== -1) {
      return "apk";
    }

    return "Unknown OS";
  };

  const downloadApp = () => {
    // Specify the file path
    const filePath = `https://usdt-uk.com/assets/usdt-uk.apk`; // Adjust the filename and extension as needed

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "usdt-uk.apk"; // Specify the default download name
    link.click();
  };

  const fetchData = async (device, domain) => {
    try {
      setIsLoader(true);

      const url = `https://GLIDEMALLmall.com/myapp/api/app/download?os=${device}&domain=${domain}`;

      // Open the new tab
      const newTab = window.open(url, "_blank");

      // Close the tab after 2 seconds
      setTimeout(() => {
        if (newTab) {
          newTab.close();
        }
      }, 2000);

      setIsLoader(false);
    } catch (error) {
      setIsLoader(false);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="py-3 rounded-4 mt-4">
      {isLoader && (
        <div className="d-flex justify-content-center mb-3">
          <Loader />
        </div>
      )}
      <Container>
        <Row className="g-4 link-box-container">
          <Col xs={4} className="text-center link-box">
            <Link
              to="/recharge-method"
              className="text-decoration-none text-white"
            >
              <div className="icon-wrapper mb-2">
                <FaFileInvoiceDollar size={29} />
              </div>
              <div className="small">{t("recharge")}</div>
            </Link>
          </Col>

          <Col xs={4} className="text-center link-box">
            <Link
              to="/withdraw-trx"
              className="text-decoration-none text-white"
            >
              <div className="icon-wrapper mb-2">
                <PiHandWithdrawFill size={29} />
              </div>
              <div className="small">{t("withdraw")}</div>
            </Link>
          </Col>

          <Col xs={4} className="text-center link-box">
            <div>
              <Link to="/team" className="text-decoration-none text-white">
                <div className="icon-wrapper mb-2">
                  <FcInvite size={29} />
                </div>
                <div className="small">{t("Invite")}</div>
              </Link>
            </div>
          </Col>

          <Col xs={4} className="text-center link-box">
            <Link to="/team" className="text-decoration-none text-white">
              <div className="icon-wrapper mb-2">
                <RiTeamFill size={29} />
              </div>
              <div className="small">{t("team")}</div>
            </Link>
          </Col>

          <Col xs={4} className="text-center link-box">
            <Link
              to="/company-profile"
              className="text-decoration-none text-white"
            >
              <div className="icon-wrapper mb-2">
                <MdMessage size={29} />
              </div>
              <div className="small">{t("About Us")}</div>
            </Link>
          </Col>

          <Col xs={4} className="text-center link-box">
            <Link
              to="/announcement"
              className="text-decoration-none text-white"
            >
              <div className="icon-wrapper mb-2">
                <TfiAnnouncement size={29} />
              </div>
              <div className="small">{t("announcement")}</div>
            </Link>
          </Col>
        </Row>
      </Container>
      <AnnouncementExtra show={show} setShow={setShow} />
    </div>
  );
};

export default HomeLinks;
