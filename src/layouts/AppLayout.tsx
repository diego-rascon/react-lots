import NavMenu from "@/layouts/NavMenu";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <>
      <NavMenu />
      <div className="mt-16">
        <Outlet />
      </div>
    </>
  );
}
