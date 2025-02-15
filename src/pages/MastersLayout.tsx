import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MastersLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default MastersLayout;
