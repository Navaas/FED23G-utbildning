import { HeartIcon } from "@heroicons/react/20/solid";
import { Link, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-slate-200">
        <Link to="/">
          <h1 className="text-2xl">Bilddagboken</h1>
        </Link>
        <Link to="/favoriter">
          <HeartIcon className="h-8 w-8 text-red-700" />
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-slate-200 p-4 text-center"> ©️ Bilddagboken</footer>
    </div>
  );
}

export default AppLayout;
