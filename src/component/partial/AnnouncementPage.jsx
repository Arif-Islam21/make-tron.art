import { useState } from "react";
import Header from "../extra/Header";
import TelegramPopUp from "../extra/TelegramPopUp";
import Navbar from "./navbar";
import "../../styles/anouncement.css";
import { Card, Container } from "react-bootstrap";

const AnnouncementPage = () => {
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);

  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };
  return (
    <div id="app" className="a-t-1 no-4">
      <div className="layout-tab-bar box-border min-h-full w-full px-$mg pb-60px">
        <Header toggleTelegramPopUp={toggleTelegramPopUp}></Header>
        <div className="index-wrap">
          <Container className="mt-4">
            <Card className="p-4 shadow-sm rounded-4">
              <Card.Body>
                <section className="mb-4">
                  <p>
                    Join <strong>Make-Tron.art</strong> now to start your
                    quantitative investment journey and enjoy the wealth
                    appreciation opportunities brought by Make-Tron wisdom!
                  </p>
                  <p>
                    <strong>Minimum Investment:</strong> 10 USDT
                  </p>
                  <p>
                    <strong>Minimum Withdraw:</strong> 2 USDT
                  </p>
                  <p>
                    <strong>Official Support: </strong>
                    <a
                      href="https://t.me/CAREMAKETRON09"
                      target="_blank"
                      rel="noreferrer"
                      className="custom-link"
                    >
                      https://t.me/CAREMAKETRON09
                    </a>
                  </p>
                  <p>
                    <strong>Official registration link:</strong>
                    <br />
                    <a
                      href="https://www.make-tron.art/#/register?ic=7365654"
                      target="_blank"
                      rel="noreferrer"
                      className="custom-link"
                    >
                      https://www.make-tron.art/#/register?ic=7365654
                    </a>
                  </p>
                  <p>
                    <strong>Official alternate website:</strong>
                    <br />
                    <a
                      href="https://www.make-tron.art"
                      target="_blank"
                      rel="noreferrer"
                      className="custom-link"
                    >
                      https://www.make-tron.art
                    </a>
                  </p>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold">INVESTMENT LEVEL:</h5>
                  <ul className="mb-0">
                    <li>Deposit: 10-1500 USDT - Daily income of 7%</li>
                    <li>Deposit: 1501-4000 USDT - Daily income of 9%</li>
                    <li>Deposit: 4001-7000 USDT - Daily income of 11%</li>
                    <li>Deposit: 7001-10000 USDT - Daily income of 13%</li>
                    <li>Deposit: 10001-20000 USDT - Daily income of 16%</li>
                    <li>Deposit: 20001-50000 USDT - Daily income of 19%</li>
                  </ul>
                </section>

                <section className="mb-4">
                  <p>
                    Make-Tron.art is the world&apos;s leading intelligent
                    quantitative investment platform, specially designed for
                    USDT investors. Our Tron evaluation system unlocks different
                    levels of income based on deposit amount.
                  </p>
                  <p>
                    We use intelligent arbitrage between exchanges to buy low on
                    one, sell high on another, helping users earn and reach
                    financial freedom.
                  </p>
                  <p>
                    The recharge amount activates a VIP level with exclusive
                    income. Minimum quantization is 10 USDT; minimum withdrawal
                    is 2 USDT.
                  </p>
                </section>

                <section className="mb-4">
                  <h5 className="fw-bold">Agent Cooperation:</h5>
                  <p>
                    Share your invitation link on social platforms to earn
                    commissions across 3 tiers:
                  </p>
                  <ul>
                    <li>A Level: 10% rebate</li>
                    <li>B Level: 2% rebate</li>
                    <li>C Level: 1% rebate</li>
                  </ul>
                  <p>
                    Example: If you're in Class A and a deposit of 1,000 USDT
                    occurs, you can earn 130 USDT (10% + 2% + 1%).
                  </p>
                </section>

                <footer className="text-center mt-4 text-muted small">
                  &copy; 2025 Make-Tron.art. All rights reserved.
                </footer>
              </Card.Body>
            </Card>
          </Container>
        </div>

        <Navbar></Navbar>
      </div>
      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      />
    </div>
  );
};

export default AnnouncementPage;
