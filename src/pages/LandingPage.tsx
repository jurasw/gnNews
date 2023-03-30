import { Button, Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import PageFooter from "../components/PageFooter";
import PageHeader from "../components/header/PageHeader";
import SideMenu from "../components/side-menu/SideMenu";
import { DownloadOutlined } from "@ant-design/icons";

const LandingPage: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const downladCv = () => {
    fetch("cv.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV_Jerzy_Wisniewski.pdf";
        alink.click();
      });
    });
  };
  return (
    <Layout>
      <SideMenu />
      <Layout>
        <PageHeader />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              style={{ margin: "auto" }}
              type="primary"
              icon={<DownloadOutlined />}
              size={"large"}
              onClick={downladCv}
            >
              CV Download
            </Button>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  );
};

export default LandingPage;
