import { Tabs, TabsProps } from "antd";

interface TabProps {
  data: TabsProps["items"];
  onChange: (key: string) => void;
}

export default function Tab({ data, onChange }: TabProps) {
  return (
    <div>
      <Tabs
        type="card"
        defaultActiveKey="1"
        items={data}
        onChange={onChange}
        tabBarGutter={10}
      />
    </div>
  );
}
