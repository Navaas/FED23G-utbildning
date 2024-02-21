import { Link, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <header className="bg-slate-100 p-4">
        <Link to="/">Home</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
