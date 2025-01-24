import { HomeOutlined, RightOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import "./index.scss";

export default function CustomBreadcrumb() {
  return (
    <>
      <Breadcrumb
        separator={<RightOutlined />}
        items={[
          {
            title: <HomeOutlined />,
          },
          {
            title: "Clinical Management",
            href: "",
          },
          {
            title: "OPD",
            href: "",
          },
          {
            title: "New Patients",
          },
        ]}
      />
    </>
  );
}
