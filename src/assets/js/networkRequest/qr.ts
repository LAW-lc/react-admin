import { getRequest, postRequest, patchRequest, deleteRequest } from "./request";

const api = "http://localhost:3721";
const onlineApi = "http://47.114.84.134:7001";

const getQrGroup = async () => {
  return await getRequest({ url: `${onlineApi}/qr_group/get` });
};

// 渠道码分组添加
interface addQrGroupProps {
  name: string;
  order: number;
}
const addQrGroup = async (props: addQrGroupProps) => {
  return await postRequest({ url: `${onlineApi}/qr_group/add`, data: props });
};

// 渠道码分组更新名称
interface updateQrGroupProps {
  groupid: string;
  name: string;
  order: number;
}
const updateQrGroup = async (props: updateQrGroupProps) => {
  return await patchRequest({ url: `${onlineApi}/qr_group/update`, data: props });
};

// 渠道码分组更新顺序
interface updateQrGroupOrderProps {
  groupid_sort_list: string;
}
const updateQrGroupOrder = async (props: updateQrGroupOrderProps) => {
  return await postRequest({ url: `${onlineApi}/qr_group/update_order`, data: props });
};

// 渠道码分组删除
interface removeQrGroupProps {
  groupid: string[];
}
const removeQrGroup = async (props: removeQrGroupProps) => {
  return await deleteRequest({ url: `${onlineApi}/qr_group/remove`, data: props });
};

// 获取所有表格数据
interface qrListGetProps {
  name?: string; // 根据活码名称关键字获取
}
const qrListGet = async ({ name = "" }: qrListGetProps) => {
  return name
    ? await getRequest({ url: `${onlineApi}/qr/list?name=${name}` })
    : await getRequest({ url: `${onlineApi}/qr/list` });
  // return await getRequest({ url: `${onlineApi}/qr/list?name=${name}` });
};

// 获取指定id活码数据
interface getQrIdProps {
  id: number;
}
const getQrId = async (props: getQrIdProps) => {
  return await getRequest({ url: `${onlineApi}/qr/get?id=${props.id}` });
};

// 创建活码
const createQr = async (props: any) => {
  return await postRequest({ url: `${onlineApi}/qr/add`, data: props });
};

// 员工分页查找
interface getStaffsProps {
  current: number;
  limit: number;
  follow_user: number;
  userid?: string;
  name?: string;
  sorter?: string;
}
const getStaffs = async (props: getStaffsProps) => {
  return await getRequest({
    url: `${onlineApi}/staff/getStaffs?current=${props.current}&limit=${props.limit}&follow_user=${props.follow_user}`,
  });
};

// 获取所有用户标签
const getUserAllTag = async () => {
  return await getRequest({ url: `${api}/test/tag/all` });
};
// 获取所有用户标签
const getUserStageTag = async () => {
  return await getRequest({ url: `${api}/test/tag/stage` });
};

export {
  getQrGroup, // 渠道码分组查找
  addQrGroup, // 渠道码分组添加
  updateQrGroup, // 渠道码分组更新名称
  updateQrGroupOrder, // 渠道码分组更新顺序
  removeQrGroup, // 渠道码分组删除
  createQr, // 创建活码
  qrListGet, // 获取所有表格数据
  getQrId, // 获取指定id活码数据
  getStaffs, // 员工分页查找
  getUserAllTag, // 获取所有用户标签
  getUserStageTag, // 获取所有用户标签
};
