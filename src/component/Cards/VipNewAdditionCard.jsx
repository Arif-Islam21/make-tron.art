import "../../styles/vip.css";
import { Card, Button } from "react-bootstrap";
import pi from "../../assets/images/piCoins/icons/piCoins.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const VipNewAdditionCard = ({ item }) => {
  const { name, image, price, profitPerDay, durationDays } = item;
  return (
    <Card className="gpu-card text-white my-4 w-100">
      <Card.Body>
        <h5 className="gpu-title fs-5">{name}</h5>

        <div className="d-flex gap-2 mt-3" style={{ minHeight: "120px" }}>
          <div
            className="flex-shrink-0 d-flex align-items-center"
            style={{ width: "45%" }}
          >
            <img
              src={image}
              alt={name}
              className="gpu-img w-100 rounded-2 h-auto"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div
            className="gpu-details d-flex flex-column justify-content-start flex-fill text-start text-wrap"
            style={{ width: "55%" }}
          >
            <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
              <img src={pi} alt="profit" className="icon" />
              <span className="text-primary fw-bold text-break">
                {profitPerDay}/Days
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
              <div className="icon i-material-symbols:alarm w-20px h-20px rd-full bg-primary" />
              <span className="text-primary fw-bold text-break">
                {durationDays}Days
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2">
              <div className="mx-2 i-cryptocurrency-color:usdt w-20px h-20px rd-full bg-primary" />
              <span className="text-primary fw-bold text-break">{price}</span>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <Link to="/recharge-method">
            <Button variant="primary" className="buy-btn w-100">
              BUY IT NOW
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

VipNewAdditionCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    profitPerDay: PropTypes.string.isRequired,
    durationDays: PropTypes.number.isRequired,
  }).isRequired,
};

export default VipNewAdditionCard;
