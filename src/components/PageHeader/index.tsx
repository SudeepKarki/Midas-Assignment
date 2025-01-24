import {
  EyeFilled,
  EyeInvisibleFilled,
  FileExcelOutlined,
  FilterOutlined,
  MedicineBoxOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";

interface PageHeaderProps {
  showFilter: boolean;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function PageHeader({
  showFilter,
  setShowFilter,
}: PageHeaderProps) {
  return (
    <>
      <Flex justify="space-between">
        <Flex align="center" gap={8}>
          <MedicineBoxOutlined />
          <Typography.Title level={4} style={{ margin: 0, color: "#454545" }}>
            OPD Department
          </Typography.Title>
          <Button icon={<FilterOutlined />}>Filter</Button>
          <Button href="" icon={<ReloadOutlined />} />
        </Flex>
        <Flex align="center" gap={12}>
          <Button
            icon={showFilter ? <EyeInvisibleFilled /> : <EyeFilled />}
            onClick={() => setShowFilter(!showFilter)}
          >
            {showFilter ? "Hide" : "Show"} Filter
          </Button>
          <Button icon={<FileExcelOutlined />}>Download Excel</Button>
        </Flex>
      </Flex>
    </>
  );
}
