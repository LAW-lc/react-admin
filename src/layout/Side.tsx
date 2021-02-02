import { Layout } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SideLayout = (props: any) => {
  let { menu, history } = props;
  const [active, setActive] = useState(history.location.pathname || "");

  useEffect(() => {
    setActive(`/${history.location.pathname.split("/")[1]}`);
  }, [history.location.pathname]);

  const changeRoute = (path: string, name: string, title: boolean) => {
    if (active !== path) {
      window.globalState.muState("routeNav", { path, name, title });
      setActive(path);
    }
  };

  return (
    <Sider className="bg-grey-900 text-white" width={252}>
      <ul className="scrollY w-full h-full overscroll-y-auto">
        {menu &&
          menu.map((item: any) => {
            return (
              <li
                key={item.name}
                className={`menu-group relative pl-18 pr-12 ${
                  active === item.path ? "active" : "hover:bg-grey-100 hover:bg-opacity-5"
                }`}>
                {item.component ? (
                  <Link
                    to={item.path}
                    className="inline-block w-full h-full cursor-pointer"
                    onClick={() => {
                      changeRoute(item.path, item.name, item.title);
                    }}>
                    <div className="min-h-47 leading-11 ">
                      <span className={`iconfont text-sm mr-8 ${item.icon}`}></span>
                      <span>{item.name}</span>
                    </div>
                  </Link>
                ) : (
                  <div className="min-h-47 leading-11">
                    <span className={`iconfont text-sm mr-8 ${item.icon}`}></span>
                    <span>{item.name}</span>
                  </div>
                )}

                {item.routes && (
                  <ul className="flex flex-wrap pb-12 ml-12">
                    {item.routes.map((childItem: any) => {
                      return (
                        <li
                          key={childItem.name}
                          className="w-6/12 mt-3 p-0 overflow-hidden text-sm overflow-ellipsis cursor-pointer ">
                          <Link
                            to={childItem.path}
                            onClick={() => {
                              changeRoute(
                                childItem.path,
                                childItem.name,
                                childItem.title
                              );
                            }}>
                            <span
                              className={`inline-block px-10 py-5 leading-6 text-grey-300 max-w-full rounded-sm  ${
                                active === childItem.path
                                  ? "active"
                                  : "hover:bg-grey-100 hover:bg-opacity-5"
                              }`}>
                              {childItem.name}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
      </ul>
    </Sider>
  );
};

export default SideLayout;
