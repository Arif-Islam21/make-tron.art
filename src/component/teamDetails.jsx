//all packages
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

//all css/images
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
import "../styles/team.css";

//component
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import SingleHeader from "./extra/SingleHeader";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const Financial = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const level = query.get("level");

  const [data, setData] = useState({});
  console.log(data);
  const [isLoading, setIsLoading] = useState(false); // State to control loader visibility

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Show loader during initial data fetch
      try {
        const response = await axios.get(`api/team/details?level=${level}`);

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Hide loader after data is fetched
      }
    };

    fetchData();
  }, []);

  const formatEmailOrPhone = (value) => {
    if (!value) return "";

    // Check if the value is an email and contains '@gmail.com'
    if (value.includes("@gmail.com")) {
      const [localPart] = value.split("@");
      if (localPart.length <= 4) return value; // Return the whole email if it's too short to mask

      const firstTwo = localPart.slice(0, 2);
      const lastTwo = localPart.slice(-2);
      return `${firstTwo}***@gmail.com`;
    }

    // Otherwise, process as a phone number or other email
    const length = value.length;
    if (length <= 4) return value; // Return the whole value if it's too short to extract first and last two digits

    const firstTwo = value.slice(0, 2);
    const lastTwo = value.slice(-2);
    return `${firstTwo}...${lastTwo}`;
  };

  const handleBackClick = () => {
    navigate(-1);
  };
  const { t } = useTranslation();
  // Telegram Popup
  const [isTelegramVisible, setIsTelegramVisible] = useState(false);
  const toggleTelegramPopUp = () => {
    setIsTelegramVisible(!isTelegramVisible);
  };

  return (
    <div>
      <div id="app" className="a-t-26 no-4">
        <div className="box-border min-h-full w-full pt-45px">
          <SingleHeader></SingleHeader>

          <div team-details="" className="team-detail-wrap p-$mg">
            {/* <Table responsive striped bordered className="bg-white">
              <thead>
                <tr className="text-center">
                  <th>Accountss</th>
                  <th>Commission</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {data?.rebetas?.length > 0 ? (
                  data.rebetas.map((rebeta) => (
                    <tr key={rebeta.id}>
                      <td>{formatEmailOrPhone(rebeta.email_phone)}</td>
                      <td>{parseFloat(rebeta.commission).toFixed(2)}</td>
                      <td>{new Date(rebeta.joining_date).toLocaleString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3}>No Data</td>
                  </tr>
                )}
              </tbody>
            </Table> */}
          </div>

          <div className="details-container">
            <h2 className="text-white fs-6 fw-semibold">
              ${formatEmailOrPhone("history.hello@GoMail.com")}
            </h2>
            <div>
              <div className="d-flex align-items-center justify-content-between my-2">
                <h3 className="w-100 text-gray">Registration:</h3>
                <h3 className="text-start w-100">13/05/2025</h3>
              </div>
              <div className="d-flex align-items-center justify-content-between my-2">
                <h3 className="w-100 text-gray">Date:</h3>
                <h3 className="text-start w-100">13/05/2025</h3>
              </div>
              <div className="d-flex align-items-center justify-content-between my-2">
                <h3 className="w-100 text-gray">First Level Invite Count:</h3>
                <h3 className="text-start w-100">0</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;
