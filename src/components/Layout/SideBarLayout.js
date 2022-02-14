import Sidebar from "./Sidebar";
import { Outlet } from 'react-router-dom';

const SideBarLayout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);
export default SideBarLayout;