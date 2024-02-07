import { FormEvent, useState } from "react";
import { BucketItem } from "./bucketData";

interface Props {
  onSubmit: (bucketItem: BucketItem) => void;
}

function BucketForm(props: Props) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTitle("");
    const bucketItem = {
      id: Math.random().toString(),
      title: title,
      isChecked: false,
    };
    props.onSubmit(bucketItem);
  };

  return (
    <form
      className="p-4 flex border-b-2 border-slate-300"
      onSubmit={handleSubmit}
    >
      <input
        id="title"
        type="text"
        placeholder="Enter your next bucket..."
        className="flex-1"
        value={title}
        onChange={(event) =>
          setTitle(event.target.value)
        } /* event kan också förkortas med e. Target är det som triggar eventet. */
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default BucketForm;
