import { FilterOutlined } from "@ant-design/icons";
import { Flex, Space, TabsProps } from "antd";
import { Children, useCallback, useEffect, useMemo, useState } from "react";
import CustomBreadcrumb from "../../components/Breadcrumb";
import CardList from "../../components/CardList";
import Filter from "../../components/Filter";
import PageHeader from "../../components/PageHeader";
import Tab from "../../components/Tab";
import CustomTable from "../../components/Table";
import { getPatientData, getTabs } from "../../services/patientService";

export default function Patient() {
  const [tabData, setTabData] = useState<any[]>([]);
  const [tabHeading, setTabHeading] = useState<TabsProps["items"]>([]);
  const [patients, setPatients] = useState<any[]>([]);
  const [showFilter, setShowFilter] = useState(false);

  const tabComponents: Record<string, JSX.Element> = useMemo(() => {
    return {
      patient: <CustomTable />,
      nurse: <>Nurse Tab</>,
      doctor: <>Doctor Tab</>,
      appointment: <>Appointment Tab</>,
    };
  }, [patients]);

  const fetchTabs = useCallback(async () => {
    const response = await getTabs();
    setTabData(response);
    const tabDataList = response.map((tab) => ({
      key: tab.key,
      label: `${tab.title} (${tab.count})`,
      children: tabComponents[tab.key],
    }));
    setTabHeading(tabDataList);
    await fetchTable("patients");
  }, []);

  useEffect(() => {
    fetchTabs();
  }, []);

  const fetchTable = useCallback(
    async (key: string) => {
      const count = tabData.find((x) => x.key == key)?.count;
      const response = await getPatientData(count);
      setPatients(response);
    },
    [tabData]
  );

  const changeTab = useCallback(
    async (key: string) => {
      fetchTable(key);
    },
    [fetchTable]
  );

  const cardList = useMemo(
    () => [
      {
        title: "New Patients",
        icon: <FilterOutlined />,
        content: "20",
      },
      {
        title: "Average Wait Time",
        icon: <FilterOutlined />,
        content: "20",
        infoContent: "lorem ipsum text here",
      },
      {
        title: "Patients in Queue",
        icon: <FilterOutlined />,
        content: "20",
        queueNo: "11-20",
      },
      {
        title: "Cancellations",
        icon: <FilterOutlined />,
        content: "20",
      },
      {
        title: "Urgent Cases",
        icon: <FilterOutlined />,
        content: "20",
        queueNo: "4,7,12",
      },
    ],
    []
  );

  return (
    <>
      <CustomBreadcrumb />
      <Flex gap={16} vertical>
        <PageHeader showFilter={showFilter} setShowFilter={setShowFilter} />
        {showFilter ? <Filter /> : <></>}
        <CardList cardList={cardList} />
        <Tab data={tabHeading} onChange={changeTab} />
      </Flex>
    </>
  );
}
