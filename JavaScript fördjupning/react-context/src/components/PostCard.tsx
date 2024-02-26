import { HeartIcon } from "@heroicons/react/24/outline";
import { Post } from "../pages/posts";

interface Props {
  post: Post;
}

/* PostCard är children till HomePage */
function PostCard({ post }: Props) {
  return (
    <div className="w-full ">
      <img src={post.src} className="w-full" />
      <div className="flex justify-between items-center p-4 pt-2">
        <p>{post.author}</p>
        <HeartIcon className="h-6 w-6" />
      </div>
    </div>
  );
}

export default PostCard;
