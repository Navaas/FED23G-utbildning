import BucketListitem from "./BucketListItem";
import Header from "./Header";
import { mockedBucketList } from "./bucketData";

function App() {
  return (
    <>
      <Header /> {/* Mapp och key här ihop. */}
      <ul className="p-4 flex flex-col gap-2 text-lg">
        {mockedBucketList.map((bucketItem) => (
          <BucketListitem bucketItem={bucketItem} key={bucketItem.id} />
        ))}
      </ul>
    </>
  );
}

export default App;
