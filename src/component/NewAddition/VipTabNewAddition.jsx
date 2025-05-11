import VipNewAdditionCard from "../Cards/VipNewAdditionCard";
import rtx1 from "../../assets/images/piCoins/images/rtx1.jpg";
import rtx2 from "../../assets/images/piCoins/images/rtx2.jpg";
import rtx3 from "../../assets/images/piCoins/images/rtx3.jpg";
import rtx4 from "../../assets/images/piCoins/images/rtx4.jpg";
import rtx5 from "../../assets/images/piCoins/images/rtx5.jpg";
import rtx6 from "../../assets/images/piCoins/images/rtx6.jpg";
import rtx7 from "../../assets/images/piCoins/images/rtx7.jpg";
import rtx8 from "../../assets/images/piCoins/images/rtx8.jpg";
import rtx9 from "../../assets/images/piCoins/images/rtx9.jpg";

const VipTabNewAddition = () => {
  const miningGpu = [
    {
      name: "RTX 4090 Mining 9",
      image: rtx1,
      profitPerDay: "35,196,235.00",
      durationDays: 135,
      price: "50,000.00",
      action: "Buy It Now",
    },
    {
      name: "RTX 4080 Mining 8",
      image: rtx2,
      profitPerDay: "9,881,573.00",
      durationDays: 120,
      price: "15,898.00",
      action: "Buy It Now",
    },
    {
      name: "RTX 4070 Mining 7",
      image: rtx3,
      profitPerDay: "3,180,000.00",
      durationDays: 105,
      price: "5,189.00",
      action: "Buy It Now",
    },
    {
      name: "RTX 4060 Mining 6",
      image: rtx4,
      profitPerDay: "2,280,000.00",
      durationDays: 90,
      price: "3,989.00",
      action: "Buy It Now",
    },
    {
      name: "RTX 3090 Mining 5",
      image: rtx5,
      profitPerDay: "890,000.00",
      durationDays: 75,
      price: "1,500.00",
      action: "Buy It Now",
    },
    {
      name: "RTX 3080 Mining 4",
      image: rtx6,
      profitPerDay: "456,750.00",
      durationDays: 60,
      price: "866.00",
      action: "Buy It Now",
    },
    {
      name: "RTX 3070 Mining 3",
      image: rtx7,
      profitPerDay: "152,250.00",
      durationDays: 45,
      price: "299.00",
      action: "Buy It Now",
    },
    {
      name: "RTX 3060 Mining 2",
      image: rtx8,
      profitPerDay: "44,750.00",
      durationDays: 30,
      price: "89.00",
      action: "Buy It Now",
    },
    {
      name: "RTX 3050 Mining 1",
      image: rtx9,
      profitPerDay: "7,500.00",
      durationDays: 15,
      price: "15.00",
      action: "Buy It Now",
    },
  ];

  return (
    <div>
      {miningGpu.map((item, idx) => (
        <VipNewAdditionCard key={idx} item={item} />
      ))}
    </div>
  );
};

export default VipTabNewAddition;
