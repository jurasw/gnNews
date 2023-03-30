import { Footer } from "antd/es/layout/layout";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const PageFooter: React.FC = () => {
  const NewsAmount = useSelector((state: any) => state.number);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  const updateTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  };

  setInterval(updateTime, 1000);

  return (
    <Footer style={{ textAlign: "center" }}>
      {currentTime} | {NewsAmount} | © Jerzy Wiśniewski 2023
    </Footer>
  );
};

export default PageFooter;
