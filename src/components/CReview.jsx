import { Link } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
export const CReview = ({ cDet }) => {
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
          <div
            className="circle"
            style={{ backgroundColor: "rgba(91, 35, 245, 0.815)" }}
          ></div>
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
            <label style={{ float: "left" }}>Create Job Description</label>
            <Link to="/company">
              <button
                style={{
                  border: "1px solid  rgba(91, 35, 245, 0.815)",
                  borderRadius: "20px",
                  padding: "5px",
                  marginRight: "130px"
                }}
              >
                Edit
              </button>
            </Link>
            <label style={{ float: "right" }}>
              What role are you hiring for
            </label>
          </form>
          <div id="Ffilediv">
            <div className="CdispDiv">
              <h3>{cDet.role}</h3>
              <p>{cDet.cJD}</p>
            </div>
            <div id="Ffile">
              <p>Upload Candidates Resume</p>
              <div>
                <FileUploader />
              </div>

              <div>
                <p>Link your company Database</p>
                <button className="hbtn">Link</button>
              </div>
              <div>
                <p>Source Candidates Through Expertia</p>
              </div>
            </div>
          </div>

          <button
            className="hbtn"
            onClick={() => {
              alert("Result mailed");
            }}
            style={{ float: "right", width: "100px", marginTop: "5px" }}
          >
            Source Talent
          </button>
        </div>
      </div>
    </div>
  );
};
