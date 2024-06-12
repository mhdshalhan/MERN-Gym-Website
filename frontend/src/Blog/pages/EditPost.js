import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { URL } from "./url";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const postId = useParams().id;
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);
  const navigate = useNavigate();

  const fetchPost = async () => {
    try {
      const res = await axios.get(URL + "api/v1/" + postId);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setFile(res.data.photo);
      setCats(res.data.Categories);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const post = {
      title,
      desc,

      Categories: cats,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("img", filename);
      data.append("file", file);
      post.photo = filename;
      console.log(data);
      //img upload
      try {
        const imgUpload = await axios.post(URL + "api/v1/uploads", data);
      } catch (err) {
        console.log(err);
      }
    }
    //post upload
    // console.log(post)
    try {
      const res = await axios.put(URL + "api/v1/" + postId, post, {
        withCredentials: true,
      });
      navigate("/post/" + res.data._id);
      // console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCategory = (i) => {
    let updatedcats = [...cats];
    updatedcats.splice(i);
    setCats(updatedcats);
  };
  const addCategory = () => {
    let updatedcats = [...cats]; //sending everthing
    updatedcats.push(cat);
    setCat("");
    setCats(updatedcats);
  };
  return (
    <div>
      <div className="px-6 md:px-[200] mt-8 mb-10">
        <h1 className="mt-8 text-xl font-bold md:text-2xl">Update a post</h1>
        <form className="flex flex-col w-full mt-4 space-y-4 md:space-y-8">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Enter your post title"
            className="px-4 py-2 outline-none"
          />
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            className="px-4"
          />
          <div className="flex flex-col ">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="px-4 py-2 outline-none"
                placeholder="Enter the post category"
                type="text"
              />
              <div
                onClick={addCategory}
                className="px-4 py-2 font-semibold text-white bg-black cursor-pointer "
              >
                Add
              </div>
            </div>
            {/* catagories */}

            <div className="flex px-4 mt-3 ">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center px-2 py-1 mr-4 space-x-2 bg-gray-200 rounded-md"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="p-1 text-sm text-white bg-black rounded-full cursor-pointer"
                  >
                    <ImCross />
                  </p>
                </div>
              ))}
            </div>
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              rows={15}
              cols={30}
              className="px-4 py-4 outline-none"
              placeholder="Enter post description"
            />
            <button
              onClick={handleUpdate}
              className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-lg"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
