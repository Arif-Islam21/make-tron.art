import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/style.css";
import "../assets/css/style2.css";
import "../assets/css/style3.css";
import "../assets/css/style4.css";
import "../assets/css/style5.css";
import "../assets/css/style6.css";
import "../assets/css/style7.css";
import "../assets/css/style8.css";
import "../assets/css/style9.css";
import "../styles/withdraw.css";

import logo from "../assets/images/1x/logoNew.png";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleHeader from "./extra/SingleHeader";
import SupportLink from "./extra/supportLink";
import TelegramPopUp from "./extra/TelegramPopUp";
import { Button, Form } from "react-bootstrap";

const withdraw = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [quota, setQuota] = useState("");
  const [actuallyReceived, setActuallyReceived] = useState(0);
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to control loader visibility

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/withdraw");
        setData(response.data);
        setAddress(response.data.user.crypto_address || "");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleQuotaChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    const withdrawVat = 0;
    const total = value - withdrawVat;

    if (total > 0) {
      setActuallyReceived(total);
    } else {
      setActuallyReceived(0);
    }

    setQuota(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setIsLoading(true);
    try {
      // Prepare the data to send
      const formData = {
        quota,
        address,
        password,
        type: "TRX",
        // Add any other necessary data here
      };

      // Send POST request
      const response = await axios.post("api/withdraw", formData);

      // Show the response message
      setAlertMessage(response.data.message || "Something happened");
      setAlertVisible(true);

      // After showing the message, check if status is true
      setTimeout(() => {
        setAlertVisible(false); // Hide the alert after 2 seconds

        if (response.data.status) {
          // If status is true, navigate to the desired URL
          navigate("/me"); // Example: navigate to a success page
        }
      }, 2000); // Wait 2 seconds before hiding the alert and checking status
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle the error (show error message, etc.)
      setAlertMessage("An error occurred. Please try again.");
      setAlertVisible(true);

      // Hide the alert after 2 seconds
      setTimeout(() => {
        setAlertVisible(false);
      }, 2000);
    } finally {
      setIsLoading(false); // Hide loader when the request is completed
    }
  };

  const { t } = useTranslation();
  // Telegram Popup
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);
  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };
  const [hideShowPass, setHideShowPass] = useState(false);
  const handlePassHideShow = () => {
    setHideShowPass(!hideShowPass);
  };
  return (
    <div id="app" className="a-t-1 no-4">
      <div className="box-border min-h-full w-full pt-45px">
        <SingleHeader></SingleHeader>
        <div className="withdraw-wrap25 p-$mg">
          <h2 className="fs-4 fw-bold my-3 px-4">Withdraw</h2>
          <div
            className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text"
            style={{ background: "#fff", color: "#000" }}
          >
            <div className="d-flex align-items-center justify-content-end">
              <button className="btn btn-primary">Show Records</button>
            </div>

            {alertVisible && (
              <div
                id="copyModal"
                role="dialog"
                className="van-popup van-popup--center van-toast van-toast--middle van-toast--text"
                style={{ zIndex: "200017", transition: ".3s all" }}
              >
                <div className="van-toast__text">{alertMessage}</div>
              </div>
            )}
            {isLoading ? <CustomLoader isLoading={isLoading} /> : null}
            <div
              data-v-0bc71186=""
              className="number"
              style={{
                background: "#7A034F",
              }}
            >
              <div className="title text-white ">
                {t("Currently available assets (TRX)")}
              </div>
              <div className="num">
                {data?.user?.withdraw_balance && data?.settingtrx?.conversion
                  ? (
                      data.user.withdraw_balance / data.settingtrx.conversion
                    ).toFixed(2)
                  : 0}
              </div>
            </div>

            <div className="my-3">
              <h3 className="fs-5 fw-semibold">withdrawal token</h3>
              <Link to="/withdraw-trx" id="trc20Usdt" className="trx-btn my-2">
                TRX
              </Link>
            </div>
            {/* Withdrawal method ends */}
            <form onSubmit={handleSubmit} action="#">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fs-5">Withdrawal address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter the TRX wallet address"
                  className="w-full"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fs-5">
                  Insert Your Desired Trx Amount To Withdraw:
                </Form.Label>
                <Form.Control
                  placeholder="Please enter the transfer ammount"
                  type="number"
                  step="0.01"
                  className="w-full"
                  name="quota"
                  value={quota}
                  onChange={handleQuotaChange}
                  autocomplete="number"
                />
              </Form.Group>

              <div className="d-flex align-items-center justify-content-between my-1">
                <h3>minimum withdrawal amount:</h3>
                <h4>5</h4>
              </div>
              <div className="d-flex align-items-center justify-content-between my-1">
                <h3>maximum withdrawal amount:</h3>
                <h4>999999</h4>
              </div>

              <div className="base-input is-password">
                <Form.Label className="fs-5">
                  Withdrawal Security Code
                </Form.Label>
                <div className="input-box">
                  <div className="input-left-slot"></div>
                  <input
                    type={hideShowPass ? "text" : "password"}
                    placeholder={t("Security Code")}
                    className="w-full withdraw_password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="input-pwd-eye-slot cursor-pointer"
                    onClick={handlePassHideShow}
                  >
                    <div className="input-pwd-eye text-black">
                      <div
                        className={`c_new_passeye2 ${
                          hideShowPass
                            ? "i-mdi-eye-outline"
                            : "i-mdi-eye-off-outline"
                        }`}
                      ></div>
                    </div>
                  </div>
                  <div className="input-right-slot"></div>
                </div>
              </div>
              {/* base-input ends */}
              <div>
                <div className="mt-10px flex items-center justify-between">
                  <span className="text-sm text-$text-gray">{t("Fee")}:</span>
                  <div className="text-right text-sm">
                    <del className="">0 TRX</del>
                  </div>
                </div>
                <div className="mt-10px flex items-center justify-between">
                  <span className="text-sm text-$text-gray">{t("Taxes")}:</span>
                  <div className="text-sm">{actuallyReceived} TRX</div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <Button
                    type="submit"
                    className="btn btn-primary my-3 d-flex align-items-center justify-content-center w-75"
                    style={{ maxWidth: "300px" }}
                    disabled={isLoading}
                  >
                    <div>
                      <span>{t("confirm")}</span>
                    </div>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <SupportLink /> */}
      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      />
    </div>
  );
};

export default withdraw;
