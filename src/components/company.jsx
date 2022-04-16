import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export const Company = ({ setCdet }) => {
  const [det, setDet] = useState({});

  const handle = (n, v) => {
    setDet({
      ...det,
      [n]: v
    });
  };

  const addDet = () => {
    if (det.url === undefined && det.cJD === undefined) {
      alert("Enter proper details");
      return;
    }
    if (det.cName === "undefined" || det.role === undefined) {
      alert("Enter proper details");
      return;
    }
    setCdet(det);
    return <Navigate to="/compfinal" />;
  };

  return (
    <div id="cmdiv">
      <div style={{ width: "80%" }}>
        <div style={{ float: "left", marginLeft: "20px" }}>
          <p>
            <input type="radio" /> Your Company Name
          </p>
        </div>
        <div style={{ float: "right", marginTop: "10px" }}>
          <button className="hbtn">Sign Up</button>
        </div>
      </div>
      <div id="cfdiv">
        <div id="statdiv">
          <div>
            <hr />
          </div>
          <div
            className="circle"
            style={{ backgroundColor: "rgba(91, 35, 245, 0.815)" }}
          ></div>
          <p>Upload/Create JD</p>
          <div>
            <hr />
          </div>
          <div className="circle"></div>
          <p>Source Candidates</p>
          <div>
            <hr />
          </div>
          <div className="circle"></div>
          <p>Get Result</p>
          <div>
            <hr />
          </div>
        </div>
        <div>
          <form id="frm">
            <label style={{ float: "left" }}>Tell us your Company Name</label>
            <label style={{ float: "right" }}>
              What role are you hiring for
            </label>
            <br />
            <input
              type="text"
              name="Cname"
              onChange={(e) => {
                handle(e.target.name, e.target.value);
              }}
              style={{ float: "left" }}
              required
            />
            <input
              type="text"
              name="role"
              onChange={(e) => {
                handle(e.target.name, e.target.value);
              }}
              style={{ float: "right" }}
              required
            />
          </form>
          <div id="filediv">
            <div>
              <p>Upload a JD file</p>
              <br />
              <br />
              <br />
              <div>
                <FileUploader />
              </div>
            </div>
            <div>
              <p>Link a URL</p>
              <img
                style={{ width: "80%", height: "60%" }}
                alt="logo"
                src="data:image/png;base64,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"
              />
              <input
                style={{
                  width: " 300px",
                  borderRadius: "10px"
                }}
                name="url"
                onChange={(e) => {
                  handle(e.target.name, e.target.value);
                }}
              />
            </div>
          </div>
          <div id="txtdiv">
            <div>
              <p>Create a new JD with Expertia</p>
              <textarea
                name="cJD"
                onChange={(e) => {
                  handle(e.target.name, e.target.value);
                }}
                placeholder="start typing your requirements"
              />
            </div>
          </div>
          {/* <Link to="/compfinal"> */}
          <button
            className="hbtn"
            type="submit"
            style={{ float: "right", marginTop: "5px" }}
            onClick={() => {
              addDet();
            }}
          >
            Next
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};
