import React from "react";
import { BarChart4, MonitorPlay, Radio, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // Using React Router

const Sidebar = () => {
    const location = useLocation();

    // Define sidebar routes
    const sidebarRoutes = [
        { icon: <MonitorPlay />, label: "Courses", path: "dashboard/mycourses" },
        { icon: <BarChart4 />, label: "Performance", path: "#" },
        { icon: <Users />, label: "Students", path: "#" },
        { icon: <Radio />, label: "CreateSession", path: "#" },


    ];

    return (
        <div className="flex flex-col w-64 border-r px-3 my-4 gap-4 text-sm font-medium">
            {sidebarRoutes.map((route) => (
                <Link
                    to={route.path}
                    key={route.path}
                    className={`flex items-center gap-4 p-3 rounded-lg hover:bg-[#FFF8EB] 
            ${location.pathname.startsWith(route.path) && "bg-[#e7e5e3] hover:bg-[#000000]/80"}`}
                >
                    {route.icon} {route.label}
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;
