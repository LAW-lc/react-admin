import config from "./config";
import BaseLayout from "../layout";
import { Redirect, Route, Switch } from "react-router-dom";
import { nav } from "./interface";

let routerNav: nav;

// 递归将路由转为平级路由
const changeRoute = (menu: any): Array<any>[] => {
  let newMenu: any = [];
  let redir: any = [];
  for (let i = 0, len = menu.length; i < len; i++) {
    let menuItemComponent: any = menu[i].component;
    let menuItemRoutes: any = menu[i].routes;

    if (location.pathname === menu[i].path) {
      routerNav = { path: menu[i].path, name: menu[i].name, title: menu[i].title };
    }

    // 重定向
    if (menu[i].redirect) {
      redir.push(menu[i]);
      continue;
    }

    // 当前路由表里的一级路由有需要渲染的组件的处理
    if (menuItemComponent) {
      let menuItem: any = {
        path: menu[i].path,
        component: menuItemComponent,
      };
      newMenu.push(menuItem);
    }

    // 当前路由表里有子组件就回调方法
    if (menuItemRoutes) {
      newMenu.push(...changeRoute(menuItemRoutes));
    }
  }
  return [...newMenu, ...redir];
};

const RouterView = (routes: any) => {
  let routerArr: any = routes.filter((item: any) => !item.redirect);
  let redirectArr =
    routes &&
    routes
      .filter((item: any) => item.redirect)
      .map((item: any) => (
        <Redirect key={item.path} from={item.path} to={item.redirect} />
      ));
  return (
    <Switch>
      {
        routerArr &&
          routerArr
            .map((item: any) => {
              return (
                <Route
                  exact
                  key={item.path}
                  path={item.path}
                  component={() => require(`../pages${item.component}`).default()}
                />
              );
            })
            .concat(redirectArr) // 将其合并
      }
    </Switch>
  );
};

let routers = changeRoute(JSON.parse(JSON.stringify(config.routes?.menu))).concat(
  config.routes?.func || []
);

// console.log(routers, config.routes?.func);

const router = (
  <Route
    render={(props: any) => {
      props.menu = config.routes?.menu?.filter((item: any) => !item.redirect);
      props.routerNav = routerNav;

      return <BaseLayout {...props}>{RouterView(routers)}</BaseLayout>;
    }}></Route>
);

export default router;
