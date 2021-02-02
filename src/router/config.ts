import { config } from "./interface";

const defineConfig: config = {
  routes: {
    /* 菜单页面 */
    menu: [
      {
        path: "/dashboard",
        name: "首页",
        icon: "icon-shouye",
        title: true,
        component: "/menu/dashboard",
      },
      {
        path: "/menu",
        name: "多级菜单",
        icon: "icon-shouye",
        title: true,
        routes: [
          {
            path: "/1",
            name: "菜单1",
            icon: "icon-shouye",
            title: true,
            component: "/menu/menu/menu1",
          },
          {
            path: "/2",
            name: "菜单2",
            icon: "icon-shouye1",
            title: true,
            component: "/menu/menu/menu2",
          },
        ],
      },
      {
        path: "*",
        redirect: "/dashboard",
      },
    ],

    /* 功能页面 */
    func: [
      {
        path: "/func",
        name: "新建活码",
        component: "/func",
      },
    ],
  },
};

export default defineConfig;
