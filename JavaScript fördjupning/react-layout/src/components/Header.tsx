import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

function Header() {
  return (
    <header className="flex flex-row">
      <div className="w-1/4 bg-slate-600"></div>
      <div className="w-2/4 flex flex-row bg-slate-600 justify-center">
        <ArrowLeftIcon className="w-5 h-5" />
        <ArrowRightIcon className="w-5 h-5" />
        <button className="w-1/2 bg-gray-500">react-layout</button>
      </div>
      <div className="w-1/4 bg-slate-600"></div>
    </header>
  );
}

export default Header;
// grid grid-flow-row-dense grid-cols-3 md:grid-flow-row
