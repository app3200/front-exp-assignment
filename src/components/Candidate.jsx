import { FileUploader } from "react-drag-drop-files";
import { Link } from "react-router-dom";
import { useState } from "react";
export const Candidate = ({ setPdet }) => {
  const [file, setFile] = useState();
  const [det, setDet] = useState({});

  const handleChange = (file) => {
    setFile(file);
    setDet({ rfile: file });
  };
  const handle = (n, v) => {
    setDet({
      ...det,
      [n]: v
    });
  };

  function check() {
    if (det.rfile === undefined && det.url === undefined) {
      alert("Enter details properly");
      return;
    }
    if (det.Presume === undefined) {
      alert("enter details properly");
      return;
    }
    alert("You will be notified soon");
    setPdet(det);
  }
  console.log(det);
  return (
    <div id="cmdiv">
      <div style={{ width: "80%" }}>
        <div style={{ float: "left", marginLeft: "20px" }}>
          <p>
            <input type="radio" />
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
          <p>Upload Resume</p>
          <div>
            <hr />
          </div>
          <div className="circle"></div>
          <p>Opportunities</p>
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
          <div style={{ width: "100%" }}>
            <h4 style={{ float: "left", marginLeft: "60px" }}>
              Upload your Resume
            </h4>
          </div>
          <div id="Pfilediv">
            <div className="Prdiv">
              <p>Upload your resume</p>
              <br />
              <br />
              <br />
              <div>
                <FileUploader handleChange={handleChange} />
              </div>
            </div>
            <div className="Prdiv">
              <p>Link a URL</p>
              <input
                onChange={(e) => {
                  handle(e.target.name.e.target.value);
                }}
                style={{
                  width: " 300px",
                  borderRadius: "10px",
                  marginTop: "100px"
                }}
                name="url"
              />
            </div>
          </div>
          <div id="txtdiv">
            <div>
              <p>Create your Resume</p>
              <textarea
                onChange={(e) => {
                  handle(e.target.name, e.target.value);
                }}
                name="Presume"
                placeholder="start typing your skills"
              />
            </div>
          </div>
          {/* <Link to="/compfinal"> */}
          <button
            className="hbtn"
            type="submit"
            style={{ float: "right", marginTop: "5px" }}
            onClick={() => {
              check();
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
