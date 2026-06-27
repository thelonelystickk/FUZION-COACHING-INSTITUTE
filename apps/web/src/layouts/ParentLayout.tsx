import { Outlet } from "react-router-dom";

export default function ParentLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Outlet />
    </div>
  );
}
