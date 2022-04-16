import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="hdiv">
      <div
        style={{
          width: "80%",
          margin: "auto",
          textAlign: "left",
          marginBottom: "60px"
        }}
      >
        <p>Great!</p>
        <p>What are you looking for</p>
      </div>
      <Link to="/company">
        <button className="hbtn">To Hire</button>
      </Link>
      <br />
      <Link to="/prof">
        <button id="abtn">To Apply</button>
      </Link>
    </div>
  );
};
