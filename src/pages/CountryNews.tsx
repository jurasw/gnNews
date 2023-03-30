import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import NewsContent from "../components/content/NewsContent";
import PageFooter from "../components/PageFooter";
import PageHeader from "../components/header/PageHeader";
import SideMenu from "../components/side-menu/SideMenu";

const CountryNews: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
              overflow: "scroll",
              height: "90vh",
              borderRadius: 10,
            }}
          >
            <NewsContent />
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  );
};

export default CountryNews;
