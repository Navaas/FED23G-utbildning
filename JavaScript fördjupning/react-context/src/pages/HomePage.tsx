import PostCard from "../components/PostCard";
import { mockedPosts } from "./posts";

/* HomePage är förälder till PostCard */
function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      {mockedPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default HomePage;
