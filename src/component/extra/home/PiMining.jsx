import "../../../styles/piMining.css";
import avater from "../../../assets/images/piCoins/images/avater.jpg";
import { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";

const PiMining = () => {
  const [isMining, setIsMining] = useState(false);
  const [secondLeft, setSecondLeft] = useState(24 * 60 * 60);

  const formatTime = (s) => {
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };

  return (
    <div className="mining-container">
      <div className="mining-profile">
        <div className="pi-mining-card">
          <img src={avater} alt="this is profile image" />
          <div className="d-flex item-content flex-column">
            <h2 className="fw-bold fs-6">email@email.com</h2>
            <p className="fw-semibold">
              Pi Level <span>0</span>
            </p>
          </div>
        </div>
        <div className="mining-rate">
          <h2>
            <span>3.888</span> Pi/H
          </h2>
        </div>
      </div>
      {isMining && (
        <div className="px-4">
          <div className="mining-box">
            <div className="timer">{formatTime(secondLeft)}</div>
            <ProgressBar variant="success" animated now={45} />
            <div className="value">
              <span>5000</span> PI
            </div>
          </div>
        </div>
      )}
      {!isMining && (
        <div className="px-4">
          <button
            onClick={() => setIsMining(true)}
            className="mining-start-btn"
          >
            Start Mining
          </button>
        </div>
      )}
    </div>
  );
};

export default PiMining;
