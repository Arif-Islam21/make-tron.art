import "../../styles/vip.css";
import { Card, Button } from "react-bootstrap";
import pi from "../../assets/images/piCoins/icons/piCoins.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const VipNewAdditionCard = ({ item }) => {
  const { name, image, price, profitPerDay, durationDays } = item;
  return (
    // <Card className="gpu-card text-white my-4 w-100">
    //   <Card.Body>
    //     <h5 className="gpu-title fs-5">{name}</h5>

    //     <div className="d-flex gap-2 mt-3" style={{ minHeight: "120px" }}>
    //       <div
    //         className="flex-shrink-0 d-flex align-items-center"
    //         style={{ width: "45%" }}
    //       >
    //         <img
    //           src={image}
    //           alt={name}
    //           className="gpu-img w-100 rounded-2 h-auto"
    //           style={{ objectFit: "contain" }}
    //         />
    //       </div>

    //       <div
    //         className="gpu-details d-flex flex-column justify-content-start flex-fill text-start text-wrap"
    //         style={{ width: "55%" }}
    //       >
    //         <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
    //           <img src={pi} alt="profit" className="icon" />
    //           <span className="text-primary fw-bold text-break">
    //             {profitPerDay}/Days
    //           </span>
    //         </div>
    //         <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
    //           <div className="icon i-material-symbols:alarm w-20px h-20px rd-full bg-primary" />
    //           <span className="text-primary fw-bold text-break">
    //             {durationDays}Days
    //           </span>
    //         </div>
    //         <div className="d-flex align-items-center justify-content-between gap-2">
    //           <div className="mx-2 i-cryptocurrency-color:usdt w-20px h-20px rd-full bg-primary" />
    //           <span className="text-primary fw-bold text-break">{price}</span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="mt-3">
    //       <Link to="/recharge-method">
    //         <Button variant="primary" className="buy-btn w-100">
    //           BUY IT NOW
    //         </Button>
    //       </Link>
    //     </div>
    //   </Card.Body>
    // </Card>
    <Card
      className="gpu-card text-white my-3 w-100 border-0 rounded-4 p-3"
      style={{ backgroundColor: "#2b2c3b" }}
    >
      <Card.Body className="p-0 d-flex flex-column align-items-center text-center">
        <h5
          className="gpu-title fs-5 fw-bold mb-3"
          style={{ fontFamily: "monospace" }}
        >
          {name}
        </h5>

        <div className="d-flex flex-column align-items-center gap-2 w-100 mb-3">
          <img
            src={image}
            alt="RTX 4090"
            className="gpu-img rounded-3"
            style={{ width: "80%", height: "auto", objectFit: "contain" }}
          />

          <div
            className="bg-gradient text-dark rounded-3 px-3 py-2 w-100"
            style={{ maxWidth: "300px" }}
          >
            <div className="d-flex align-items-center justify-content-between mb-2">
              <img
                src={pi}
                alt="profit"
                style={{ width: "25px", borderRadius: "50%" }}
              />
              <span
                className="text-primary fw-bold text-end"
                style={{ color: "#0036ff" }}
              >
                {price}/Days
              </span>
            </div>

            <div className="d-flex align-items-center justify-content-between mb-2">
              <i
                className="i-material-symbols:alarm bg-primary rounded-circle"
                style={{ width: "20px", height: "20px" }}
              />
              <span
                className="text-primary fw-bold text-end"
                style={{ color: "#0036ff" }}
              >
                {profitPerDay}Days
              </span>
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <i
                className="i-cryptocurrency-color:usdt bg-primary rounded-circle"
                style={{ width: "20px", height: "20px" }}
              />
              <span
                className="text-primary fw-bold text-end"
                style={{ color: "#0036ff" }}
              >
                {price}
              </span>
            </div>
          </div>
        </div>

        <Link to="/recharge-method" className="w-100">
          <Button
            variant="primary"
            className="w-100 py-2 fw-bold text-uppercase"
            style={{
              backgroundColor: "#0036ff",
              border: "none",
              fontFamily: "monospace",
            }}
          >
            BUY IT NOW
          </Button>
        </Link>
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
