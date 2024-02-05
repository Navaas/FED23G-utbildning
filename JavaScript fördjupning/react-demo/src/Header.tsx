/* Två olika sätt att typa din kod. */
interface Props {
  greeting?: string /* Nu kan du välja, måste inte använda greeting. */;
  name: string;
}

// type Props2 = {
//   name: string;
// };

function Header(props: Props) {
  // Props är alltid ett objekt
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-slate-800 sm:bg-green-800 md:bg-red-800 text-slate-100">
      <h1 className="text-4xl hover:text-red-700">
        {/* Stylen är med Tailwind */}
        {props.greeting || "Hejsan"} {props.name}!{" "}
        {/* Ta värdet om det finns, annars "Hejsan" */}
        {/* || ?? är samma sak */}
      </h1>
      <span>🍔</span>
    </header>
  );
}

export default Header;
