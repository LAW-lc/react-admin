import { Layout, Dropdown, Menu } from "antd";
import img from "@/assets/image/0.jpg";
const { Header } = Layout;

const menu = (
  <Menu className="count">
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        <span>账号管理</span>
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        <span>权限管理</span>
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        <span>退出登录</span>
      </a>
    </Menu.Item>
  </Menu>
);

const HeaderLayout = () => {
  //   let collapsed = getState("collapsed");

  return (
    <Header className="header flex justify-between h-42 leading-normal text-white items-center bg-grey-850 relative">
      <span>logo</span>
      <Dropdown overlay={menu} placement="bottomCenter">
        <span className="flex items-center p-8 cursor-pointer">
          <span className="mr-14 inline-block rounded-sm w-24 h-24">
            <img alt="" src={img} />
          </span>
          <span className="text-sm">admin</span>
        </span>
      </Dropdown>
    </Header>
  );
};

export default HeaderLayout;
