import { Row, Col, Card, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";
import { NewsData } from "../../models/News";
import { ContentModal } from "./ContentModal";

const ContentGrid: React.FC<NewsData> = (props) => {
  const [open, setOpen] = useState(false);
  const [news, setNews] = useState(0);

  return (
    <>
      <Row gutter={[16, 16]}>
        {props.data.map((item, index) => (
          <Col key={index} xs={24} sm={24} md={8}>
            {item.urlToImage ? (
              <Card
                onClick={() => {
                  setOpen(true);
                  setNews(index);
                }}
                style={{ width: "100%" }}
                hoverable
                cover={<img alt="example" src={item.urlToImage} />}
              >
                <Meta title={item.title} />
                <div>
                  <p>{item.description}</p>
                  <p>{`author: ${item.source.name}`}</p>
                  <p>{`date: ${new Date(item.publishedAt).toLocaleDateString(
                    "en-us",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  )}  `}</p>
                </div>
              </Card>
            ) : (
              <Card
                onClick={() => {
                  setOpen(true);
                  setNews(index);
                }}
                style={{ width: "100%" }}
                hoverable
              >
                <Meta title={item.title} />
                <div>
                  <p>{item.description}</p>
                  <p>{`author: ${item.source.name}`}</p>
                  <p>{`date: ${new Date(item.publishedAt).toLocaleDateString(
                    "en-us",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  )}`}</p>
                </div>
              </Card>
            )}
          </Col>
        ))}
      </Row>
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

export default ContentGrid;
