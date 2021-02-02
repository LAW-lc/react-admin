import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import routeChildren from "./router";
import { STATEPIP } from "@/assets/js/dataDev";
import "@/assets/css/reset.less";
import "./index.less";

/* 保存传递状态数据的所有通道 */
window.globalState = new STATEPIP();

ReactDOM.render(<Router>{routeChildren}</Router>, document.getElementById("root"));

reportWebVitals();
