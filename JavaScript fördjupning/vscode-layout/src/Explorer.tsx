import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

function Explorer() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-4">
        <span className="ml-4">EXPLORER</span>
        <EllipsisHorizontalIcon className="w-8 h-8" />
      </div>
      <div>VSCODE-LAYOUT</div>
    </div>
  );
}

export default Explorer;
