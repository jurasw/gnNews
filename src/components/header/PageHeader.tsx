import { Button, Modal, Switch, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import { UnorderedListOutlined, TableOutlined } from "@ant-design/icons";
import { HeaderModal } from "./HeaderModal";
import { useNavigate } from "react-router-dom";
import { store } from "../../store";
import { ActionType } from "../../ActionTypes";
import { useSelector } from "react-redux";

const PageHeader: React.FC = () => {
  const grid = useSelector((state: any) => state.isButtonOn);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(grid);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onChange = () => {
    store.dispatch({ type: ActionType.TOGGLE_BUTTON });
    setChecked(!checked);
  };

  return (
    <>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          onClick={() => {
            navigate(`/`);
          }}
          src={"https://i.imgur.com/8l33djU.png"}
          alt="logo"
          style={{ maxWidth: "40%", cursor: "pointer" }}
        />
        <Switch
          style={{ marginLeft: 20, marginRight: 20 }}
          checkedChildren={<TableOutlined />}
          unCheckedChildren={<UnorderedListOutlined />}
          checked={checked}
          onChange={onChange}
        />
        <Button onClick={() => setOpen(true)}>More</Button>
      </Header>
      <Modal
        title="Difficulties and fun"
        centered
        open={open}
        footer={null}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={"90%"}
      >
        <HeaderModal />
      </Modal>
    </>
  );
};

export default PageHeader;
