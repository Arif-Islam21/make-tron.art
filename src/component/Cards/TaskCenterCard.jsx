import PropTypes from "prop-types";
import "../../styles/miningCardStyle.css";

const TaskCenterCard = ({ reward }) => {
  return (
    <div className="reward-card card shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0">{reward.title}</h5>
          <span className="reward-amount">{reward.reward}</span>
        </div>

        <p className="card-text mb-3">{reward.description}</p>

        <div className="reward-stats d-flex justify-content-between mb-1">
          <small>Progress:</small>
          <small>
            <strong>0 / 5</strong>
          </small>
        </div>

        <div className=" d-flex p-3 flex-column gap-3">
          <h4 className="fw-semibold ">Invitees</h4>
          <div className="progress-container">
            <div
              className="progress-bar"
              // style={{
              //   width: "100%",
              // }}
              style={{
                width: `${
                  (reward.invitees.current / reward.invitees.required) * 100
                }`,
              }}
            ></div>
          </div>
          {/* <p className="progress-label">1 / 3</p> */}
        </div>
      </div>
    </div>
  );
};

TaskCenterCard.propTypes = {
  reward: PropTypes.object,
};

export default TaskCenterCard;
