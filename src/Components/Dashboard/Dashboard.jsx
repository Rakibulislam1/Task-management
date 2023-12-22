import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Task from "../Task/Task";
import CreateTask from "../CreateTask/CreateTask";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Task Management - Dashboard</title>
      </Helmet>
      <div className="flex">
        <div className="w-[300px] p-8">
          <h2 className="text-xl font-bold">
            Task <span className="text-blue-700">Management</span>
          </h2>
          <ul className="flex flex-col gap-4 mt-16">
            <li>
              <button className="w-full">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "bg-blue-300 text-white py-1 px-2 rounded w-full text-center block"
                      : "bg-blue-700 py-1 px-2 rounded text-white w-full text-center block"
                  }
                >
                  Home
                </NavLink>
              </button>
            </li>
          </ul>
        </div>
        <div className="border-l w-full min-h-screen py-4">
          <div>
            <div className="flex gap-4 border-b px-10 pb-6 items-center">
              <div className="w-[80%] ">
                <form className="relative">
                  {" "}
                  <input
                    className="border w-full rounded-sm py-1 px-2 "
                    type="text"
                    placeholder="Search by task name..."
                  />
                  <IoIosSearch className="absolute top-2 right-2" />
                </form>
              </div>
              <div className="flex gap-4 items-center justify-end w-[20%]">
                <IoMdNotificationsOutline className="w-[25px] h-[25px]" />
                <img
                  className="w-[30px] h-[30px]"
                  src="https://i.ibb.co/wLpxsJ3/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg"
                  alt=""
                />
              </div>
            </div>
            {/* outlet */}
            <div className="p-10">
              <CreateTask />
              <div>
                <Task></Task>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
