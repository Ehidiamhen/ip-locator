import "./Header.css";
import arrow from "../assets/icon-arrow.svg";
import { useState } from "react";

export default function Header({ data, onSubmit }) {
  const [term, setTerm] = useState('')
  
  const handleSearchSubmit = (event) => {
    event.preventDefault()
    onSubmit(term)
    setTerm('')
  }

  const handleChange = (event) => {
    setTerm(event.target.value)
  }

  return (
    <div className="header rubik-fonts">
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleSearchSubmit}>
      <input
        type="search"
        value={term}
        onChange={handleChange}
        name=""
        id=""
        required
        placeholder="Search for any IP address"
      />
      <button type="submit" >
        <img src={arrow} />
      </button>
      </form>
      <div className="info">
        <p>
          <span>IP ADDRESS</span>
          <span>{data?.ip}</span>
        </p>
        <p>
          <span>LOCATION</span>
          <span>{data?.city}, {data?.country_code2} {data?.zipcode}</span>
        </p>
        <p>
          <span>TIMEZONE</span>
          <span>UTC {data?.time_zone?.offset}:00</span>
        </p>
        <p>
          <span>ISP</span>
          <span>{data?.isp}</span>
        </p>
      </div>
    </div>
  );
}
