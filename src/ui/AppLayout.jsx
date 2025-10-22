import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="relative grid h-dvh grid-rows-[auto_1fr]">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
