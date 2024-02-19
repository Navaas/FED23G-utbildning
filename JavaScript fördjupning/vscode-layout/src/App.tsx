import {
  Cog8ToothIcon,
  DocumentDuplicateIcon,
  MagnifyingGlassIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-full flex flex-col">
      <header className="bg-slate-100 p-2 border-b-2">HEADER</header>

      <div className="flex flex-1">
        <aside className="flex bg-slate-100 p-2 border-r-2">
          <div className="flex flex-col">
            {/* Med Link lägger man till länkar på iconerna */}
            <Link to="/explorer">
              <DocumentDuplicateIcon className="h-20 w-20 p-4 cursor-pointer" />
            </Link>
            <Link to="/search">
              <MagnifyingGlassIcon className="h-20 w-20 p-4 cursor-pointer" />
            </Link>
            <PlayIcon className="h-20 w-20 p-4 cursor-pointer" />
            <div className="flex-1" />
            <Cog8ToothIcon className="h-20 w-20 p-4 cursor-pointer" />
          </div>
          <div className="border-l-2 w-96">
            <Outlet />
          </div>
        </aside>

        <main className="p-2 flex-1">MAIN</main>
      </div>

      <footer className="bg-slate-100 p-2 border-t-2">FOOTER</footer>
    </div>
  );
}

export default App;
