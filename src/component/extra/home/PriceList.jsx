import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Binance from "../../../assets/images/coins/Binance.jpg";
import Bitcoin from "../../../assets/images/coins/Bitcoin.png";
import Cardano from "../../../assets/images/coins/Cardano.png";
import Dogecoin from "../../../assets/images/coins/Dogecoin.jpg";
import Ethereum from "../../../assets/images/coins/Ethereum.jpg";
import Litecoin from "../../../assets/images/coins/Litecoin.jpg";
import Polkadot from "../../../assets/images/coins/Polkadot.png";
import Ripple from "../../../assets/images/coins/Ripple.jpg";
import Shiba from "../../../assets/images/coins/Shiba.png";
import Solana from "../../../assets/images/coins/Solana.jpg";
import TRON from "../../../assets/images/coins/TRON.png";

const cryptoList = [
  { name: "Bitcoin", symbol: "btcusdt", logo: Bitcoin },
  { name: "TRON", symbol: "trxusdt", logo: TRON },
  { name: "Solana", symbol: "solusdt", logo: Solana },
  { name: "Cardano", symbol: "adausdt", logo: Cardano },
  { name: "Litecoin", symbol: "ltcusdt", logo: Litecoin },
  { name: "Ethereum", symbol: "ethusdt", logo: Ethereum },
  { name: "Ripple", symbol: "xrpusdt", logo: Ripple },
  { name: "Polkadot", symbol: "dotusdt", logo: Polkadot },
  { name: "Dogecoin", symbol: "dogeusdt", logo: Dogecoin },
  { name: "Binance Coin", symbol: "bnbusdt", logo: Binance },
  { name: "Shiba", symbol: "shibusdt", logo: Shiba },
];

const PriceList = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const streams = cryptoList.map((c) => `${c.symbol}@miniTicker`).join("/");
    const ws = new WebSocket(`wss://stream.binance.com:9443/stream?streams=${streams}`);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const symbol = data.data.s.toLowerCase(); // e.g. BTCUSDT -> btcusdt
      const price = parseFloat(data.data.c).toFixed(4); // c = close price
      setPrices((prev) => ({ ...prev, [symbol]: price }));
    };

    return () => {
      ws.close(); // cleanup on component unmount
    };
  }, []);

  return (
    <div className="my-4">
      <h2 className="fs-3 fw-semibold">Live Cryptocurrency Prices</h2>
      <Table striped className="rounded-1 mt-2">
        <thead>
          <tr>
            <th className="text-center">Cryptocurrency</th>
            <th className="text-center">Icon</th>
            <th className="text-center">Live Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          {cryptoList.map((crypto, index) => (
            <tr key={index}>
              <td className="text-center">{crypto.name}</td>
              <td className="text-center">
                <img style={{ height: "5vh", width: "5vh" }} src={crypto.logo} alt={crypto.name} />
              </td>
              <td className="text-center">
                {prices[crypto.symbol] ? `$${prices[crypto.symbol]}` : "Loading..."}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PriceList;
