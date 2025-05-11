import "../../styles/vip.css";
import { Card, Button } from "react-bootstrap";
import pi from "../../assets/images/piCoins/icons/piCoins.png";
import clock from "../../assets/images/piCoins/images/clock.jpg";
import tron from "../../assets/images/piCoins/images/tron.png";
const VipUpgradeCard = ({ item }) => {
  const { name, image, price, profitPerDay, durationDays } = item;
  return (
    <Card className="gpu-card text-white my-4">
      <Card.Body>
        <h5 className="gpu-title fs-4">{name}</h5>

        <div className="d-flex align-items-center gap-3">
          <img src={image} alt={name} className="gpu-img" />

          <div className="gpu-details text-center">
            <div className="d-flex align-items-center gap-2">
              <img src={pi} alt="profit" className="icon" />
              <span className="text-primary fw-bold">{profitPerDay}/Days</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img src={clock} alt="time" className="icon" />
              <span className="text-primary">{durationDays}Days</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img src={tron} alt="price" className="icon" />
              <span className="text-primary">{price}</span>
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

export default VipUpgradeCard;
