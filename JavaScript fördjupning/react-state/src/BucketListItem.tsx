import { mockedBucketList } from "./bucketData";

function BucketListitem() {
  return (
    <>
      {/* Hämta en lista, loopa över den med hjälp av map, den hämtar en bucketItem och hämtar en titel. Key måste ha ett key för att veta vad som är vad. */}
      <ul className="p-4 flex flex-col gap-2 text-lg">
        {mockedBucketList.map((bucketItem) => (
          <li
            key={bucketItem.id}
            className="border-b-2 border-slate-300 flex justify-between"
          >
            <span>{bucketItem.title}</span>
            {/* Här är en turnery för att kolla isChecked */}
            <span>{bucketItem.isChecked ? "✅" : ""}</span>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default BucketListitem;
