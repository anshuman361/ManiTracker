import React from "react";

import TransactionChart from "../Transactions/TransactionChart";
import TransactionList from "../Transactions/TransactionList";

const Dashboard = () => {
  return (
    <>
      <TransactionList />
      <TransactionChart />
    </>
  );
};

export default Dashboard;
