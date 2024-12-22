import { useSelector } from "react-redux";
import { logo } from "../../../assets/getAssets";
import DashboardLinkList from "./DashboardLinkList";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const { showSidebar } = useSelector((state) => state.toggle);
  const navigate = useNavigate();
  return (
    <aside
      className={`${
        showSidebar ? "w-64" : "w-20"
      }  hidden h-full overflow-auto no-scrollbar select-none bg-primary text-white md:flex flex-col duration-300 `}
    >
      <div
        onClick={() => navigate("/")}
        className="flex items-center px-4 py-2 h-20 cursor-pointer"
      >
        <img className="w-10" src={logo} alt="" />
        <h4
          className={`p-4 text-2xl font-bold ${
            showSidebar ? "block" : "hidden"
          }`}
        >
          Dashboard
        </h4>
      </div>
      <DashboardLinkList />
      <div className="p-4 border-t border-blue-500 font-medium"></div>
    </aside>
  );
}
