import type { ThemeConfig } from "antd";

const themeConfig: ThemeConfig = {

  token: {
    fontFamily: "Poppins"
  },
  components: {
    Breadcrumb: {
      colorBgTextHover: 'transparent',
      iconFontSize: 12,
      lastItemColor: 'rgba(0,0,0,0.45)',
      fontSize: 12,
    },
    Card: {
      colorBorderSecondary: 'transparent',
      headerFontSize: 14,
      extraColor: '#898989',
      colorTextHeading: '#898989',
      colorText: '#898989',
      headerHeight: 0,
      bodyPadding: 0,
      headerPadding: 0
    },
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0
    },
    Tabs: {
      cardBg: '#fff',
      itemSelectedColor: '#fff',
      colorBgContainer: '#1990FE',
    }
  },
}
export default themeConfig;