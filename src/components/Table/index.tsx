import { EyeOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Flex,
  Form,
  Input,
  Select,
  Space,
  Table,
  TableProps,
  Tag,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import { getPatientData } from "../../services/patientService";

import "./index.scss";

interface DataType {
  uhid: string;
  name: string;
  age: number;
  gender: string;
  billDate: Date;
  department: string;
  doctor: string;
  queueNo: number;
  prevRec: number;
  status: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "S.No",
    key: "sno",
    render: (_dom, _entity, index) => index + 1,
    align: "center",
  },
  {
    title: "UHID",
    dataIndex: "uhid",
    key: "uhid",
  },
  {
    title: "Patient Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age/Gender",
    key: "agegender",
    render: (_, entity) => (
      <>
        {entity.age} yrs / {entity.gender[0].toUpperCase()}
      </>
    ),
  },
  {
    title: "Billing Date & Time",
    key: "billDate",
    render: (_dom, entity) => {
      const date = entity.billDate.toISOString().substring(0, 10);
      const time =
        ("0" + entity.billDate.getHours()).slice(-2) +
        ":" +
        ("0" + entity.billDate.getMinutes()).slice(-2) +
        ":" +
        ("0" + entity.billDate.getSeconds()).slice(-2);
      return `${date} ${time}`;
    },
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
    render: (value) => value.toUpperCase(),
  },
  {
    title: "Doctor Name",
    dataIndex: "doctor",
    key: "doctor",
  },
  {
    title: "Queue No.",
    dataIndex: "queueNo",
    key: "queueNo",
    align: "center",
  },
  {
    title: "Previous Rec.",
    dataIndex: "prevRec",
    key: "prevRec",
    align: "center",
    render: (val) => {
      return (
        <Select
          defaultValue={1}
          placeholder="Select Doctor Name"
          style={{ width: "100%" }}
          // onChange={handleChange}
          options={[
            { value: 1, label: "1" },
            { value: 2, label: "2" },
            { value: 3, label: "3" },
            { value: 4, label: "4" },
            { value: 5, label: "5" },
          ]}
        />
      );
    },
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => {
      const colors = {
        "follow-up": "red",
        new: "green",
        free: "volcano",
      };
      const color = colors[status];
      return (
        <Tag
          color={color}
          bordered={false}
          style={{ width: "100%", textAlign: "center" }}
        >
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button>
          <EyeOutlined />
        </Button>
      </Space>
    ),
  },
];

export default function CustomTable() {
  const [data, setData] = useState<DataType[]>([]);
  useEffect(() => {
    const fetchPatients = async () => {
      const res = await getPatientData(10);
      setData(res);
    };
    fetchPatients();
  }, []);
  const handleChange = (value: string) => {};
  return (
    <>
      <Flex vertical gap={18}>
        <Flex justify="space-between">
          <Input
            style={{ width: "30%", background: "#fff", borderRadius: "8px" }}
            addonBefore={<SearchOutlined />}
            placeholder="Search For Module, Sub Module etc."
          />
          <Form layout="horizontal">
            <Form.Item label="Select" style={{ marginBottom: 0 }}>
              <Select
                placeholder="Select Doctor Name"
                style={{ width: "80px" }}
                onChange={handleChange}
                options={[
                  { value: 5, label: "5" },
                  { value: 10, label: "10" },
                  { value: 15, label: "15" },
                ]}
              />
            </Form.Item>
          </Form>
        </Flex>
        <Table<DataType>
          columns={columns}
          dataSource={data}
          size="small"
          rowKey="uhid"
          pagination={{
            showTotal: (total, range) => (
              <Typography.Text type="secondary">
                {` Showing ${range[0]} to ${range[1]} of ${total} entries`}
              </Typography.Text>
            ),
          }}
        />
      </Flex>
    </>
  );
}
