import { getRequest, postRequest } from "./request";

// 潜在客户列表
interface hideUserGetProps {
  record_id?: number;
  status?: string;
  condition?: string;
  current: number;
  limit: number;
}
const hideUserGet = async ({
  record_id = 0,
  status = "",
  condition = "",
  current,
  limit,
}: hideUserGetProps) => {
  return await getRequest({
    url: `http://192.168.15.49:7001/import/customer/get?${
      record_id ? `record_id=${record_id}&` : ""
    }${status ? `status=${status}&` : ""}${
      condition ? `condition=${condition}&` : ""
    }current=${current}&limit=${limit}`,
  });
};

// 上传excel文件
interface excelUploadProps {
  fs?: any;
  headers?: any;
  query?: string;
}
const excelUpload = async ({ query, fs, headers }: excelUploadProps) => {
  return await postRequest({
    url: `http://192.168.15.49:7001/import/excel/upload${query}`,
    data: fs,
    headers,
  });
};

// 删除潜在客户的数据
interface hideUserDeleteProps {
  id: number;
}
const hideUserDelete = async (props: hideUserDeleteProps) => {
  return await postRequest({
    url: `http://192.168.15.49:7001/import/customer/delete`,
    data: props,
  });
};

// 导入记录列表
interface recordListGetProps {
  current: number;
  limit: number;
}
const recordListGet = async ({ current, limit }: recordListGetProps) => {
  return await getRequest({
    url: `http://192.168.15.49:7001/import/record/get?current=${current}&limit=${limit}`,
  });
};

// 删除导入记录的数据
interface recordListDeleteProps {
  id: number;
}
const recordListDelete = async (props: recordListDeleteProps) => {
  return await postRequest({
    url: `http://192.168.15.49:7001/import/record/delete`,
    data: props,
  });
};

// 数据统计
interface staticDataGetProps {
  current: number;
  limit: number;
}
const staticDataGet = async ({ current, limit }: staticDataGetProps) => {
  return await getRequest({
    url: `http://192.168.15.49:7001/import/customer/get_overview?current=${current}&limit=${limit}`,
    // url: `http://192.168.202.241:3721/test/add_user/staticData`,
  });
};

export {
  recordListGet, // 导入记录列表
  hideUserGet, // 潜在客户
  excelUpload, // 上传excel文件
  hideUserDelete, // 删除潜在客户的数据
  recordListDelete, // 删除导入记录的数据
  staticDataGet, // 统计数据
};
