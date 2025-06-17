import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

const BACKEND_URL = 'https://back-end-ys5e.onrender.com';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`${BACKEND_URL}/api/post/getPosts`);
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="bg-[#F4F1EC] dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center text-[#D43F00]">
              Recent Posts
            </h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className="text-lg text-[#003366] hover:underline text-center font-bold"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto bg-[#003366] rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold lg:text-6xl text-white">
          Welcome to{' '}
          <span className="text-[#FFC000] drop-shadow-md font-extrabold">
            TELEVISION SHOW
          </span>
        </h1>
        <p className="text-white text-xs sm:text-sm">
          The fastest and freshest world of TV entertainment – every moment, every highlight right here!
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-[#FFC000] font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>

      <div className="p-3 bg-white dark:bg-gray-800">
        <CallToAction />
      </div>
    </div>
  );
}
