import { Link, useLocation } from "react-router-dom";
import { SidebarLinks } from "./SidebarLinks";
import PropTypes from "prop-types";
import useGetPath from "../../../hooks/useGetPath";
import { useSelector } from "react-redux";

export default function DashboardLinkList() {
  const { isPathActive } = useGetPath();
  const { showSidebar } = useSelector((state) => state.toggle);
  return (
    <nav className="flex-grow">
      <ul className="space-y-2 p-4">
        {SidebarLinks.admin.links.map((link, index) => (
          <LinkComponent
            key={index}
            url={link.url}
            name={link.name}
            pathList={link.pathMap}
            isActive={isPathActive}
            icon={link.icon}
            showSidebar={showSidebar}
          />
        ))}
      </ul>
    </nav>
  );
}

function LinkComponent({ url, name, isActive, pathList, icon, showSidebar }) {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <li className="mb-2">
      <Link
        to={url}
        className={`${
          isActive(pathName, pathList) ? "bg-blue-500" : ""
        }  p-2 rounded hover:bg-blue-500 flex gap-2 items-center font-medium`}
      >
        <span>{icon}</span>
        <span className={showSidebar ? "block" : "hidden"}>{name}</span>
      </Link>
    </li>
  );
}

LinkComponent.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.func.isRequired,
  pathList: PropTypes.array,
  icon: PropTypes.element,
  showSidebar: PropTypes.bool,
};
