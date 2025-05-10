import TaskCenterCard from "../../Cards/TaskCenterCard";
import TasksCard from "../../Cards/TasksCard";

const TaskCenter = () => {
  const cardData = [
    {
      title: "Level 1 team rewards",
      reward: "+500,000.00",
      description:
        "When your first-level subordinate deposit reaches 5500 USDT, you can receive the reward, which is limited to 5 times a day.",
      progress: "0 / 5",
      invitees: {
        current: 0,
        required: 1,
      },
    },
    {
      title: "Daily invitation first-level team rewards",
      reward: "+2,500.00",
      description: "1 member of first-level team",
      progress: "0 / 1",
      invitees: {
        current: 1,
        required: 1,
      },
    },
    {
      title: "Daily invitation first-level team rewards",
      reward: "+13,500.00",
      description: "3 people in the first level team",
      progress: "0 / 1",
      invitees: {
        current: 1,
        required: 3,
      },
    },
    {
      title: "Rewards for inviting 3 level 3 teams",
      reward: "+5,500.00",
      description: "Level 3 team 3 people",
      progress: "0 / 1",
      invitees: {
        current: 2,
        required: 3,
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
      <TasksCard />
    </div>
  );
};

export default TaskCenter;
