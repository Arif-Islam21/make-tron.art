import "../../styles/anouncement.css";

const Lottery = () => {
  return (
    <div className="van-popup van-popup--center base-lottery-wrap">
      <div className="container-wrap">
        <div className="flex justify-center mt-$mg relative">
          <div className="draw-wheel-box">
            <div className="draw-wheel"></div>

            <div
              className="prize prize-color"
              style={{ transform: "rotate(45deg)" }}
            >
              <div
                className="text-center text-base font-bold"
                style={{ fontSize: "14px" }}
              >
                150
              </div>
              <div className="text-center text-xs">TRUMP</div>
            </div>

            <div
              className="prize prize-color"
              style={{ transform: "rotate(90deg)" }}
            >
              <div
                className="text-center text-base font-bold"
                style={{ fontSize: "14px" }}
              >
                250
              </div>
              <div className="text-center text-xs">TRUMP</div>
            </div>

            <div
              className="prize prize-color"
              style={{ transform: "rotate(135deg)" }}
            >
              <div
                className="text-center text-base font-bold"
                style={{ fontSize: "14px" }}
              >
                600
              </div>
              <div className="text-center text-xs">TRUMP</div>
            </div>

            <div
              className="prize prize-color"
              style={{ transform: "rotate(180deg)" }}
            >
              <div
                className="text-center text-base font-bold"
                style={{ fontSize: "12px" }}
              >
                1100
              </div>
              <div className="text-center text-xs">TRUMP</div>
            </div>

            <div
              className="prize prize-color"
              style={{ transform: "rotate(225deg)" }}
            >
              <div
                className="text-center text-base font-bold"
                style={{ fontSize: "12px" }}
              >
                5500
              </div>
              <div className="text-center text-xs">TRUMP</div>
            </div>

            <div
              className="prize prize-color"
              style={{ transform: "rotate(270deg)" }}
            >
              <div
                className="text-center text-base font-bold"
                style={{ fontSize: "14px" }}
              >
                15000
              </div>
              <div className="text-center text-xs">TRUMP</div>
            </div>

            <div
              className="prize prize-color"
              style={{ transform: "rotate(315deg)" }}
            >
              <div
                className="text-center text-base font-bold"
                style={{ fontSize: "14px" }}
              >
                60000
              </div>
              <div className="text-center text-xs">TRUMP</div>
            </div>

            <div
              className="prize prize-color"
              style={{ transform: "rotate(360deg)" }}
            >
              <div
                className="text-center text-base font-bold"
                style={{ fontSize: "10px" }}
              >
                100000
              </div>
              <div className="text-center text-xs">TRUMP</div>
            </div>
          </div>

          <img
            src="/assets/zz5-Coku761J.png"
            className="roulette-pointer cp"
            alt="Roulette Pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Lottery;
