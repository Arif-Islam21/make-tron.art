import { useEffect, useRef, useState } from "react";
import "../../styles/airdropCountdown.css";

const AirdropCountdown = () => {
  // Set target time ONCE using useRef
  const targetDateRef = useRef(
    new Date().getTime() +
      1 * 24 * 60 * 60 * 1000 + // 1 day
      5 * 60 * 60 * 1000 + // 5 hours
      44 * 60 * 1000 + // 44 minutes
      32 * 1000 // 32 seconds
  );

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetDateRef.current - now;

    if (distance <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
      2,
      "0"
    );
    const hours = String(
      Math.floor((distance / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0");
    const minutes = String(Math.floor((distance / 1000 / 60) % 60)).padStart(
      2,
      "0"
    );
    const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card timer-card my-4 text-center text-white mx-auto p-3">
      <h5 className="mb-3 fw-bold fs-5">
        Airdrop Countdown <i className="bi bi-info-circle"></i>
      </h5>
      <div className="d-flex justify-content-center gap-3">
        <div className="time-box">
          <div className="time-value">{timeLeft.days}</div>
          <div className="time-label">Days</div>
        </div>
        <div className="time-box">
          <div className="time-value">{timeLeft.hours}</div>
          <div className="time-label">Hour</div>
        </div>
        <div className="time-box">
          <div className="time-value">{timeLeft.minutes}</div>
          <div className="time-label">Minutes</div>
        </div>
        <div className="time-box">
          <div className="time-value">{timeLeft.seconds}</div>
          <div className="time-label">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default AirdropCountdown;
