import {
  FaCalendar,
  FaChartLine,
  FaEnvelopeOpenText,
  FaRegClock,
} from "react-icons/fa";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" style={{ marginBottom: "1.5rem" }}>
      <h3>React Icons Sampler</h3>
      <div style={{ display: "flex", gap: "0.5rem", fontSize: "1.75rem" }}>
        <VscAccount />
        <FaChartLine />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
      </div>
    </div>
  );
}
