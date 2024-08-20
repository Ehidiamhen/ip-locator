import "./Header.css";
import arrow from "../assets/icon-arrow.svg";

export default function Header(props) {
  const {data} = props
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
          <span>{data?.ip}</span>
        </p>
        <p>
          <span>LOCATION</span>
          <span>{data?.location?.city}, {data?.location?.region}, {data?.location?.country}</span>
        </p>
        <p>
          <span>TIMEZONE</span>
          <span>{data?.location?.timezone}</span>
        </p>
        <p>
          <span>ISP</span>
          <span>{data?.isp}</span>
        </p>
      </div>
    </div>
  );
}
