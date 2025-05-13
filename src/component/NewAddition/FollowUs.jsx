import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiKuaishou, SiTiktok } from "react-icons/si";
import "../../styles/team.css";
const FollowUs = () => {
  const data = [
    {
      name: "Twitter (X)",
      link: "https://twitter.com",
      icon: <FaXTwitter size={18} />,
    },
    {
      name: "Facebook",
      link: "https://facebook.com",
      icon: <FaFacebook size={18} />,
    },
    {
      name: "Telegram",
      link: "https://telegram.org",
      icon: <FaTelegramPlane size={18} />,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com",
      icon: <FaLinkedin size={18} />,
    },
    {
      name: "WhatsApp",
      link: "https://whatsapp.com",
      icon: <FaWhatsapp size={18} />,
    },
    {
      name: "Instagram",
      link: "https://instagram.com",
      icon: <FaInstagram size={18} />,
    },
    {
      name: "TikTok",
      link: "https://tiktok.com",
      icon: <SiTiktok size={18} />,
    },
    {
      name: "Kwai",
      link: "https://www.kwai.com",
      icon: <SiKuaishou size={18} />,
    },
  ];

  return (
    <div className="my-3">
      <h2 className="fs-5">Share To</h2>
      <div className="d-flex flex-wrap justify-content-start gap-3 mt-3">
        {data.map((icon, idx) => (
          <a
            className="share-icon d-flex align-items-center justify-content-center"
            key={idx}
          >
            {icon.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
