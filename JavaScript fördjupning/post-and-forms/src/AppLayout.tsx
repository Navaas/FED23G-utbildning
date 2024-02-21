import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <header className="flex justify-between p-4 bg-slate-400">
        <h1>Hello world</h1>
        <span className="cursor-pointer">➕</span>
      </header>
      <main>
        <Outlet />
        {/* Outlet: Innehåll som kommer ändra sig. Vilken sida kommer visas.  */}
      </main>
    </>
  );
}
export default AppLayout;
