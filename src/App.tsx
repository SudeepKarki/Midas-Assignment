import { ConfigProvider } from "antd";
import Patient from "./pages/patient";
import themeConfig from "./theme";

function App() {
  return (
    <>
      <ConfigProvider theme={themeConfig}>
        <Patient />
      </ConfigProvider>
    </>
  );
}

export default App;
