import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Post } from "../pages/posts";

/* Vad är det som ska skickas över kontexten? = motorvägen */
interface ContextValue {
  likedPosts: Post[];
  toggleLikedPost: (post: Post) => void;
}

// eslint-disable-next-line
const LikedPostsContext = createContext<ContextValue>(null as any);

function LikedPostsProvider(props: PropsWithChildren) {
  const [likedPosts, setLikedPost] = useState<Post[]>([]);

  const toggleLikedPost = (post: Post) => {
    const isLiked = likedPosts.some((likedPosts) => likedPosts.id === post.id);

    if (isLiked) {
      setLikedPost(
        likedPosts.filter((likedPosts) => likedPosts.id !== post.id)
      );
    } else {
      setLikedPost([...likedPosts, post]);
    }
  };

  return (
    <LikedPostsContext.Provider value={{ likedPosts, toggleLikedPost }}>
      {props.children}
    </LikedPostsContext.Provider>
  );
}

/* Här skapar vi en hook.  */
export const useLikedPosts = () => useContext(LikedPostsContext);
export default LikedPostsProvider;
