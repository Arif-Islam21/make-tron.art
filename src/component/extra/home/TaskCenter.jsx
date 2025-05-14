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
        current: 1,
        required: 3,
      },
    },
    {
      title: "Level 2 team rewards",
      reward: "+300000",
      description:
        "When your first-level subordinate deposit reaches 2500 USDT, you can receive the reward, which is limited to 5 times a day.",
      progress: "0 / 1",
      invitees: {
        current: 2,
        required: 3,
      },
    },
    {
      title: "Level 3 team rewards",
      reward: "+200000",
      description:
        "When your first-level subordinate deposit reaches 1500 USDT, you can receive the reward, which is limited to 5 times a day.",
      progress: "0 / 1",
      invitees: {
        current: 3,
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
