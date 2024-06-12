import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import axios from "axios";
import { URL, IF } from "./url";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";

const Postdetials = () => {
  const postId = useParams().id;
  const [post, setPost] = useState({});

  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.authState);

  const fetchPost = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "api/v1/" + postId);
      setPost(res.data);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(true);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  const handleDeletePost = async () => {
    try {
      const res = await axios.delete(URL + "api/v1/" + postId, {
        withCredentials: true,
      });
      navigate("/blog");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen">
      {loader ? (
        <div className="h-[80vh] flex justify-center items-center w-full ">
          <Loader />
        </div>
      ) : (
        <div className="px-8 md:px-[200px] mt-8 mb-72">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-black md:text-3xl">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-2">
              {user.role === "admin" && (
                <>
                  <p
                    className="cursor-pointer"
                    onClick={() => navigate("/edit/" + postId)}
                  >
                    <BiEdit />
                  </p>
                  <p className="cursor-pointer" onClick={handleDeletePost}>
                    <MdDelete />
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 md:mt:4">
            <div className="flex space-x-2">
              <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
              <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
            </div>
          </div>
          <img src={IF + post.photo} className="w-full mx-auto mt-8" alt="" />
          <p className="mx-auto my-8 ">{post.desc}</p>
          <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories</p>
            <div className="flex items-center justify-center space-x-2">
              {post.Categories?.map((c, i) => (
                <>
                  <div key={i} className="px-3 py-1 bg-gray-300 rounded-lg">
                    {c}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Postdetials;
