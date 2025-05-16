import "../../styles/taskCard.css";
import icon from "../../assets/images/piCoins/icons/piCoins.png";
import { FiGift } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import Lottery from "../NewAddition/Lottery";
import { useState } from "react";

const TasksCard = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <div className="card custom-card d-flex flex-column align-items-center p-3 mb-3">
        <div className="d-flex align-items-center justify-content-between w-100">
          <span className="card-title mb-0 fw-bold text-primary">
            Join official Telegram Channel
          </span>
          <div className="d-flex align-items-center gap-2 justify-content-between">
            <span className="reward-text">+250.00</span>
            <img
              src={icon}
              alt="User"
              className="rounded-circle user-img mb-2"
            />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between my-1 w-100 ms-3">
          <p className="card-subtitle  mb-0">
            Join our official channel
            <br />
            for more information
          </p>
          <a
            href="https://t.me/PiAnnouncements"
            className=" btn-sm completed-btn"
            disabled
          >
            Completed
          </a>
        </div>
      </div>
      <div className="card custom-card d-flex flex-column align-items-center p-3 mb-3">
        <div className="d-flex align-items-center justify-content-between w-100">
          <span className="card-title mb-0 fw-bold text-primary">
            Join official Twitter(X) Channel
          </span>
          <div className="d-flex align-items-center gap-2 justify-content-between">
            <span className="reward-text">+250.00</span>
            <img
              src={icon}
              alt="User"
              className="rounded-circle user-img mb-2"
            />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between my-1 w-100 ms-3">
          <p className="card-subtitle  mb-0">
            Join our official channel
            <br />
            for more information
          </p>
          <a
            href="https://x.com/PiCoreTeam?t=Wwve3wxIS5B_boaQYXvPsQ&s=09"
            className=" btn-sm completed-btn"
            disabled
          >
            Completed
          </a>
        </div>
      </div>
      <div className="card custom-card d-flex flex-column align-items-center p-3 mb-3">
        <div className="d-flex align-items-center justify-content-between w-100">
          <span className="card-title mb-0 fw-bold text-primary">
            Join official You Tube Channel
          </span>
          <div className="d-flex align-items-center gap-2 justify-content-between">
            <span className="reward-text">+250.00</span>
            <img
              src={icon}
              alt="User"
              className="rounded-circle user-img mb-2"
            />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between my-1 w-100 ms-3">
          <p className="card-subtitle  mb-0">
            Join our official channel
            <br />
            for more information
          </p>
          <a
            href="https://youtube.com/@picoreteam?si=64ppds4C1nO1-VcF"
            className=" btn-sm completed-btn"
            disabled
          >
            Completed
          </a>
        </div>
      </div>
      <div className="card custom-card d-flex flex-column align-items-center p-3 mb-3">
        <div className="d-flex align-items-center justify-content-between w-100">
          <span className="card-title mb-0 fw-bold text-primary">
            Check in daily
          </span>
          <div className="d-flex align-items-center gap-2 justify-content-between">
            <span className="reward-text">+150.00</span>
            <img
              src={icon}
              alt="User"
              className="rounded-circle user-img mb-2"
            />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between my-1 w-100 ms-3">
          <p className="card-subtitle  mb-0">daily tasks</p>
          <button className=" btn-sm completed-btn" disabled>
            Check In
          </button>
        </div>
      </div>
      <div className="d-flex align-items-center custom-card p-4 justify-content-between">
        <FiGift size={34} />
        <button
          onClick={() => setModalShow(true)}
          className="d-flex align-items-center gap-2 fs-5 lucky-draw-btn"
        >
          Lucky Draw <IoIosArrowForward />
        </button>
      </div>
      <Lottery show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default TasksCard;
