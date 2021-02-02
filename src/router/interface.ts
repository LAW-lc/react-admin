interface config {
  routes?: {
    menu?: {
      path?: string;
      name?: string;
      icon?: string;
      title?: boolean;
      component?: string;
      redirect?: string;
      exact?: boolean;
      routes?: any[];
      [k: string]: any;
    }[];

    func?: {}[];
    path?: string;
    name?: string;
    title?: boolean;
    component?: string;
  };
}

interface nav {
  path: string;
  name: string;
  title: string;
}

export type { config, nav };
