import { FaWhatsapp } from "react-icons/fa";
import "./whatsapp.css";

export default function WhatsAppIcon() {
  const phone = "+447491896532"; // NO + sign

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      className="wa-button"
    >
      <FaWhatsapp />
    </a>
  );
}