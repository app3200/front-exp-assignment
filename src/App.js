import "./styles.css";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { Company } from "./components/company";
import { useState } from "react";
import { CReview } from "./components/CReview";
import { Candidate } from "./components/Candidate";
export default function App() {
  const [cDet, setCdet] = useState({});
  console.log(cDet);
  const [pDet, setPdet] = useState({});
  console.log(pDet);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/company"
          element={
            <div>
              <Sidebar />
              <Company setCdet={setCdet} />
            </div>
          }
        />
        <Route
          path="/compfinal"
          element={
            <div>
              <Sidebar />
              <CReview cDet={cDet} />
            </div>
          }
        />
        <Route
          path="/prof"
          element={
            <div>
              <Sidebar />
              <Candidate setPdet={setPdet} />
            </div>
          }
        />
      </Routes>
    </div>
  );
}
