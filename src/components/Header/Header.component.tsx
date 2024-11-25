import { useNavigate, useLocation } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import DonutAndTea from "../../assets/donut-and-tea.svg";

import { Route } from "./Header.types";

const routes: Route[] = [
  {
    title: "Works",
    path: "/works",
  },
  {
    title: "Personal Projects",
    path: "/projects",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="sticky z-[999] bg-white/20 top-0 py-1 flex flex-row justify-center gap-5 items-center backdrop-blur-md">
      <button
        onClick={() => navigate("/")}
        className="flex flex-row items-center"
      >
        <img src={DonutAndTea} className="w-14" alt="donunt and tea" />
        <span className="username text-xl">Rafael Inácio</span>
      </button>
      {routes.map((route: Route) => (
        <button
          className={`flex flex-row h-10 p-2 rounded transition-all items-center gap-2 ${pathname === route.path ? "bg-primary hover:bg-primary/80 text-white" : "hover:bg-white/30"}`}
          key={route.path}
          onClick={() => navigate(route.path)}
        >
          {route.icon ? route.icon : null}
          {route.title}
        </button>
      ))}

      <button
        className={`flex flex-row hover:bg-white/30 h-10 p-2 rounded transition-all items-center gap-2`}
        onClick={() => window.open("https://github.com/inaciorafael")}
      >
        <IoLogoGithub className="text-xl" />
        Github
      </button>
    </div>
  );
};

export default Header;
