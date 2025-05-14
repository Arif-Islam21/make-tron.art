import { Button, Modal } from "react-bootstrap";
import "../../styles/anouncement.css";
import wheel from "../../assets/images/piCoins/images/wheel.png";
import wheelIcon from "../../assets/images/piCoins/images/wheel-icon.png";
import { MdDoubleArrow } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";

const Lottery = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="custom-modal"
      >
        <Modal.Body>
          {/* spinning wheel goes here */}
          <div className="img-container text-black">
            <img src={wheel} alt="wheel image" className="wheel-img" />
            <img
              src={wheelIcon}
              className="roulette-pointer cp"
              alt="Roulette Pointer"
            ></img>
            <div
              className="prize prize-color"
              style={{ transform: "rotate(0deg)" }}
            >
              <div className="text-center text-base fs-6 font-bold">150</div>
              <div className="text-center text-xs">PI</div>
            </div>
            <div
              className="prize prize-color"
              style={{ transform: "rotate(45deg)" }}
            >
              <div className="text-center text-base fs-6 font-bold">250</div>
              <div className="text-center text-xs">PI</div>
            </div>
            <div
              className="prize prize-color"
              style={{ transform: "rotate(90deg)" }}
            >
              <div className="text-center text-base fs-6 font-bold">600</div>
              <div className="text-center text-xs">PI</div>
            </div>
            <div
              className="prize prize-color"
              style={{ transform: "rotate(135deg)" }}
            >
              <div className="text-center text-base fs-6 font-bold">1100</div>
              <div className="text-center text-xs">PI</div>
            </div>
            <div
              className="prize prize-color"
              style={{ transform: "rotate(180deg)" }}
            >
              <div className="text-center text-base fs-6 font-bold">5500</div>
              <div className="text-center text-xs">PI</div>
            </div>
            <div
              className="prize prize-color"
              style={{ transform: "rotate(225deg)" }}
            >
              <div className="text-center text-base fs-6 font-bold">15000</div>
              <div className="text-center text-xs">PI</div>
            </div>
            <div
              className="prize prize-color"
              style={{ transform: "rotate(270deg)" }}
            >
              <div className="text-center text-base fs-6 font-bold">60000</div>
              <div className="text-center text-xs">PI</div>
            </div>
            <div
              className="prize prize-color"
              style={{ transform: "rotate(315deg)" }}
            >
              <div className="text-center text-base fs-6 font-bold">100000</div>
              <div className="text-center text-xs">PI</div>
            </div>
            <div
              className="prize prize-color"
              style={{ transform: "rotate(360deg)" }}
            >
              <div className="text-center text-base fs-6 font-bold">150</div>
              <div className="text-center text-xs">PI</div>
            </div>
          </div>
          <p className="text-center">Number of draws available 0</p>
          <div className="d-flex align-items-center justify-content-center my-3">
            <Button variant="primary" className="custom-modal-btn">
              LOTTERY
            </Button>
          </div>
          <div className="my-5">
            <h2 className="d-flex align-items-center gap-3 text-white justify-content-center my-3 fs-4">
              Invite Now <MdDoubleArrow />
            </h2>
            <div className="d-flex mb-4 align-items-center gap-3 text-white justify-content-center my-3 fs-4">
              <button onClick={props.onHide} className="close-btn">
                <RxCrossCircled size={36} />
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Lottery;
