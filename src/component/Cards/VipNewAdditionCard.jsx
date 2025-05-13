import "../../styles/vip.css";
import { Card, Button } from "react-bootstrap";
import pi from "../../assets/images/piCoins/icons/piCoins.png";
import clock from "../../assets/images/piCoins/images/clock.jpg";
import tron from "../../assets/images/piCoins/images/tron.png";

const VipNewAdditionCard = ({ item }) => {
  const { name, image, price, days, profitPerDay, durationDays } = item;
  return (
    <Card className="gpu-card text-white my-4 w-100">
      <Card.Body>
        <h5 className="gpu-title fs-5">{name}</h5>

        <div className="d-flex gap-3 mt-3" style={{ minHeight: "120px" }}>
          <div className="flex-shrink-0 d-flex align-items-center">
            <img src={image} alt={name} className="gpu-img" />
          </div>

          <div className="gpu-details d-flex flex-column justify-content-center flex-fill text-start text-wrap">
            <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
              <img src={pi} alt="profit" className="icon" />
              <span className="text-primary fw-bold text-break">
                {profitPerDay}/Days
              </span>
            </div>
            <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
              <img src={clock} alt="time" className="icon" />
              <span className="text-primary text-break">
                {durationDays}Days
              </span>
            </div>
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <img src={tron} alt="price" className="icon" />
              <span className="text-primary text-break">{price}</span>
            </div>
          </div>
        </div>

        <Button variant="primary" className="buy-btn mt-4 w-100">
          BUY IT NOW
        </Button>
      </Card.Body>
    </Card>
  );
};

export default VipNewAdditionCard;
