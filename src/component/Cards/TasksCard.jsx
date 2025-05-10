import "../../styles/taskCard.css";
import icon from "../../assets/images/piCoins/icons/piCoins.png";
import { FiGift } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

const TasksCard = () => {
  return (
    <div>
      <div className="card custom-card d-flex flex-row align-items-center p-3 mb-3">
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <span className="card-title mb-0 fw-bold text-primary">
              Join the official channel
            </span>
            <span className="reward-text">+250.00</span>
          </div>
          <p className="card-subtitle  mb-0">
            Join our official channel
            <br />
            for more information
          </p>
        </div>
        <div className="d-flex flex-column align-items-center ms-3">
          <img src={icon} alt="User" className="rounded-circle user-img mb-2" />
          <button className=" btn-sm completed-btn" disabled>
            Completed
          </button>
        </div>
      </div>
      <div className="card custom-card d-flex flex-row align-items-center p-3 mb-3">
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <span className="card-title mb-0 fw-bold text-primary">
              Check in daily
            </span>
            <span className="reward-text">+150.00</span>
          </div>
          <p className="card-subtitle  mb-0">daily tasks</p>
        </div>
        <div className="d-flex flex-column align-items-center ms-3">
          <img src={icon} alt="User" className="rounded-circle user-img mb-2" />
          <button className=" btn-sm completed-btn" disabled>
            Check In
          </button>
        </div>
      </div>
      <div className="d-flex align-items-center custom-card p-4 justify-content-between">
        <FiGift size={34} />
        <button className="d-flex align-items-center gap-2 fs-5 lucky-draw-btn">
          Lucky Draw <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default TasksCard;
