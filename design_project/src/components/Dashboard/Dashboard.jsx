import React from "react";
import "./dashboard.css";
import SideNav from "../SideNav/SideNav";
import BodyContent from "../BodyContent/BodyContent";

export default function Dashboard() {
  return (
    <div className="dashboard-div">
      <SideNav />
      <BodyContent />
    </div>
  );
}
