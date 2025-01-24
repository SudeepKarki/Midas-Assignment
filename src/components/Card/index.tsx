import { InfoCircleOutlined } from "@ant-design/icons";
import { Card, Flex, Popover, Space, Typography } from "antd";

import "./index.scss";

export interface CardProps {
  title: string;
  icon: JSX.Element;
  content: string;
  queueNo?: string;
  infoContent?: string;
}
export default function CustomCard({
  title,
  icon,
  content,
  infoContent,
  queueNo,
}: CardProps) {
  return (
    <Card
      title={title}
      extra={
        infoContent ? (
          <Popover content={infoContent} title={title}>
            <InfoCircleOutlined />
          </Popover>
        ) : queueNo ? (
          <Typography.Title
            level={5}
            style={{
              margin: 0,
              color: "#898989",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            Queue No.
          </Typography.Title>
        ) : (
          <></>
        )
      }
      style={{ width: "100%" }}
    >
      <Flex justify="space-between">
        <Flex gap={8}>
          <Typography.Title level={4} style={{ margin: 0 }}>
            <Space>
              {icon}
              {content}
            </Space>
          </Typography.Title>
        </Flex>
        {queueNo ? (
          <Typography.Title level={4} style={{ margin: 0 }}>
            {queueNo}
          </Typography.Title>
        ) : (
          <></>
        )}
      </Flex>
    </Card>
  );
}
