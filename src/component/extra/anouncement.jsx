// Announcement.js
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import banner from "../../assets/images/slider/homeSlider-3.png";
import lottery from "../../assets/images/piCoins/images/lottery.png";
import "../../styles/anouncement.css";
import { Button } from "react-bootstrap";
import { MdDoubleArrow } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";

const Announcement = () => {
  const { t } = useTranslation();
  const messages = [
    `
    <div class="container announcement_area">
  
      <div class="section">
        <p>Join Make- Tron art, now to start your quantitative investment journey and enjoy the wealth appreciation opportunities brought by make tron wisdom!</p>
  
        <p><strong>Minimum Investment:</strong> 10 USDT</p>
        <p><strong>Minimum Withdraw :</strong> 2 USDT</p>
  
        <p><strong>Official Support:</strong> <a href="https://t.me/CAREMAKETRON09" target="_blank">https://t.me/CAREMAKETRON09</a></p>
  
        <p><strong>Official registration link:</strong><br />
        <a href="https://www.make-tron.art/#/register?ic=7365654" target="_blank">https://www.make-tron.art/#/register?ic=7365654</a></p>
  
        <p><strong>Official alternate website:</strong><br />
        <a href="https://www.make-tron.art" target="_blank">https://www.make-tron.art</a></p>
      </div>
  
      <div class="section">
        <h2>INVESTMENT LEVEL:</h2>
        <p>1. Deposit: 10-1500, USDT daily income of 7%</p>
        <p>2. Deposit: 1501-4000, USDT income 9%</p>
        <p>3. Deposit: 4001-7000, USDT income 11%</p>
        <p>4. Deposit: 70001-10000, daily income 13%</p>
        <p>5. Deposit: 10001-20000,USDT daily income 16%</p>
        <p>6. Deposit: 20001-50000,USDT daily income 19%</p>
      </div>
  
      <div class="section">
        <p>Make-Tron. art is the world's leading intelligent quantitative investment platform, specially designed for USDT investors. Through our tron  evaluation system, users can unlock different levels of exclusive income ratios based on the amount of money they deposit, and enjoy stable and high daily quantitative income. Whether you are a novice investor or a senior investor, we provide you with a safe and transparent investment environment to help you achieve rapid wealth growth.</p>
  
        <p>We help users conduct intelligent arbitrage on exchanges, use the capital chain to buy at low prices on exchange A, sell at high prices on exchange B, earn the difference, and realize users' financial freedom.</p>
  
        <p>The recharge amount is used to activate the corresponding VIP level and unlock the exclusive income ratio of this level:</p>
  
        <p>The minimum quantization cash amount is 10USDT, and the minimum quantitative cash amount is 2USDT.</p>
      </div>
  
      <div class="section">
        <h2>Agent cooperation:</h2>
        <p>Share invitation links to your social networking websites and groups to enjoy high commissions for the third-tier alliance:</p>
        <p>Team Commission: A B C Rebate 10% 2% 1%</p>
        <p>A-level team rebate by 10%, the other party deposits 1,000 USDT, you can get 100 USDT</p>
        <p>The B-level team rebate 2%, and the other party deposits 1,000 USDT, and you can get 20 USDT</p>
        <p>C-level team rebate 1%, the other party deposits 1,000 USDT, you can get 10 USDT</p>
        <p>Conclusion: If you are in Class A, you can get a commission of (A+B+C) 10+2+1+=13%</p>
      </div>
  
      <div class="footer">
        &copy; 2025 Make-Tron.art. All rights reserved.
      </div>
    </div>
    `,
  ];

  const [show, setShow] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    // Show the announcement after 2 seconds
    const showTimeout = setTimeout(() => {
      setShow(true);
    }, 2000);

    // Clear timeout if the component unmounts
    return () => {
      clearTimeout(showTimeout);
    };
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const handleNext = () => {
    setCurrentMessageIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentMessageIndex((prevIndex) => prevIndex - 1);
  };

  const handleAgree = () => {
    setShow(false);
  };

  return (
    <div
      id="homeModal"
      className={`van-popup van-popup--round van-popup--center van-safe-area-bottom van-popup-customer anounce-none ${
        show ? "show" : ""
      }`}
      style={{
        zIndex: "2003",
        width: "100%",
        maxWidth: "620px",
      }}
    >
      <div data-v-909b9c13="" className="announce-wrap a-t-26">
        <div data-v-909b9c13="" className="container-card email-box p-0!">
          {/* <div className="mb-12px pt-12px text-center text-20px font-bold text-$btn-text">
            <h4>{t("announcement")}</h4>
          </div> */}
          {/* <div
            data-v-909b9c13=""
            className="mx-auto h-10px w-95% rounded-full bg-$primary"
          ></div> */}
          {/* <div
            className="content absolute left-50% top-60px h-310px w-90% translate-x-[-50%] overflow-y-auto p-5px text-black shadow bg-white!"
            dangerouslySetInnerHTML={{ __html: messages[currentMessageIndex] }}
          /> */}

          <div className="content absolute left-50% top-60px h-100 w-90% translate-x-[-50%] overflow-y-auto p-5px pb-5 shadow ">
            <div className="d-flex align-items-center justify-content-center py-4">
              <img
                src={lottery}
                className="wheel-image"
                alt="lottery wheel image"
              />
            </div>
            <h2 className="text-center text-white">
              Number Of slots available: 0
            </h2>
            <div className="d-flex align-items-center justify-content-center">
              <Button variant="primary" className="w-75  my-4">
                LOTTERY
              </Button>
            </div>
            <div className="details-container">
              <p className="my-1">
                New users can participate in the lucky draw after registration
                and win 150-100000 Trump Coins
              </p>
              <p className="my-1">
                Invite team level 1 users who deposit more than 100 USDT in a
                single transaction to get 1 lucky draw opportunity.
              </p>
              <p className="my-1">
                Spend USDT to purchase mining power gift pack rewards:
              </p>
              <p className="my-1">
                A single deposit of 89 USDT will get you 1 lucky draw
                opportunity.
              </p>
              <p className="my-1">
                A single deposit of 299 USDT will get 2 lucky draw
                opportunities.
              </p>
              <p className="my-1">
                A single deposit of 999 USDT will get 4 lucky draw
                opportunities.
              </p>
              <p className="my-1">
                A single deposit of 1999 USDT will get 6 lucky draw
                opportunities.
              </p>
              <p className="my-1">
                A single deposit of 3999 USDT will get you 8 lucky draw
                opportunities.
              </p>
              <p className="my-1">
                A single deposit of 6999 USDT or more will get 10 lucky draw
                opportunities.
              </p>
              <p className="my-1">
                The maximum X Empire base bonus available in the lottery is
                150-100000 Trump Coin.
              </p>
            </div>
            <h2 className="d-flex align-items-center gap-3 text-white justify-content-center my-3 fs-4">
              Invite Now <MdDoubleArrow />
            </h2>
            <div className="d-flex mb-4 align-items-center gap-3 text-white justify-content-center my-3 fs-4">
              <button onClick={handleClose} className="close-btn">
                <RxCrossCircled />
              </button>
            </div>
          </div>

          {/* <div className="mt-320px w-full" style={{ marginTop: "387px" }}>
            <div data-v-909b9c13="" className="mt-10px flex justify-around">
              {currentMessageIndex === 0 && (
                <div className="mx-auto inline" onClick={handleClose}>
                  {t("close")}
                </div>
              )}
              {currentMessageIndex > 0 && (
                <div className="mx-auto inline" onClick={handlePrevious}>
                  {t("previous")}
                </div>
              )}
              {currentMessageIndex === 0 && (
                <div className="mx-auto inline" onClick={handleNext}>
                  {t("next")}
                </div>
              )}
              {currentMessageIndex === 1 && (
                <div className="mx-auto inline" onClick={handleAgree}>
                  {t("i_know")}
                </div>
              )}
            </div>
          </div> */}
          {/* buttons ends */}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
