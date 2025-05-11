import picoin from "../../assets/images/piCoins/images/piImage.jpg";
import VipUpgradeCard from "./VipUpgradeCard";
const VipUpgrade = () => {
  const miningGpu = [
    {
      name: "RTX 4090 Mining 9",
      image: picoin,
      profitPerDay: "35,196,235.00",
      durationDays: 135,
      price: "50,000.00",
      action: "Buy It Now",
    },
    {
      name: "RTX 4080 Mining 8",
      image: picoin,
      profitPerDay: "9,881,573.00",
      durationDays: 120,
      price: "15,898.00",
      action: "Buy It Now",
    },
    {
      name: "RTX 4070 Mining 7",
      image: picoin,
      profitPerDay: "3,180,000.00",
      durationDays: 105,
      price: "5,189.00",
      action: "Buy It Now",
    },
    {
      name: "RTX 4060 Mining 6",
      image: picoin,
      profitPerDay: "2,280,000.00",
      durationDays: 90,
      price: "3,989.00",
      action: "Buy It Now",
    },
    {
      name: "RTX 3090 Mining 5",
      image: picoin,
      profitPerDay: "890,000.00",
      durationDays: 75,
      price: "1,500.00",
      action: "Buy It Now",
    },
    {
      name: "RTX 3080 Mining 4",
      image: picoin,
      profitPerDay: "456,750.00",
      durationDays: 60,
      price: "866.00",
      action: "Buy It Now",
    },
    {
      name: "RTX 3070 Mining 3",
      image: picoin,
      profitPerDay: "152,250.00",
      durationDays: 45,
      price: "299.00",
      action: "Buy It Now",
    },
    {
      name: "RTX 3060 Mining 2",
      image: picoin,
      profitPerDay: "44,750.00",
      durationDays: 30,
      price: "89.00",
      action: "Buy It Now",
    },
    {
      name: "RTX 3050 Mining 1",
      image: picoin,
      profitPerDay: "7,500.00",
      durationDays: 15,
      price: "15.00",
      action: "Buy It Now",
    },
  ];
  return (
    <div>
      {miningGpu.map((item, idx) => (
        <VipUpgradeCard key={idx} item={item} />
      ))}
    </div>
  );
};

export default VipUpgrade;
