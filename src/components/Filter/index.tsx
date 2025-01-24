import { Col, DatePicker, Flex, Form, Row, Select, Typography } from "antd";
import "./index.scss";

export default function Filter() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Flex gap={8} vertical>
      <Typography.Text type="secondary">Filter :</Typography.Text>
      <Form layout="vertical">
        <Row>
          <Col span={12}>
            <Row>
              <Col span={12}>
                <Form.Item label="Period" style={{ marginBottom: 0 }}>
                  <Form.Item
                    name="year"
                    rules={[{ required: true }]}
                    style={{
                      display: "inline-block",
                      width: "calc(50% - 8px)",
                      marginBottom: 0,
                    }}
                  >
                    <DatePicker
                      style={{ width: "100%" }}
                      placeholder="From Date"
                    />
                  </Form.Item>
                  <Form.Item
                    name="month"
                    rules={[{ required: true }]}
                    style={{
                      display: "inline-block",
                      width: "calc(50% - 8px)",
                      margin: "0 8px",
                    }}
                  >
                    <DatePicker
                      style={{ width: "100%" }}
                      placeholder="To Date"
                    />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Filter Via Doctor"
                  style={{ marginBottom: 0 }}
                >
                  <Form.Item
                    name="year"
                    rules={[{ required: true }]}
                    style={{
                      marginBottom: 0,
                    }}
                  >
                    <Select
                      placeholder="Select Doctor Name"
                      style={{ width: "100%" }}
                      onChange={handleChange}
                      options={[
                        { value: "Dr. Binod", label: "Dr. Binod" },
                        { value: "Dr. Bibek", label: "Dr. Bibek" },
                        { value: "Dr. John", label: "Dr. John" },
                      ]}
                    />
                  </Form.Item>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Flex>
  );
}
