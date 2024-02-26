import PostCard from "../components/PostCard";
import { useLikedPosts } from "../providers/LikedPostProvider";
import { mockedPosts } from "./posts";

/* HomePage är förälder till PostCard. Det är den mockade datan som propsas vidare ner till PostCard. */
function HomePage() {
  const { likedPosts, toggleLikedPost } = useLikedPosts();
  return (
    <div className="flex flex-col gap-8">
      {mockedPosts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          /* Finns det någon likade post vars id är samma som likade id:n. lägg till en kopia och lägg till den.  */
          /* Some skickar tillbaka en true eller false. 
          Är uttrycket sant "likedPosts.id === post.id" true or false? 
          True = Skicka den till likade
          False = Den är inte likad*/
          isLiked={likedPosts.some((likedPosts) => likedPosts.id === post.id)}
          onToggle={() => toggleLikedPost(post)}
        />
      ))}
    </div>
  );
}

export default HomePage;
