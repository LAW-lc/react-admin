import { Subject } from "rxjs";

export interface history {
  type: string;
  pathname: string;
  query?: any;
}

interface STATEPIPTER {
  setState(name: string, value: any): void;
  getState(name: string, callback: (value: any) => void): void;
  muState(name: string, value: any): void;
  destoryState(name: string): void;
}

class STATEPIP implements STATEPIPTER {
  private STATEARR: any = {};

  /* 初始化某个管道 */
  setState(name: string, value: any) {
    try {
      if (this.STATEARR[name]) {
        throw new Error(`管道${name}已被初始化`);
      }
      this.STATEARR[name] = new Subject();
      this.STATEARR[name].next(value);
    } catch (error) {
      console.error(error);
    }
  }

  /* 通过管道拿来的值进行处理 */
  getState(name: string, callback: (value: any) => void) {
    if (!this.STATEARR[name]) {
      this.STATEARR[name] = new Subject();
      this.STATEARR[name].next("");
    }
    this.STATEARR[name].subscribe((value: any) => {
      callback(value);
    });
  }

  /* 通过管道给某个状态设置值 */
  muState(name: string, value: any) {
    try {
      if (!this.STATEARR[name]) {
        throw new Error(`管道${name}未被初始化`);
      }
      this.STATEARR[name].next(value);
    } catch (error) {
      console.error(error);
    }
  }

  /* 销毁管道 */
  destoryState(name: string) {
    if (this.STATEARR[name]) {
      this.STATEARR[name].unsubscribe();
      delete this.STATEARR[name];
    }
  }
}

export { STATEPIP };
