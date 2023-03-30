import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CountryList } from "./CountryList";

const SideMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div style={{ overflow: "scroll", height: "100vh" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          onClick={(e) => {
            navigate(`/country/${e.key}`);
          }}
          items={CountryList.map((item) => ({
            key: item.key,
            icon: (
              <img style={{ width: 25, height: 25 }} src={item.flag} alt="" />
            ),
            label: item.label,
          }))}
        />
      </div>
    </Sider>
  );
};

export default SideMenu;
