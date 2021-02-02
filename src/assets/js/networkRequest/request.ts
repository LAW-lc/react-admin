import server from "./server";

interface get {
  url: string;
  data?: object;
}

interface common {
  url: string;
  data?: object;
  headers?: any;
}

// post请求的封装K-v形式
export const postKeyValueRequest = async (postKV: common) => {
  return await server({
    method: "post",
    url: postKV.url,
    data: postKV.data,
    transformRequest: [
      function (data: { [x: string]: string | number | boolean }) {
        let ret: string = "";
        for (let it in data) {
          ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        ret = ret.slice(0, ret.length - 1);
        return ret;
      },
    ],
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json, text/javascript, */*;q=0.01",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  });
};
// 传递json的post请求
export const postRequest = async (post: common) => {
  console.log(post);
  return await server({
    method: "post",
    url: post.url,
    data: post.data,
    headers: post.headers,
  });
};
// put请求封装
export const putRequest = async (put: common) => {
  return await server({
    method: "put",
    url: put.url,
    data: put.data,
  });
};
// patch请求封装
export const patchRequest = async (put: common) => {
  return await server({
    method: "patch",
    url: put.url,
    data: put.data,
  });
};
// get请求封装
export const getRequest = async (get: get) => {
  return await server({
    method: "get",
    url: get.url,
    data: get.data,
  });
};
// delete请求封装
export const deleteRequest = async (del: common) => {
  return await server({
    method: "delete",
    url: del.url,
    data: del.data,
  });
};
