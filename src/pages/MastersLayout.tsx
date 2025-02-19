import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MastersLayout: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default MastersLayout;
