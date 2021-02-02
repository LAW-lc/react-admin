// 下载图片地址和图片名
const downloadIamge = (imgsrc: string, name: string) => {
  let image = new Image();
  // 解决跨域 Canvas 污染问题
  image.setAttribute("crossOrigin", "anonymous");
  image.onload = function () {
    let canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    let context: any = canvas.getContext("2d");
    context.drawImage(image, 0, 0, image.width, image.height);
    let url = canvas.toDataURL("image/png"); // 得到图片的base64编码数据
    let a = document.createElement("a"); // 生成一个a元素
    let event = new MouseEvent("click"); // 创建一个单击事件
    a.download = name || "photo"; // 设置图片名称
    a.href = url; // 将生成的URL设置为a.href属性
    a.dispatchEvent(event); // 触发a的单击事件
  };
  image.src = imgsrc;
};

/* 根据上传的图片文件获取base64 */
function getBase64(img: Blob, callback: any) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

// 移动光标到指定元素的最后
function collapseToEnd(ele: any) {
  let range: any = window.getSelection(); // 创建range
  range.selectAllChildren(ele); // range 选择obj下所有子内容
  range.collapseToEnd(); // 光标移至最后
}

// 批量添加中状态转换
const statusStr = (num: number): string => {
  let status: string = "全部";
  switch (num) {
    case 0:
      status = "待分配";
      break;
    case 1:
      status = "待添加";
      break;
    case 2:
      status = "待通过";
      break;
    case 3:
      status = "已添加";
      break;
  }
  return status;
};

export { downloadIamge, getBase64, collapseToEnd, statusStr };
