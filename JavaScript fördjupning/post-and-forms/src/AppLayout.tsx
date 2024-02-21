import { Link, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <header className="flex justify-between p-2 bg-green-200 items-center">
        <Link to="/">
          <h1 className="text-2xl">InstaFamily</h1>
        </Link>
        <Link to="/new">➕</Link>
      </header>
      <main>
        <Outlet />
        {/* Outlet: Innehåll som kommer ändra sig. Vilken sida kommer visas.  */}
      </main>
    </>
  );
}
export default AppLayout;
