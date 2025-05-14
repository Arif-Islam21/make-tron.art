import "../../../styles/piMining.css";
import avater from "../../../assets/images/piCoins/images/avater.jpg";
import pi from "../../../assets/images/piCoins/icons/piCoins.png";
import { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";

const PiMining = () => {
  const [isMining, setIsMining] = useState(false);
  const [secondLeft, setSecondLeft] = useState(24 * 60 * 60); // 24 hours
  const [value, setValue] = useState(0);

  // Format seconds into HH:MM:SS
  const formatTime = (s) => {
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };

  // Handle countdown and value increase
  useEffect(() => {
    let timer;

    if (isMining && secondLeft > 0) {
      timer = setInterval(() => {
        setSecondLeft((prev) => prev - 1);
        setValue((prev) => prev + 5000 / (24 * 60 * 60)); // evenly distribute 5000 PI over 24 hours
      }, 1000);
    }

    if (secondLeft === 0) {
      setIsMining(false); // Stop mining when time is up
    }

    return () => clearInterval(timer);
  }, [isMining, secondLeft]);

  return (
    <div className="mining-container">
      {!isMining && (
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
      )}

      {isMining && (
        <div className="px-4 mining-box">
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
          <div className="mt-3">
            <div className="timer">{formatTime(secondLeft)}</div>
            <ProgressBar
              variant="success"
              animated
              now={(value / 500) * 100}
              label={`${((value / 5000) * 100).toFixed(1)}%`}
            />
            <div className="value d-flex align-items-center justify-content-center gap-2 mt-2">
              <span>{value.toFixed(2)}</span>
              <img className="pi-logo-img" src={pi} alt="" />
              PI{" "}
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
