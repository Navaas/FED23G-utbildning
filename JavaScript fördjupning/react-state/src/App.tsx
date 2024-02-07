import { useState } from "react";
import BucketForm from "./BucketForm";
import BucketListitem from "./BucketListItem";
import Header from "./Header";
import { BucketItem, mockedBucketList } from "./bucketData";

function App() {
  const [bucketList, setBucketList] = useState(mockedBucketList);

  const handleSubmit = (bucketItem: BucketItem) => {
    setBucketList([
      bucketItem,
      /* Spredoperator ta med allt från den befintliga arrayen och lägg till det nya med setBucketList. */
      ...bucketList,
    ]);
    // Hantera sparningen..
  };

  return (
    <>
      <Header /> {/* Mapp och key här ihop. */}
      <BucketForm onSubmit={handleSubmit} />
      <ul className="p-4 flex flex-col gap-2 text-lg">
        {bucketList.map((bucketItem) => (
          <BucketListitem bucketItem={bucketItem} key={bucketItem.id} />
        ))}
      </ul>
    </>
  );
}

export default App;
