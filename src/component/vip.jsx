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
import "../assets/css/style10.css";
import "../assets/css/style11.css";

import crown from "../assets/images/crown.png";
import { useEffect, useState } from "react";
import axios from "axios";

//component
import Navbar from "./partial/navbar";
import { useTranslation } from "react-i18next";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import { Link, useNavigate } from "react-router-dom";
import Header from "./extra/Header";
import SupportLink from "./extra/supportLink";
import LanguagePopUp from "./extra/LanguagePopUp";
import TelegramPopUp from "./extra/TelegramPopUp";
import tik from "../assets/images/slider/tikmark.png";
import { Container, Row, Col, Card } from "react-bootstrap";
import CountUp from "react-countup";
import "../styles/vip.css";

const vip = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({});
  // const data = true;
  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      .replace(",", ""); // Remove the comma from the formatted string
  };
  const addDate = (dateString) => {
    const date = new Date(dateString);
    // Add one year to the date
    date.setFullYear(date.getFullYear() + 1);
    return date
      .toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      .replace(",", "");
  };
  const [reqAmount, setReqAmount] = useState(0);

  useEffect(() => {
    // Define an async function inside the useEffect hook
    const fetchData = async () => {
      try {
        // Make a GET request to your API endpoint using axios
        const response = await axios.get("api/home");
        // Log the response to the console
        setData(response.data);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function immediately
    fetchData();
  }, []);
  const [isUncloked, setIsUnlocked] = useState(false);
  const clickRecharge = (reqAmount) => {
    if (reqAmount != null && Number.isInteger(reqAmount)) {
      setReqAmount(reqAmount);
    }
    setIsUnlocked(!isUncloked);
  };
  const handleConfirm = () => {
    navigate("/recharge-method");
  };
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

  const investmentLevels = [
    { range: "10–1500 USDT", income: 7 },
    { range: "1501–4000 USDT", income: 9 },
    { range: "4001–7000 USDT", income: 11 },
    { range: "7001–10000 USDT", income: 13 },
    { range: "10001–20000 USDT", income: 16 },
    { range: "20001–50000 USDT", income: 19 },
  ];

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
        <div data-v-819be10a="" className="vip-info-wrap">
          <div data-v-819be10a="" className="vip-log">
            {t("upgrade_log")}
          </div>
        </div>
        <div
          className={`van-overlay ${isUncloked ? "show" : "d-none"}`}
          style={{ zIndex: "2002" }}
          onClick={clickRecharge}
        ></div>
        <div
          className={`unlock-modal van-popup van-popup--round van-popup--center van-safe-area-bottom  anounce-none ${
            isUncloked ? "show" : ""
          }`}
          style={{ zIndex: "2003", width: "75%", maxWidth: "620px" }}
        >
          <div className="modal-content">
            <p>
              The recharge balance is automatically unlocked. Need to recharge $
              {reqAmount}
            </p>
            <button onClick={handleConfirm}>Confirm</button>
          </div>
        </div>

        {/* SOME DESIGN GOES HERE */}
        <Container fluid className="py-5 investment-section">
          <h2 className="text-center text-light mb-4 glow-text">
            💠 Investment Levels 💠
          </h2>
          <Row className="g-4 justify-content-center">
            {investmentLevels.map((item, idx) => (
              <Col key={idx} xs={6} sm={6} md={6} lg={6}>
                <Link to="/recharge-method">
                  <Card className="level-card text-center">
                    <Card.Body>
                      <div className="level-tier-icon">🪙</div>
                      <Card.Title className="level-range">
                        {item.range}
                      </Card.Title>
                      <Card.Text className="level-income">
                        Daily Income:{" "}
                        <span className="income-highlight">
                          <CountUp end={item.income} duration={1} />%
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
        <Container className="py-4">
          <Card className="platform-info-card text-light">
            <Card.Body>
              <h4 className="glow-text mb-3">🚀 Welcome to Make-Tron.art</h4>
              <p>
                <strong>Make-Tron.art</strong> is the world's leading
                intelligent quantitative investment platform, specially designed
                for <span className="text-accent">USDT investors</span>.
              </p>
              <p>
                Our Tron evaluation system unlocks{" "}
                <span className="text-accent">VIP income levels</span> based on
                your deposit amount. It uses intelligent arbitrage between
                exchanges to <strong>buy low and sell high</strong>, helping
                users reach <em>financial freedom</em>.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-3">
                <div className="info-tag">
                  🔢 Minimum Quantization: <strong>10 USDT</strong>
                </div>
                <div className="info-tag">
                  💸 Minimum Withdrawal: <strong>2 USDT</strong>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Container>

        <Container className="py-4">
          <Card className="agent-card text-light">
            <Card.Body>
              <h4 className="glow-text mb-3">🤝 Agent Cooperation Program</h4>
              <p>
                Share your invitation link on social platforms and earn
                multi-tier commissions based on referrals.
              </p>
              <ul className="commission-list">
                <li>
                  <span className="text-accent">A Level:</span> 10% rebate
                </li>
                <li>
                  <span className="text-accent">B Level:</span> 2% rebate
                </li>
                <li>
                  <span className="text-accent">C Level:</span> 1% rebate
                </li>
              </ul>
              <p className="mt-3">
                <strong>Example:</strong> If you&apos;re in Class A and a user
                deposits
                <span className="text-accent"> 1,000 USDT</span>, you earn
                <span className="text-accent"> 130 USDT</span> (10% + 2% + 1%).
              </p>
            </Card.Body>
          </Card>
        </Container>

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

export default vip;
