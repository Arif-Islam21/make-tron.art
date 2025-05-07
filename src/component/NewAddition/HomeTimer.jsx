import { useEffect, useState } from "react";
import img from "../../assets/images/piCoins/icons/homeImg.webp";

const HomeTimer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="text-center">
        <span className="fw-semibold">System time:</span>{" "}
        {time.toLocaleDateString()}__
        {time.toLocaleTimeString()}
      </h2>
      <div className="d-flex align-items-center justify-content-center my-3">
        <img src={img} className="rounded-circle" alt="home image" />
      </div>
    </div>
  );
};

export default HomeTimer;
