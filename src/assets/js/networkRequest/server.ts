import request from "axios";
import { message } from "antd";

// const codeMessage: any = {
//   200: "服务器成功返回请求的数据。",
//   201: "新建或修改数据成功。",
//   202: "一个请求已经进入后台排队（异步任务）。",
//   204: "删除数据成功。",
//   400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
//   401: "用户没有权限（令牌、用户名、密码错误）。",
//   403: "用户得到授权，但是访问是被禁止的。",
//   404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
//   406: "请求的格式不可得。",
//   410: "请求的资源被永久删除，且不会再得到的。",
//   422: "当创建一个对象时，发生一个验证错误。",
//   500: "服务器发生错误，请检查服务器。",
//   502: "网关错误。",
//   503: "服务不可用，服务器暂时过载或维护。",
//   504: "网关超时。",
// };

// 设置超时
request.defaults.timeout = 20000;

// 添加请求拦截器
request.interceptors.request.use((req: any) => {
  // 给所有请求添加自定义header
  // 打印出请求体
  // 终止请求
  // var err=new Error("xxx")
  // err.request=request
  // return Promise.reject(new Error(""))

  // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return req;
});

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
request.interceptors.response.use(
  (response: { data: any }) => {
    // 只将请求结果的data字段返回
    return response.data;
  },
  (error: any) => {
    console.log(error);

    message.error("网络错误");

    return Promise.reject(error);
  }
);

export default request;
