const Dashboard = () => {
  return (
    <div>
      Dashboard
      <span
        className=" cursor-pointer text-blue-default"
        onClick={() => {
          window.globalState.muState("history", { type: "push", pathname: "/func" });
        }}>
        跳到功能组件
      </span>
    </div>
  );
};

export default Dashboard;
