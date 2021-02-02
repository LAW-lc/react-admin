// import {
//   getRequest,
//   postRequest,
//   // postKeyValueRequest,
//   //   postKeyValueRequest,
//   //   putRequest,
//   patchRequest,
//   deleteRequest,
// } from "./request";

// // const env = process.env.NODE_ENV;
// const trueApi = "http://localhost:3721";
// const onlineApi = "http://47.114.84.134:7001";
// // let api = env === "development" ? trueApi : localApi;
// let api = trueApi;

// /* ====渠道活码==== */
// // 渠道码分组查找
// const getQrGroup = async () => {
//   return await getRequest({ url: `${onlineApi}/qr_group/get` });
// };

// // 渠道码分组添加
// interface addQrGroupProps {
//   name: string;
//   order: number;
// }
// const addQrGroup = async (props: addQrGroupProps) => {
//   return await postRequest({ url: `${onlineApi}/qr_group/add`, data: props });
// };

// // 渠道码分组更新名称
// interface updateQrGroupProps {
//   groupid: string;
//   name: string;
//   order: number;
// }
// const updateQrGroup = async (props: updateQrGroupProps) => {
//   return await patchRequest({ url: `${onlineApi}/qr_group/update`, data: props });
// };

// // 渠道码分组更新顺序
// interface updateQrGroupOrderProps {
//   groupid_sort_list: string;
// }
// const updateQrGroupOrder = async (props: updateQrGroupOrderProps) => {
//   return await postRequest({ url: `${onlineApi}/qr_group/update_order`, data: props });
// };

// // 渠道码分组删除
// interface removeQrGroupProps {
//   groupid: string[];
// }
// const removeQrGroup = async (props: removeQrGroupProps) => {
//   return await deleteRequest({ url: `${onlineApi}/qr_group/remove`, data: props });
// };

// // 获取所有表格数据
// interface qrListGetProps {
//   name?: string; // 根据活码名称关键字获取
// }
// const qrListGet = async ({ name = "" }: qrListGetProps) => {
//   return name
//     ? await getRequest({ url: `${onlineApi}/qr/list?name=${name}` })
//     : await getRequest({ url: `${onlineApi}/qr/list` });
//   // return await getRequest({ url: `${onlineApi}/qr/list?name=${name}` });
// };

// // 获取指定id活码数据
// interface getQrIdProps {
//   id: number;
// }
// const getQrId = async (props: getQrIdProps) => {
//   return await getRequest({ url: `${onlineApi}/qr/get?id=${props.id}` });
// };

// // 创建活码
// const createQr = async (props: any) => {
//   return await postRequest({ url: `${onlineApi}/qr/add`, data: props });
// };

// // 员工分页查找
// interface getStaffsProps {
//   current: number;
//   limit: number;
//   follow_user: number;
//   userid?: string;
//   name?: string;
//   sorter?: string;
// }
// const getStaffs = async (props: getStaffsProps) => {
//   return await getRequest({
//     url: `${onlineApi}/staff/getStaffs?current=${props.current}&limit=${props.limit}&follow_user=${props.follow_user}`,
//   });
// };

// /* ====潜在客户==== */
// // 潜在客户列表
// interface hideUserGetProps {
//   record_id?: number;
//   status?: string;
//   condition?: string;
//   current: number;
//   limit: number;
// }
// const hideUserGet = async ({
//   record_id = 0,
//   status = "",
//   condition = "",
//   current,
//   limit,
// }: hideUserGetProps) => {
//   return await getRequest({
//     url: `http://192.168.15.49:7001/import/customer/get?${
//       record_id ? `record_id=${record_id}&` : ""
//     }${status ? `status=${status}&` : ""}${
//       condition ? `condition=${condition}&` : ""
//     }current=${current}&limit=${limit}`,
//   });
// };

// // 上传excel文件
// interface excelUploadProps {
//   fs?: any;
//   headers?: any;
//   query?: string;
// }
// const excelUpload = async ({ query, fs, headers }: excelUploadProps) => {
//   return await postRequest({
//     url: `http://192.168.15.49:7001/import/excel/upload${query}`,
//     data: fs,
//     headers,
//   });
// };

// // 删除潜在客户的数据
// interface hideUserDeleteProps {
//   id: number;
// }
// const hideUserDelete = async (props: hideUserDeleteProps) => {
//   return await postRequest({
//     url: `http://192.168.15.49:7001/import/customer/delete`,
//     data: props,
//   });
// };

// /* 导入记录 */
// // 导入记录列表
// interface recordListGetProps {
//   current: number;
//   limit: number;
// }
// const recordListGet = async ({ current, limit }: recordListGetProps) => {
//   return await getRequest({
//     url: `http://192.168.15.49:7001/import/record/get?current=${current}&limit=${limit}`,
//   });
// };

// // 删除导入记录的数据
// interface recordListDeleteProps {
//   id: number;
// }
// const recordListDelete = async (props: recordListDeleteProps) => {
//   return await postRequest({
//     url: `http://192.168.15.49:7001/import/record/delete`,
//     data: props,
//   });
// };

// // 导入记录详情
// const getRecordDetailList = async () => {
//   return await getRequest({ url: `${api}/test/add_user/detailList` });
// };

import {
  getQrGroup,
  addQrGroup,
  updateQrGroup,
  updateQrGroupOrder,
  removeQrGroup,
  createQr,
  qrListGet,
  getQrId,
  getStaffs,
  getUserAllTag,
  getUserStageTag,
} from "./qr";
import {
  recordListGet,
  hideUserGet,
  excelUpload,
  hideUserDelete,
  recordListDelete,
  staticDataGet,
} from "./batch_add_user";

export {
  recordListGet, // 导入记录列表
  hideUserGet, // 潜在客户
  excelUpload, // 上传excel文件
  hideUserDelete, // 删除潜在客户的数据
  recordListDelete, // 删除导入记录的数据
  staticDataGet, // 统计数据
};

export {
  getUserAllTag, // 获取所有用户标签
  getUserStageTag, // 获取所有用户标签
  getQrGroup, // 渠道码分组查找
  addQrGroup, // 渠道码分组添加
  updateQrGroup, // 渠道码分组更新名称
  updateQrGroupOrder, // 渠道码分组更新顺序
  removeQrGroup, // 渠道码分组删除
  createQr, // 创建活码
  qrListGet, // 获取所有表格数据
  getQrId, // 获取指定id活码数据
  getStaffs, // 员工分页查找
};
