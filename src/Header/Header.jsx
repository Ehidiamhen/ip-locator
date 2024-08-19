import "./Header.css";
import arrow from "../assets/icon-arrow.svg";

export default function Header() {
  return (
    <div className="header rubik-fonts">
      <h1>IP Address Tracker</h1>
      <input
        type="search"
        name=""
        id=""
        required
        placeholder="Search for any IP address or domain"
      />
      <button type="submit">
        <img src={arrow} />
      </button>
      <div className="info">
        <p>
          <span>IP ADDRESS</span>
          <span>192.212.174.101</span>
        </p>
        <p>
          <span>LOCATION</span>
          <span>Brooklyn, NY 10001</span>
        </p>
        <p>
          <span>TIMEZONE</span>
          <span>UTC -05:00</span>
        </p>
        <p>
          <span>ISP</span>
          <span>SpaceX Starlink</span>
        </p>
      </div>
    </div>
  );
}
