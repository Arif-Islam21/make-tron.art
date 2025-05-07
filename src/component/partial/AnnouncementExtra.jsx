// Announcement.js
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import banner from "../../assets/images/slider/homeSlider-3.png";

const AnnouncementExtra = ({ setShow, show }) => {
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

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

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
      style={{ zIndex: "2003", width: "95%", maxWidth: "620px" }}
    >
      <div data-v-909b9c13="" className="announce-wrap a-t-26">
        <div data-v-909b9c13="" className="container-card email-box p-0!">
          <div className="mb-12px pt-12px text-center text-20px font-bold text-$btn-text">
            <h4>{t("announcement")}</h4>
          </div>
          <div
            data-v-909b9c13=""
            className="mx-auto h-10px w-95% rounded-full bg-$primary"
          ></div>
          <div
            className="content absolute left-50% top-60px h-310px w-90% translate-x-[-50%] overflow-y-auto p-5px text-black shadow bg-white!"
            dangerouslySetInnerHTML={{ __html: messages[currentMessageIndex] }}
          />
          <div className="mt-320px w-full" style={{ marginTop: "327px" }}>
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
          </div>
          {/* buttons ends */}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementExtra;
