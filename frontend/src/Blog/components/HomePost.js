import { IF } from "../pages/url";
const HomePost = ({ post }) => {
  return (
    <div className="flex justify-center w-full px-0 mt-8 ml-0 space-x-4">
      <div className="w-[35%] h-[300px] flex justify-center items-center">
        {/* left */}
        <img
          src={IF + post.photo}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col w-[65%]">
        {/* right */}
        <h1 className="mb-1 text-xl font-bold md:mb-2 md:text-2xl">
          {post.title}
        </h1>
        <div className="flex items-center justify-between mb-2 text-sm font-semibold text-gray-500 md:mb-4">
          <div className="flex space-x-2">
            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>

        <p className="text-sm md:text-lg">
          {post.desc.slice(0, 200) + "... Read more"}
        </p>
      </div>
    </div>
  );
};

export default HomePost;
