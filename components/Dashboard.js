import React from "react";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import Right from "../components/Right";

function Dashboard() {
  return (
    <main>
      <Sidebar />
      <Body />
      <Right />
    </main>
  );
}

export default Dashboard;
