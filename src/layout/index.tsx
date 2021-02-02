import { useEffect, useState } from "react";
import { Layout, ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import { history } from "@/assets/js/dataDev";
import "dayjs/locale/zh-cn";
import dayjs from "dayjs";
// 头部布局
import Header from "./Header";
// 菜单栏
import Side from "./Side";
import "./index.less";

dayjs.locale("en");

const { Content } = Layout;

const BaseLayout = (props: any) => {
  let { menu, children, history, routerNav } = props;
  const [nav, setNav] = useState(routerNav);

  useEffect(() => {
    window.globalState.getState("routeNav", (value: any) => {
      setNav(value);
    });

    window.globalState.getState("history", ({ type, pathname, query = {} }: history) => {
      history[type]({ pathname, query });
    });

    return () => {
      window.globalState.destoryState("routeNav");
      window.globalState.destoryState("history");
    };
  }, []);

  return (
    <ConfigProvider locale={zhCN}>
      <Layout className="layout w-full h-full min-w-1330  text-grey-800 text-13">
        <Header></Header>

        <Content>
          <Layout className="h-full">
            <Side menu={menu} history={history} />
            <Content style={{ minHeight: 280 }}>
              <div className="flex flex-col items-center w-full h-full">
                {nav && nav.title ? (
                  <p className="title w-full h-48 text-base font-medium flex items-center pl-14 text-black bg-white">
                    {nav.name || "首页"}
                  </p>
                ) : null}
                <div className="flex w-full h-full">{children}</div>
              </div>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default BaseLayout;
