import PropTypes from "prop-types";
import { SidebarLinks } from "../sidebar/SidebarLinks";
import { Link, useLocation } from "react-router-dom";
import useGetPath from "../../../hooks/useGetPath";
const LeftSidebar = ({ handleSidebar, showMobileNav }) => {
  const { isPathActive } = useGetPath();
  const location = useLocation();
  return (
    <div className="flex h-screen md:hidden">
      <div
        className={`fixed top-0 left-0 inset-0  bg-gray-800 w-full h-full  duration-500 transition-all  ${
          showMobileNav ? "z-40 opacity-80" : "  -z-40  opacity-0 "
        }`}
      ></div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-50 bg-gray-800 text-white transition-transform duration-300 transform ${
          showMobileNav ? "translate-x-0" : "-translate-x-full"
        } w-64 z-50`}
      >
        <button
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
          onClick={handleSidebar}
        >
          ✕
        </button>
        <div className="p-4">
          <div className="mb-6"></div>
          <ul className="flex flex-col gap-2">
            {SidebarLinks.admin.links.map((link, index) => (
              <li
                key={index}
                onClick={handleSidebar}
                className={` ${
                  isPathActive(location?.pathname, link.pathMap)
                    ? "bg-blue-500"
                    : ""
                } py-2 px-4 hover:bg-gray-700 rounded cursor-pointer `}
              >
                <Link className="flex items-center gap-2" to={link?.url}>
                  <span>{link.icon}</span>
                  {link?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

LeftSidebar.propTypes = {
  handleSidebar: PropTypes.func,
  showMobileNav: PropTypes.bool,
};

export default LeftSidebar;
