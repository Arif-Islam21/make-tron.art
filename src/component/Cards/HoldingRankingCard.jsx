import { GoDash } from "react-icons/go";
import { IoMdPerson } from "react-icons/io";
import piImg from "../../assets/images/piCoins/icons/piCoins.png";

const HoldingRankingCard = ({ rank }) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="card custom-rank-card d-flex gap-4 flex-row align-items-center p-3 mb-3">
        <div className="icon-container me-2">
          <h4 className="px-2 fs-5 fw-semibold">{rank.rank}</h4>
          <IoMdPerson size={28} />
          <span className="user-email text-white fw-bold">{rank.user}</span>
        </div>

        <div className="d-flex align-items-center ms-auto">
          <img
            src={piImg}
            alt="Avatar"
            className="rounded-circle avater me-2"
          />
          <span className="amount text-white fw-bold">{rank.amount}</span>
        </div>
      </div>
    </div>
  );
};

export default HoldingRankingCard;
