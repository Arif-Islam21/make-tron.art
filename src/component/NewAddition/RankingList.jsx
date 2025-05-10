import HoldingRankingCard from "../Cards/HoldingRankingCard";

const RankingList = () => {
  const ranking = [
    { rank: 1, user: "zib******", amount: 48808965.0 },
    { rank: 2, user: "xii******", amount: 38567914.71 },
    { rank: 3, user: "+2*******", amount: 20714187.188 },
    { rank: 4, user: "ahm******", amount: 17660345.84 },
    { rank: 5, user: "lqb******", amount: 16161120.44 },
    { rank: 6, user: "810******", amount: 13655909.105 },
    { rank: 7, user: "han******", amount: 10306312.11 },
    { rank: 8, user: "+4*******", amount: 9711826.1685 },
    { rank: 9, user: "fsh******", amount: 9678815.1 },
    { rank: 10, user: "+1*******", amount: 9354261.586 },
    { rank: 11, user: "ha1******", amount: 9225867.488 },
    { rank: 12, user: "kit******", amount: 8984380.00083 },
    { rank: 13, user: "iuu******", amount: 8906928.971 },
    { rank: 14, user: "xii******", amount: 8842628.971 },
    { rank: 15, user: "Vyu******", amount: 8797192.971 },
    { rank: 16, user: "usm******", amount: 8742748.971 },
    { rank: 17, user: "you******", amount: 8732752.971 },
    { rank: 18, user: "uol******", amount: 8691675.345 },
    { rank: 19, user: "Tik******", amount: 8040771.345 },
    { rank: 20, user: "Stac*****", amount: 7879717.1485 },
    { rank: 21, user: "y01******", amount: 7583184.89556 },
    { rank: 22, user: "Trum*****", amount: 7386417.0 },
    { rank: 23, user: "isi******", amount: 7370104.0 },
    { rank: 24, user: "+2*******", amount: 7303398.882 },
    { rank: 25, user: "Ele******", amount: 6165699.316 },
    { rank: 26, user: "jia******", amount: 5851665.345 },
    { rank: 27, user: "vea******", amount: 5686506.4631 },
    { rank: 28, user: "yuy******", amount: 4943201.185 },
    { rank: 29, user: "80h******", amount: 4908565.0 },
    { rank: 30, user: "ili******", amount: 1993338.758 },
    { rank: 31, user: "김정의 *****", amount: 1992450.1182 },
    { rank: 32, user: "ame******", amount: 1938765.0 },
    { rank: 33, user: "+4*******", amount: 1763400.0 },
    { rank: 34, user: "pan******", amount: 1682013.18 },
    { rank: 35, user: "Buns*****", amount: 1379429.941 },
    { rank: 36, user: "ass******", amount: 944816.0 },
    { rank: 37, user: "영숙 남*****", amount: 928060.3094 },
    { rank: 38, user: "정옥 김*****", amount: 801173.872 },
    { rank: 39, user: "Andy*****", amount: 769633.0 },
    { rank: 40, user: "석영 황*****", amount: 768599.36 },
    { rank: 41, user: "kin******", amount: 766276.7455 },
    { rank: 42, user: "h********", amount: 763581.0 },
    { rank: 43, user: "qwe******", amount: 757581.0 },
    { rank: 44, user: "pha******", amount: 709080.239 },
    { rank: 45, user: "Will*****", amount: 705593.32099 },
    { rank: 46, user: "rix******", amount: 688337.0 },
    { rank: 47, user: "bab******", amount: 680361.1077 },
    { rank: 48, user: "sil******", amount: 677337.487 },
    { rank: 49, user: "ami******", amount: 636562.0 },
    { rank: 50, user: "fai******", amount: 574565.215 },
  ];

  return (
    <div>
      {ranking.map((rank) => (
        <HoldingRankingCard key={rank.rank} rank={rank} />
      ))}
    </div>
  );
};

export default RankingList;
