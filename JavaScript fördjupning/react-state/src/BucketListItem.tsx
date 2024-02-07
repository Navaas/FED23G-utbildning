import { BucketItem } from "./bucketData";

/* Berätta hur props ser ut! Hämtar bucktItem från bucketData filen. */
interface Props {
  bucketItem: BucketItem;
}

/* Hämta din props, den ska vara av typen Props (son interface ovan) */
function BucketListitem(props: Props) {
  const bucketItem = props.bucketItem;
  return (
    <>
      <li className="border-b-2 border-slate-300 flex justify-between">
        <span>{bucketItem.title}</span>
        {/* Här är en turnery för att kolla isChecked */}
        <span>{bucketItem.isChecked ? "✅" : ""}</span>{" "}
      </li>
    </>
  );
}

export default BucketListitem;
