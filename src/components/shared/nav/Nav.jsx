import { useDispatch } from "react-redux";
import { toggle } from "../../../features/togglebar/togglebarSlice";
import ProfileDropdown from "./ProfileDropdown";
import PropTypes from "prop-types";

export default function Nav({ handleSidebar }) {
  const dispatch = useDispatch();

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <button className="hidden md:block" onClick={() => dispatch(toggle())}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M5.33333 24H26.6667C27.4 24 28 23.4 28 22.6667C28 21.9333 27.4 21.3333 26.6667 21.3333H5.33333C4.6 21.3333 4 21.9333 4 22.6667C4 23.4 4.6 24 5.33333 24ZM5.33333 17.3333H26.6667C27.4 17.3333 28 16.7333 28 16C28 15.2667 27.4 14.6667 26.6667 14.6667H5.33333C4.6 14.6667 4 15.2667 4 16C4 16.7333 4.6 17.3333 5.33333 17.3333ZM4 9.33333C4 10.0667 4.6 10.6667 5.33333 10.6667H26.6667C27.4 10.6667 28 10.0667 28 9.33333C28 8.6 27.4 8 26.6667 8H5.33333C4.6 8 4 8.6 4 9.33333Z"
            fill="#404040"
          />
        </svg>
      </button>

      <button onClick={handleSidebar} className="block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M5.33333 24H26.6667C27.4 24 28 23.4 28 22.6667C28 21.9333 27.4 21.3333 26.6667 21.3333H5.33333C4.6 21.3333 4 21.9333 4 22.6667C4 23.4 4.6 24 5.33333 24ZM5.33333 17.3333H26.6667C27.4 17.3333 28 16.7333 28 16C28 15.2667 27.4 14.6667 26.6667 14.6667H5.33333C4.6 14.6667 4 15.2667 4 16C4 16.7333 4.6 17.3333 5.33333 17.3333ZM4 9.33333C4 10.0667 4.6 10.6667 5.33333 10.6667H26.6667C27.4 10.6667 28 10.0667 28 9.33333C28 8.6 27.4 8 26.6667 8H5.33333C4.6 8 4 8.6 4 9.33333Z"
            fill="#404040"
          />
        </svg>
      </button>

      <div>
        <ProfileDropdown />
      </div>
    </header>
  );
}

Nav.propTypes = {
  handleSidebar : PropTypes.func,
};