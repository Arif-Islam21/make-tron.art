import TaskCenterCard from "../../Cards/TaskCenterCard";

const TaskCenter = () => {
  const cardData = [
    {
      rewardName: "Level 1 team deposit reward",
      rewardAmount: 500000.0,
      rewardConditionDescription:
        "When your first-level subordinate deposit reaches 5500USDT, you can receive the reward, which is limited to 5 times a day.",
      dailyLimit: 5,
      progress: {
        received: 0,
        total: 5,
      },
      invitationRequirement: {
        invited: 0,
        required: 1,
        level: 1,
      },
    },
    {
      rewardName: "Daily invitation first-level team reward (1 member)",
      rewardAmount: 2500.0,
      rewardConditionDescription: "1 member of first-level team",
      dailyLimit: 1,
      progress: {
        received: 0,
        total: 1,
      },
      invitationRequirement: {
        invited: 0,
        required: 1,
        level: 1,
      },
    },
    {
      rewardName: "Daily invitation first-level team reward (3 members)",
      rewardAmount: 13500.0,
      rewardConditionDescription: "3 people in the first level team",
      dailyLimit: 1,
      progress: {
        received: 0,
        total: 1,
      },
      invitationRequirement: {
        invited: 0,
        required: 3,
        level: 1,
      },
    },
    {
      rewardName: "Rewards for inviting 3 level 3 teams",
      rewardAmount: 5500.0,
      rewardConditionDescription: "Level 3 team 3 people",
      dailyLimit: 1,
      progress: {
        received: 0,
        total: 1,
      },
      invitationRequirement: {
        invited: 0,
        required: 3,
        level: 3,
      },
    },
  ];

  return (
    <div className="my-4">
      <h2 className="fw-bold fs-4">Task Center</h2>
      <div>
        {cardData.map((reward, idx) => (
          <TaskCenterCard key={idx} reward={reward} />
        ))}
      </div>
    </div>
  );
};

export default TaskCenter;
