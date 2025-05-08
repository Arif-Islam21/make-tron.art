import { Card, ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/miningCardStyle.css";

const TaskCenterCard = ({ reward }) => {
  return (
    <Card className="mining-card">
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h3 className="card-title mb-0">{reward.rewardName}</h3>
          <span className="reward-amount">
            +{reward.rewardAmount.toLocaleString()}
          </span>
        </div>
        <Card.Text className="text-muted mb-2">
          {reward.rewardConditionDescription}
        </Card.Text>

        {reward.dailyLimit && (
          <Card.Text className="small text-muted mb-2">
            Limit: {reward.dailyLimit} / Day
          </Card.Text>
        )}

        {reward.progress && (
          <div className="mb-3">
            <ProgressBar
              now={(reward.progress.received / reward.progress.total) * 100}
              className="progress-bar-custom"
            />
            <div className="d-flex justify-content-between text-muted small">
              <span>{reward.progress.received}</span>
              <span>{reward.progress.total}</span>
            </div>
          </div>
        )}

        {reward.invitationRequirement && (
          <div className="invitation-info d-flex align-items-center">
            {/* <Users className="me-2 text-primary" size={16} /> */}
            <span className="small">
              {reward.invitationRequirement.invited} /{" "}
              {reward.invitationRequirement.required} Invites (Level{" "}
              {reward.invitationRequirement.level})
            </span>
          </div>
        )}
        <div className="mt-3">
          <button className="w-100 claim-button">Claim Reward</button>
        </div>
      </Card.Body>
    </Card>
  );
};

TaskCenterCard.propTypes = {
  reward: PropTypes.object,
};

export default TaskCenterCard;
