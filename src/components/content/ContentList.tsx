import { List, Modal } from "antd";
import React, { useState } from "react";
import { NewsData } from "../../models/News";
import { ContentModal } from "./ContentModal";

const ContentList: React.FC<NewsData> = (props) => {
  const [open, setOpen] = useState(false);
  const [news, setNews] = useState(0);

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              setOpen(true);
              setNews(index);
            }}
          >
            <List.Item.Meta
              title={<a>{item.title}</a>}
              description={`author: ${item.source.name}, date: ${new Date(
                item.publishedAt
              ).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}`}
            />
          </List.Item>
        )}
      />
      <Modal
        title={props.data[news].title}
        centered
        open={open}
        footer={null}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={"90%"}
      >
        <ContentModal
          image={props.data[news].urlToImage}
          content={props.data[news].content}
          author={props.data[news].author}
          url={props.data[news].url}
        />
      </Modal>
    </>
  );
};

export default ContentList;
