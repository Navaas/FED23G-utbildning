/* Rename två iconer som är likadana */

import { HeartIcon as HeartIconOutlined } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { Post } from "../pages/posts";

interface Props {
  isLiked: boolean;
  post: Post;
  /* Såhär retuneras en funktion i Typescript. */
  onToggle: () => void;
}

/* PostCard är children till HomePage */
function PostCard({ post, isLiked, onToggle }: Props) {
  return (
    <div className="w-full ">
      <img src={post.src} className="w-full" />
      <div className="flex justify-between items-center p-4 pt-2">
        <p>{post.author}</p>
        {/* Är iconen likad gör den röd ? : Är den inte likad, gör den ej ifylld.  */}
        {isLiked ? (
          <HeartIconSolid className="h-6 w-6 text-red-700" onClick={onToggle} />
        ) : (
          <HeartIconOutlined className="h-6 w-6" onClick={onToggle} />
        )}
      </div>
    </div>
  );
}

export default PostCard;
