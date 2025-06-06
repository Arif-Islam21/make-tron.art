import { useNavigate } from "react-router-dom";
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
import "../assets/css/style10.css";
import "../assets/css/style11.css";

import logo from "../assets/images/1x/logoNew.png";
import trc20 from "../assets/images/trc20-usdt.jpg";
import CopyAddress from "./extra/copyAddress";
import "../assets/css/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleHeader from "./extra/SingleHeader";
import SupportLink from "./extra/supportLink";
import TelegramPopUp from "./extra/TelegramPopUp";

import CustomLoader from "./extra/customLoader";
import Loader from "./extra/loader";
import { FaExclamation } from "react-icons/fa";

const Recharge = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const qrCodeUrl = `https://barcode.tec-it.com/barcode.ashx?data=${encodeURIComponent(
    data.address_base58
  )}&code=QRCode&eclevel=L`;

  const [isLoader, setIsLoader] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleClick = () => {
    const fetchDeposit = async () => {
      setIsLoader(true);
      try {
        const params = {
          type: "USDT",
        };
        const response = await axios.get("api/deposite-information", {
          params,
        });

        setAlertMessage(response.data.message || "Something happened");
        setAlertVisible(true);
        setTimeout(() => {
          setAlertVisible(false);
          navigate("/me");
        }, 2000);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoader(false); // Hide loader when the request is completed
      }
    };

    fetchDeposit();
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoader(true); // Show loader during initial data fetch
      try {
        const response = await axios.get("api/trxaddress");

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoader(false); // Hide loader after data is fetched
      }
    };

    fetchData();
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };
  // telegram popup
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);
  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = () => {
    // Logic to copy content goes here

    // Show the modal
    setIsCopied(true);

    // Hide the modal after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <div id="app" className="a-t-1 no-4">
      <div className="box-border min-h-full w-full pt-45px">
        <SingleHeader></SingleHeader>

        <div data-v-e0ca97fe="" className="recharge-wrap p-$mg">
          <div
            data-v-e0ca97fe=""
            className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text"
            style={{ background: "#383847" }}
          >
            {/* <div
              data-v-e0ca97fe=""
              className=":uno: base-logo flex items-center small-logo"
            >
              <img
                className="site-img h-full w-full rd-50%"
                src={logo}
                alt="logo"
              />
              <div className=":uno: site-name ml-8px">Make-Tron.Art</div>
            </div> */}

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
            <CustomLoader />
            {isLoader ? <Loader /> : null}

            {/* trc20USD ends */}
            <div
              data-v-e0ca97fe=""
              className=":uno: mt-25px flex justify-center"
            >
              <div
                data-v-e0ca97fe=""
                className=":uno: h-164px w-164px flex items-center justify-center border rd-10px bg-white shadow-$box-shadow"
              >
                <div
                  data-v-e0ca97fe=""
                  className="qrcode"
                  title="TC6r7P42Txn3PoCvxC4M9o4kKQ5wQWe33Q"
                >
                  <img
                    alt="Scan me!"
                    id="tokenQrCode"
                    style={{ width: "140px" }}
                    src={qrCodeUrl}
                  />
                </div>
              </div>
            </div>
            <div
              data-v-e0ca97fe=""
              className="my-20px flex items-center justify-center"
            >
              <img
                data-v-e0ca97fe=""
                className="h-30px w-30px"
                src={trc20}
                alt="logo"
              />
              <span data-v-e0ca97fe="" className="ml-4px font-bold">
                TRC20-USDT
              </span>
            </div>
            {/* qrcode ends */}
            <div
              data-v-e0ca97fe=""
              className=":uno: my-$mg text-start text-white text-18px font-bold"
            >
              {t("Deposit Address")}
            </div>
            <CopyAddress
              address={data.address_base58}
              handleCopyClick={handleCopyClick}
            />
            <a
              data-v-e0ca97fe=""
              id="btndsb"
              className=":uno: base-main-btn flex items-center justify-center "
            >
              <div className="base-main-btn-content" onClick={handleClick}>
                <span data-v-e0ca97fe="">{t("recharge_completed")}</span>
              </div>
            </a>
          </div>
          <div
            data-v-e0ca97fe=""
            id="bottomInfo"
            className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-4"
            style={{ background: "#383847" }}
          >
            <div className="rich-text text-base">
              <h2 className="d-flex align-items-center justify-content-start my-3">
                <FaExclamation /> <span>Warm reminder</span>
              </h2>
              <p>
                <span style={{ fontSize: "10pt" }}>
                  {t("recharge_notice_1")}
                </span>
              </p>
              <p>
                <span style={{ fontSize: "10pt" }}>
                  {t("recharge_notice_2")}
                </span>
              </p>
              <p>
                <span style={{ fontSize: "10pt" }}>
                  {t("recharge_notice_3")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* support section */}
      {isCopied && (
        <div
          id="copyModal"
          role="dialog"
          className="van-popup van-popup--center van-toast van-toast--middle van-toast--text"
          style={{ zIndex: "200017", transition: ".3s all" }}
        >
          <div className="van-toast__text">{t("copied_successfully")}</div>
        </div>
      )}
      <CustomLoader />
      <TelegramPopUp
        isTelegramVisible={isTelegramVisible}
        toggleTelegramPopUp={toggleTelegramPopUp}
      />
    </div>
  );
};

export default Recharge;
